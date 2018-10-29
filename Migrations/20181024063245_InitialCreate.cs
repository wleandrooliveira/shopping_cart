using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace shoppingcart.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PromocaoVendas",
                columns: table => new
                {
                    PromocaoVendasId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Descricao_promocao = table.Column<string>(nullable: true),
                    Produto = table.Column<string>(nullable: true),
                    Quantidade_Minima = table.Column<string>(nullable: true),
                    Data_validade = table.Column<DateTime>(nullable: true),
                    Desconto = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PromocaoVendas", x => x.PromocaoVendasId);
                });

            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    ProdutoId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(nullable: true),
                    Descricao = table.Column<string>(nullable: true),
                    Preco = table.Column<decimal>(nullable: true),
                    PromocaoVendasId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.ProdutoId);
                    table.ForeignKey(
                        name: "FK_Produtos_PromocaoVendas_PromocaoVendasId",
                        column: x => x.PromocaoVendasId,
                        principalTable: "PromocaoVendas",
                        principalColumn: "PromocaoVendasId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Classificacaos",
                columns: table => new
                {
                    ClassificacaoId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Stars = table.Column<int>(nullable: false),
                    ProdutoId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classificacaos", x => x.ClassificacaoId);
                    table.ForeignKey(
                        name: "FK_Classificacaos_Produtos_ProdutoId",
                        column: x => x.ProdutoId,
                        principalTable: "Produtos",
                        principalColumn: "ProdutoId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Classificacaos_ProdutoId",
                table: "Classificacaos",
                column: "ProdutoId");

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_PromocaoVendasId",
                table: "Produtos",
                column: "PromocaoVendasId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Classificacaos");

            migrationBuilder.DropTable(
                name: "Produtos");

            migrationBuilder.DropTable(
                name: "PromocaoVendas");
        }
    }
}
