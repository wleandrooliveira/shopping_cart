using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace shopping_cart.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opts)
            : base(opts) { }

        public DbSet<Produto> Produtos { get; set; }
        public DbSet<PromocaoVendas> PromocaoVendas { get; set; }
        public DbSet<Classificacao> Classificacaos { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>().HasMany<Classificacao>(p => p.Classificacao)
                .WithOne(r => r.Produto).OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Produto>().HasOne<PromocaoVendas>(p => p.PromocaoVendas)
                .WithMany(s => s.Produtos).OnDelete(DeleteBehavior.SetNull);
        }
    }
}
