using HainDanielsApi.Models;
using System.Collections.Generic;

namespace HainDanielsApi.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();

        void AddProduct(Product product);
    }
}
