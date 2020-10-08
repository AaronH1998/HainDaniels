using CsvHelper.Configuration;

namespace HainDanielsApi.Models.FileFormatMaps
{
    public class ProductsMap : ClassMap<Product>
    {
        public ProductsMap()
        {
            Map(m => m.M3Item).Index(0).Name("Product Name");
            Map(m => m.Description).Index(1).Name("Description");
            Map().Index(2).Name("Parent Product Name");
            Map().Index(3).Name("Unit Id");
            Map().Index(4).Name("rec Crew Size");
            Map().Index(5).Name("unit Material Cost");
        }
    }
}
