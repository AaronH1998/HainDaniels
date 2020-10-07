﻿// <auto-generated />
using System;
using HainDanielsApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HainDanielsApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HainDanielsApi.Models.Product", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BatchOrderMultiples");

                    b.Property<string>("Cap");

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<string>("Domino");

                    b.Property<string>("JarCode");

                    b.Property<int?>("Label");

                    b.Property<int>("M3Item");

                    b.Property<double>("NetWeight");

                    b.Property<int?>("PalletQyt");

                    b.Property<int?>("SalesDays");

                    b.Property<int>("UnitsPerCase");

                    b.Property<string>("VarietyCode");

                    b.Property<string>("Zambelli");

                    b.HasKey("ID");

                    b.ToTable("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
