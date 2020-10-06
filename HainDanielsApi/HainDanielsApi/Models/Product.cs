using CsvHelper.Configuration;
using System.ComponentModel.DataAnnotations;

namespace HainDanielsApi.Models
{
    public class Product
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int M3Item { get; set; }

        [Required]
        public string Description { get; set; }

        public string JarCode { get; set; }
        public string VarietyCode { get; set; }
        public string Zambelli { get; set; }
        public int Label { get; set; }
        public string Cap { get; set; }
        public string Domino { get; set; }

        [Required]
        public int UnitsPerCase { get; set; }

        [Required]
        public double NetWeight { get; set; }

        public int PalletQyt { get; set; }
        public int SalesDays { get; set; }
        public int BatchOrderMultiples { get; set; }
    }

    public class ProductMap : ClassMap<Product>
    {
        public ProductMap()
        {
            Map(m => m.M3Item).Name("M3 Item");
            Map(m => m.Description).Name("Description");
            Map(m => m.JarCode).Name("Jar Code");
            Map(m => m.VarietyCode).Name("Variety Code");
            Map(m => m.Zambelli).Name("Zambelli");
            Map(m => m.Label).Name("Label");
            Map(m => m.Cap).Name("Cap");
            Map(m => m.Domino).Name("Domino");
            Map(m => m.UnitsPerCase).Name("Units_Per_Case");
            Map(m => m.NetWeight).Name("Net_Weight");
            Map(m => m.PalletQyt).Name("Pallet_Qyt");
            Map(m => m.SalesDays).Name("Sales Days");
            Map(m => m.BatchOrderMultiples).Name("BatchOrderMultiples");
        }
    }
}
