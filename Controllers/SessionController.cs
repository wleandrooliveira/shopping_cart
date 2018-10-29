using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using shopping_cart.Models;
using shopping_cart.Models.BindingTargets;

namespace shopping_cart.Controllers
{
    [Route("/api/session")]
    public class SessionController : Controller
    {
        [HttpGet("cart")]
        public IActionResult GetCart()
        {
            return Ok(HttpContext.Session.GetString("cart"));
        }
        [HttpPost("cart")]
        public void StoreCart([FromBody] CartProdutoSelect[] produtos)
        {
            var jsonData = JsonConvert.SerializeObject(produtos);
            HttpContext.Session.SetString("cart", jsonData);
        }
        [HttpGet("checkout")]
        public IActionResult GetCheckout()
        {
            return Ok(HttpContext.Session.GetString("checkout"));
        }
        [HttpPost("checkout")]
        public void StoreCheckout([FromBody] CheckoutState data)
        {
            HttpContext.Session.SetString("checkout",
            JsonConvert.SerializeObject(data));
        }

    }
}
