using CsvHelper.Configuration;

namespace HainDanielsApi.Models.FileFormatMaps
{
    public class UnitsOfConversionMap : ClassMap<Product>
    {
        public UnitsOfConversionMap()
        {
            Map(m => m.M3Item).Index(1).Name("Product Name");
            Map().Constant("UOF").Index(1).Name("to Unit");
            Map().Constant("Unit of Fill – Pot / Jar / Bucket / IBC / Tanker").Index(2).Name("to Unit Description");
            Map(m => m.UOFFactor).Index(3).Name("Factor");

            Map(m => m.M3Item, false).Index(4).Name("Product Name");
            Map().Constant("KG").Index(5).Name("to Unit");
            Map().Constant("Kilograms").Index(6).Name("to Unit Description");
            Map(m => m.KGFactor).Index(7).Name("Factor");
        }
    }
}
