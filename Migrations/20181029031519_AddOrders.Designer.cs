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
    [Migration("20181029031519_AddOrders")]
    partial class AddOrders
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("shopping_cart.Models.CartLine", b =>
                {
                    b.Property<long>("CartLineId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long?>("OrderId");

                    b.Property<long>("ProductId");

                    b.Property<int>("Quantity");

                    b.HasKey("CartLineId");

                    b.HasIndex("OrderId");

                    b.ToTable("CartLine");
                });

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

            modelBuilder.Entity("shopping_cart.Models.Order", b =>
                {
                    b.Property<long>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<long>("PaymentId");

                    b.Property<bool>("Shipped");

                    b.HasKey("OrderId");

                    b.HasIndex("PaymentId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("shopping_cart.Models.Payment", b =>
                {
                    b.Property<long>("PaymentId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AuthCode");

                    b.Property<string>("CardExpiry")
                        .IsRequired();

                    b.Property<string>("CardNumber")
                        .IsRequired();

                    b.Property<int>("CardSecurityCode");

                    b.Property<decimal>("Total");

                    b.HasKey("PaymentId");

                    b.ToTable("Payment");
                });

            modelBuilder.Entity("shopping_cart.Models.Produto", b =>
                {
                    b.Property<long>("ProdutoId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descricao");

                    b.Property<string>("Nome");

                    b.Property<double>("Preco");

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

            modelBuilder.Entity("shopping_cart.Models.CartLine", b =>
                {
                    b.HasOne("shopping_cart.Models.Order")
                        .WithMany("Products")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("shopping_cart.Models.Classificacao", b =>
                {
                    b.HasOne("shopping_cart.Models.Produto", "Produto")
                        .WithMany("Classificacao")
                        .HasForeignKey("ProdutoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("shopping_cart.Models.Order", b =>
                {
                    b.HasOne("shopping_cart.Models.Payment", "Payment")
                        .WithMany()
                        .HasForeignKey("PaymentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("shopping_cart.Models.Produto", b =>
                {
                    b.HasOne("shopping_cart.Models.PromocaoVendas", "PromocaoVendas")
                        .WithMany("Produtos")
                        .HasForeignKey("PromocaoVendasId")
                        .OnDelete(DeleteBehavior.SetNull);
                });
#pragma warning restore 612, 618
        }
    }
}
