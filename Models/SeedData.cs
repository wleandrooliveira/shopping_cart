using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using shopping_cart.Models;

namespace shopping_cart.Models
{
    public class SeedData
    {
        public static void SeedDatabase(DataContext context)
        {
            context.Database.Migrate();
            if (context.Produtos.Count() == 0)
            {
                var s1 = new PromocaoVendas
                {
                    Descricao_promocao = "Leve 3 e pague 2",
                    Produto = "Kayak",
                    Quantidade_Minima ="5",
                    Data_validade = DateTime.ParseExact("28/10/2018 23:59:00", "dd/MM/yyyy HH:mm:ss", null),
                    Desconto = 20
                };
                var s2 = new PromocaoVendas
                {
                    Descricao_promocao = "Leve 2 e pague 1",
                    Produto = "Soccer Ball",
                    Quantidade_Minima = "2",
                    Data_validade = DateTime.ParseExact("28/10/2018 23:59:00", "dd/MM/yyyy HH:mm:ss", null),
                    Desconto = 12
                };
                var s3 = new PromocaoVendas
                {
                    Descricao_promocao = "Leve 2 e pague 1",
                    Produto = "Chair",
                    Quantidade_Minima = "2",
                    Data_validade = DateTime.ParseExact("28/10/2018 23:59:00", "dd/MM/yyyy HH:mm:ss", null),
                    Desconto = 30
                };
                var s4 = new PromocaoVendas
                {
                    Descricao_promocao = "Desconto de aniversário da loja",
                    Produto = "Stadium",
                    Quantidade_Minima = "2",
                    Data_validade = DateTime.ParseExact("28/10/2018 23:59:00", "dd/MM/yyyy HH:mm:ss", null),
                    Desconto = 30
                };
                var s5 = new PromocaoVendas
                {
                    Descricao_promocao = "Desconto de aniversário da loja",
                    Produto = "Lifejacket",
                    Quantidade_Minima = "2",
                    Data_validade = DateTime.ParseExact("28/10/2018 23:59:00", "dd/MM/yyyy HH:mm:ss", null),
                    Desconto = 30
                };
                context.Produtos.AddRange(
                    new Produto
                    {
                        Nome = "Kayak",
                        Descricao = "A boat for one person",
                        Preco = 275,
                        PromocaoVendas = s1,
                        Classificacao = new List<Classificacao> {
                    new Classificacao { Stars = 4 }, new Classificacao { Stars = 3 }}
                    },
                    new Produto
                    {
                        Nome = "Lifejacket",
                        Descricao = "Protective and fashionable",
                        Preco = 48,
                        PromocaoVendas = s2,
                        Classificacao = new List<Classificacao> {
                    new Classificacao { Stars = 2 }, new Classificacao { Stars = 5 }}
                    },
                    new Produto
                    {
                        Nome = "Soccer Ball",
                        Descricao = "FIFA-approved size and weight",
                        Preco = 19.50,
                        PromocaoVendas = s3,
                        Classificacao = new List<Classificacao> {
                    new Classificacao { Stars = 2 }, new Classificacao { Stars = 5 }}
                    },
                    new Produto
                    {
                        Nome = "Corner Flags",
                        Descricao = "Give your pitch a professional touch",
                        Preco = 34.95,
                        PromocaoVendas = s3,
                        Classificacao = new List<Classificacao> {
                    new Classificacao { Stars = 2 }, new Classificacao { Stars = 5 }}
                    },
                    new Produto
                    {
                        Nome = "Stadium",
                        Descricao = "Flat-packed 35,000-seat stadium",
                        Preco = 34.95,
                        PromocaoVendas = s4,
                        Classificacao = new List<Classificacao> {
                    new Classificacao { Stars = 2 }, new Classificacao { Stars = 5 }}
                    },
                    new Produto
                    {
                        Nome = "Chair",
                        Descricao = "Secretly give your opponent a disadvantage",
                        Preco = 29.95,
                        PromocaoVendas = s5,
                        Classificacao = new List<Classificacao> {
                    new Classificacao { Stars = 2 }, new Classificacao { Stars = 5 }}
                    },
                    new Produto
                    {
                        Nome = "Human Chess Board",
                        Descricao = "Secretly give your opponent a disadvantage",
                        Preco = 75,
                        PromocaoVendas = s5,
                        Classificacao = new List<Classificacao> {
                    new Classificacao { Stars = 2 }, new Classificacao { Stars = 5 }}
                    },
                    new Produto
                    {
                        Nome = "Bling-Bling King",
                        Descricao = "Gold-plated, diamond-studded King",
                        Preco = 1200,
                        PromocaoVendas = s3
                    });
                context.SaveChanges();
            }
        }
    }
}


