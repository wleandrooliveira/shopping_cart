using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shopping_cart.Models
{
    public class Classificacao
    {
        public long ClassificacaoId { get; set; }
        public int Stars { get; set; }
        
        public Produto Produto { get; set; }
    }
}
