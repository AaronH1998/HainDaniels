using CsvHelper.Configuration;

namespace HainDanielsApi.Models.FileFormatMaps
{
    public class ItemsInMap : ClassMap<Product>
    {
        public ItemsInMap()
        {
            Map(m => m.M3Item).Index(0).Name("M3 Item");
            Map(m => m.Description).Index(1).Name("Description");
            Map(m => m.JarCode).Index(2).Name("Jar Code");
            Map(m => m.VarietyCode).Index(3).Name("Variety Code");
            Map(m => m.Zambelli).Index(4).Name("Zambelli");
            Map(m => m.Label).Index(5).Name("Label");
            Map(m => m.Cap).Index(6).Name("Cap");
            Map(m => m.Domino).Index(7).Name("Domino");
            Map(m => m.UnitsPerCase).Index(8).Name("Units_Per_Case");
            Map(m => m.NetWeight).Index(9).Name("Net_Weight");
            Map(m => m.PalletQyt).Index(10).Name("Pallet_Qyt");
            Map(m => m.SalesDays).Index(11).Name("Sales Days");
            Map(m => m.BatchOrderMultiples).Index(12).Name("BatchOrderMultiples");
        }
    }
}
