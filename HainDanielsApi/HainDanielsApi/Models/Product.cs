using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HainDanielsApi.Models
{
    [Serializable]
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
        public int? Label { get; set; }
        public string Cap { get; set; }
        public string Domino { get; set; }

        [Required]
        public int UnitsPerCase { get; set; }

        [Required]
        public double NetWeight { get; set; }

        public int? PalletQyt { get; set; }
        public int? SalesDays { get; set; }
        public int? BatchOrderMultiples { get; set; }

        [NotMapped]
        public double UOFFactor => 1.0 / UnitsPerCase;

        [NotMapped]
        public double KGFactor => NetWeight / UnitsPerCase;
    }
}
