﻿using HainDanielsApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HainDanielsApi.Repositories
{
    public interface IProductRepository
    {
        Task<List<Item>> GetProductsAsync();
    }
}
