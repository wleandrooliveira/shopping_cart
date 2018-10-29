using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shopping_cart.Models
{
    public class CartProdutoSelect
    {
        public long produtoId { get; set; }
        public string nome { get; set; }
        public double preco { get; set; }
        public int quantidade { get; set; }
    }
}
