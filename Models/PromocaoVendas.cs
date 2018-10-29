using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shopping_cart.Models
{
    public class PromocaoVendas
    {
        public long PromocaoVendasId { get; set; }


        public string Descricao_promocao { get; set; }
        public string Produto { get; set; }
        public string Quantidade_Minima { get; set; }

        public DateTime? Data_validade { get; set; }

        public int Desconto { get; set; }

        public IEnumerable<Produto> Produtos { get; set; }
    }
}
