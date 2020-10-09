using System.Collections.Generic;

namespace HainDanielsApi.Repositories
{
    public interface IApplicationRepository<T>
    {
        IEnumerable<T> GetItems();

        void SaveItem(T t);
    }
}
