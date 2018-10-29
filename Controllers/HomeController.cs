using Microsoft.AspNetCore.Mvc;
using shopping_cart.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace shopping_cart.Controllers
{
    public class HomeController : Controller
    {
        private DataContext context;

        public HomeController(DataContext ctx)
        {
            context = ctx;
        }

        public IActionResult Index()
        {
            ViewBag.Message = "Shopping Cart App";
            return View(context.Produtos.OrderBy(p => p.ProdutoId).First());
        }

        [Authorize]
        public string Protected()
        {
            return "You have been authenticated";
        }
    }
}
    