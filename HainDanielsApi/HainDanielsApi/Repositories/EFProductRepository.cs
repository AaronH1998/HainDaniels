using HainDanielsApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace HainDanielsApi.Repositories
{
    public class EFProductRepository : IProductRepository
    {
        private ApplicationDbContext context;

        public EFProductRepository(ApplicationDbContext ctx)
        {
            context = ctx;
        }

        public IQueryable<Product> Products => context.Products;

        public IEnumerable<Product> GetProducts()
        {
            return Products;
        }

        public void AddProduct(Product product)
        {
            var productEntity = context.Products.FirstOrDefault(p => p.M3Item == product.M3Item);

            if (productEntity == null)
            {
                productEntity = new Product();

                context.Products.Add(productEntity);
            }

            productEntity.M3Item = product.M3Item;
            productEntity.BatchOrderMultiples = product.BatchOrderMultiples;
            productEntity.Cap = product.Cap;
            productEntity.Description = product.Description;
            productEntity.Domino = product.Domino;
            productEntity.JarCode = product.JarCode;
            productEntity.Label = product.Label;
            productEntity.NetWeight = product.NetWeight;
            productEntity.PalletQyt = product.PalletQyt;
            productEntity.SalesDays = product.SalesDays;
            productEntity.UnitsPerCase = product.UnitsPerCase;
            productEntity.VarietyCode = product.VarietyCode;
            productEntity.Zambelli = product.Zambelli;

            context.SaveChanges();
        }
    }
}
