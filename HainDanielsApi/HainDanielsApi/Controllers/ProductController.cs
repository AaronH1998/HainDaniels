using CsvHelper;
using CsvHelper.TypeConversion;
using HainDanielsApi.Extensions;
using HainDanielsApi.Models;
using HainDanielsApi.Models.FileFormatMaps;
using HainDanielsApi.Repositories;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HainDanielsApi.Controllers
{
    public class ProductPagingRequest
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public IProductRepository productRepository;

        public ProductController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet]
        public DataSourceResult GetProducts([DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            return productRepository.GetProducts().ToDataSourceResult(dataSourceRequest);
        }

        [HttpPost]
        public async Task<IActionResult> ImportProductFiles([FromForm(Name = "itemsIn")] IFormFile file)
        {
            if (!file.FileName.Contains(".csv"))
            {
                return Ok(new { success = false, message = "File must be of CSV format." });
            }

            if (file.Length > 0)
            {
                var filePath = Path.GetTempFileName();

                using (var stream = System.IO.File.Create(filePath))
                {
                    await file.CopyToAsync(stream);
                }

                using (var reader = new StreamReader(filePath))
                using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
                {
                    csv.Configuration.TrimOptions = CsvHelper.Configuration.TrimOptions.Trim;
                    csv.Configuration.TypeConverterCache.AddConverter(typeof(int), new RemoveWhiteSpaceFromIntConverter());
                    csv.Configuration.RegisterClassMap<ItemsInMap>();

                    try
                    {
                        var rawRecords = csv.GetRecords<Product>().ToArray();

                        var invalidRecords = rawRecords
                                            .Where(p => p.M3Item == 0 || p.NetWeight == 0 || p.UnitsPerCase == 0 || string.IsNullOrWhiteSpace(p.Description))
                                            .ToArray();

                        if (invalidRecords.Any())
                        {
                            return Ok(new { success = false, message = "One or more products has a missing required field. The required fields are: M3 Item, Net_Weight,Units_Per_Case and Description" });
                        }

                        var validRecords = rawRecords
                                   .Where(p => p.M3Item != 0 && p.NetWeight != 0 && p.UnitsPerCase != 0 && !string.IsNullOrWhiteSpace(p.Description))
                                   .ToArray();


                        foreach (var product in validRecords)
                        {
                            productRepository.AddProduct(product);
                        }
                    }
                    catch (TypeConverterException ex)
                    {
                        return Ok(new { success = false, message = "One or more fields are of the incorrect data type" });
                    }
                }
            }

            return Ok(new { success = true, message = "File succesfully uploaded." });
        }

        [HttpGet("Export/{fileType}")]
        public FileStreamResult ExportFile(string fileType)
        {
            var mapType = Type.GetType($"HainDanielsApi.Models.FileFormatMaps.{fileType}Map", true, true);

            var records = productRepository.GetProducts();

            MemoryStream ms;
            using (var stream = new MemoryStream())
            using (var writer = new StreamWriter(stream, Encoding.UTF8))
            using (var csv = new CsvWriter(writer, CultureInfo.InvariantCulture))
            {
                csv.Configuration.RegisterClassMap(mapType);
                csv.WriteRecords(records);
                writer.Flush();
                var result = stream.ToArray();

                ms = new MemoryStream(result);
            }

            return File(ms, "text/csv");

        }
    }
}