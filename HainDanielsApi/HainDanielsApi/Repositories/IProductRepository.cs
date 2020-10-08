using HainDanielsApi.Models;

namespace HainDanielsApi.Repositories
{
    public interface IProductRepository : IApplicationRepository<Product>
    {
        Product GetProduct(int id);
    }
}
