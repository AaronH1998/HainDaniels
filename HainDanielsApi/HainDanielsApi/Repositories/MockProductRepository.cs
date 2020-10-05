using HainDanielsApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HainDanielsApi.Repositories
{
    public class MockProductRepository : IProductRepository
    {
        readonly List<Item> items;

        public MockProductRepository()
        {
            items = new List<Item>()
            {
                new Item{M3Item=10000030,Description="ROBS STRAWBERRY JAM 4/1.36KG",JarCode="J0014",VarietyCode="V0112",Zambelli="BFIN_4",UnitsPerCase=4,NetWeight=5.44,SalesDays=621,BatchOrderMultiples=368},
                new Item{M3Item=10000058,Description="ROBS MINCEMEAT 4/1.36KG",JarCode="J0014",VarietyCode="V0081",UnitsPerCase=4,NetWeight=5.44,PalletQyt=84,SalesDays=621,BatchOrderMultiples=368 },
                new Item{M3Item=10000059,Description="ROBS MINCEMEAT 6/822G",JarCode="J0009",VarietyCode="V0081",Cap="STD",Domino="Black",UnitsPerCase=6,NetWeight=4.932,PalletQyt=140,SalesDays=931,BatchOrderMultiples=406}
            };
        }

        public async Task<List<Item>> GetProductsAsync()
        {
            return await Task.FromResult(items);
        }
    }
}
