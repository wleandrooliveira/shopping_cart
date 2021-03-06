﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using shopping_cart.Models;

namespace shoppingcart.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20181024063245_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("shopping_cart.Models.Classificacao", b =>
                {
                    b.Property<long>("ClassificacaoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long?>("ProdutoId");

                    b.Property<int>("Stars");

                    b.HasKey("ClassificacaoId");

                    b.HasIndex("ProdutoId");

                    b.ToTable("Classificacaos");
                });

            modelBuilder.Entity("shopping_cart.Models.Produto", b =>
                {
                    b.Property<long>("ProdutoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descricao");

                    b.Property<string>("Nome");

                    b.Property<decimal?>("Preco");

                    b.Property<long?>("PromocaoVendasId");

                    b.HasKey("ProdutoId");

                    b.HasIndex("PromocaoVendasId");

                    b.ToTable("Produtos");
                });

            modelBuilder.Entity("shopping_cart.Models.PromocaoVendas", b =>
                {
                    b.Property<long>("PromocaoVendasId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("Data_validade");

                    b.Property<int>("Desconto");

                    b.Property<string>("Descricao_promocao");

                    b.Property<string>("Produto");

                    b.Property<string>("Quantidade_Minima");

                    b.HasKey("PromocaoVendasId");

                    b.ToTable("PromocaoVendas");
                });

            modelBuilder.Entity("shopping_cart.Models.Classificacao", b =>
                {
                    b.HasOne("shopping_cart.Models.Produto", "Produto")
                        .WithMany("Classificacao")
                        .HasForeignKey("ProdutoId");
                });

            modelBuilder.Entity("shopping_cart.Models.Produto", b =>
                {
                    b.HasOne("shopping_cart.Models.PromocaoVendas", "PromocaoVendas")
                        .WithMany("Produtos")
                        .HasForeignKey("PromocaoVendasId");
                });
#pragma warning restore 612, 618
        }
    }
}
