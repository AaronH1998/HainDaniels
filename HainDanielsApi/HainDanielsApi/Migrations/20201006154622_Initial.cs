using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HainDanielsApi.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    M3Item = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    JarCode = table.Column<string>(nullable: true),
                    VarietyCode = table.Column<string>(nullable: true),
                    Zambelli = table.Column<string>(nullable: true),
                    Label = table.Column<int>(nullable: false),
                    Cap = table.Column<string>(nullable: true),
                    Domino = table.Column<string>(nullable: true),
                    UnitsPerCase = table.Column<int>(nullable: false),
                    NetWeight = table.Column<double>(nullable: false),
                    PalletQyt = table.Column<int>(nullable: false),
                    SalesDays = table.Column<int>(nullable: false),
                    BatchOrderMultiples = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
