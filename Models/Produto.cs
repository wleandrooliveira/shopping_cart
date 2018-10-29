using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shopping_cart.Models
{
    public class Produto
    {
        public long     ProdutoId { get; set; }
        public string   Nome { get; set; }
        public string   Descricao { get; set; }
        public Double Preco { get; set; }

        public PromocaoVendas PromocaoVendas { get; set; }
        public List<Classificacao> Classificacao { get; set; }
    }
}
