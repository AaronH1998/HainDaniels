﻿using Microsoft.EntityFrameworkCore;

namespace HainDanielsApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }

        public DbSet<AuditRecord> Audit { get; set; }
    }
}
