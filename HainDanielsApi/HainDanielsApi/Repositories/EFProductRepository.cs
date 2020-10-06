using HainDanielsApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<List<Product>> GetProductsAsync()
        {
            return await Task.FromResult(Products.ToList());
        }

        public void AddProduct(Product product)
        {
            using (var transaction = context.Database.BeginTransaction())
            {
                context.Products.Add(product);
                context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT Products ON;");
                context.SaveChanges();
                context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT Products OFF;");
                transaction.Commit();
            }
        }
    }
}
