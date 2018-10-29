using System;
using System.ComponentModel.DataAnnotations;

namespace shopping_cart.Models.BindingTargets
{

    public class ProdutoData
    {

        [Required]
        public string Nome
        {
            get => Produto.Nome; set => Produto.Nome = value;
        }

        [Required]
        public string Descricao
        {
            get => Produto.Descricao; set => Produto.Descricao = value;
        }

        [Range(1, int.MaxValue, ErrorMessage = "Price must be at least 1")]
        public Double Preco
        {
            get => Produto.Preco; set => Produto.Preco = value;
        }

        public long? PromocaoVendas
        {
            get => Produto.PromocaoVendas?.PromocaoVendasId ?? null;
            set
            {
                if (!value.HasValue)
                {
                    Produto.PromocaoVendas = null;
                }
                else
                {
                    if (Produto.PromocaoVendas == null)
                    {
                        Produto.PromocaoVendas = new PromocaoVendas();
                    }
                    Produto.PromocaoVendas.PromocaoVendasId = value.Value;
                }
            }
        }

        public Produto Produto { get; set; } = new Produto();
    }
}
