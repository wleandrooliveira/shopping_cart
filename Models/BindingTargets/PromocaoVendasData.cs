using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace shopping_cart.Models.BindingTargets
{
    public class PromocaoVendasData
    {
        [Required]
        public string Descricao_promocao { get; set; }
        [Required]
        public string Produto { get; set; }
        [Required]
        public string Quantidade_Minima { get; set; }
        [Required]
        public DateTime Data_validade { get; set; }
        [Required]
        public int Desconto { get; set; }

        public PromocaoVendas PromocaoVendas => new PromocaoVendas
        {
            Descricao_promocao = Descricao_promocao,
            Produto = Produto,
            Quantidade_Minima = Quantidade_Minima,
            Data_validade = Data_validade,
            Desconto = Desconto
        };
    }
}



