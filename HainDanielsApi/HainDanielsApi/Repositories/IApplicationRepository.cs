using System.Collections.Generic;

namespace HainDanielsApi.Repositories
{
    public interface IApplicationRepository<T>
    {
        IEnumerable<T> GetItems();

        void AddItem(T t);
    }
}
