using HainDanielsApi.Models;
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
    }
}
