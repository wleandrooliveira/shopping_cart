using Microsoft.EntityFrameworkCore.Migrations;

namespace shoppingcart.Migrations
{
    public partial class ChangeDeleteBehavior : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classificacaos_Produtos_ProdutoId",
                table: "Classificacaos");

            migrationBuilder.DropForeignKey(
                name: "FK_Produtos_PromocaoVendas_PromocaoVendasId",
                table: "Produtos");

            migrationBuilder.AlterColumn<double>(
                name: "Preco",
                table: "Produtos",
                nullable: false,
                oldClrType: typeof(double),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Classificacaos_Produtos_ProdutoId",
                table: "Classificacaos",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "ProdutoId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Produtos_PromocaoVendas_PromocaoVendasId",
                table: "Produtos",
                column: "PromocaoVendasId",
                principalTable: "PromocaoVendas",
                principalColumn: "PromocaoVendasId",
                onDelete: ReferentialAction.SetNull);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classificacaos_Produtos_ProdutoId",
                table: "Classificacaos");

            migrationBuilder.DropForeignKey(
                name: "FK_Produtos_PromocaoVendas_PromocaoVendasId",
                table: "Produtos");

            migrationBuilder.AlterColumn<double>(
                name: "Preco",
                table: "Produtos",
                nullable: true,
                oldClrType: typeof(double));

            migrationBuilder.AddForeignKey(
                name: "FK_Classificacaos_Produtos_ProdutoId",
                table: "Classificacaos",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "ProdutoId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Produtos_PromocaoVendas_PromocaoVendasId",
                table: "Produtos",
                column: "PromocaoVendasId",
                principalTable: "PromocaoVendas",
                principalColumn: "PromocaoVendasId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
