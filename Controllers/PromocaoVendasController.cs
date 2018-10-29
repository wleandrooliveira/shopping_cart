using Microsoft.AspNetCore.Mvc;
using shopping_cart.Models;
using shopping_cart.Models.BindingTargets;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace shopping_cart.Controllers
{
    [Route("api/promocaovendas")]
    [Authorize(Roles = "Administrator")]
    public class PromocaoVendasController : Controller
    {
        private DataContext context;

        public PromocaoVendasController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet]
        public IEnumerable<PromocaoVendas>GetPromocaoVendas()
        {
            return context.PromocaoVendas;
        }
        [HttpPost]
        public IActionResult CreatePromocaoVendas([FromBody]PromocaoVendasData sdata)
        {
            if (ModelState.IsValid)
            {
                PromocaoVendas s = sdata.PromocaoVendas;
                context.Add(s);
                context.SaveChanges();
                return Ok(s.PromocaoVendasId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpPut("{id}")]
        public IActionResult ReplacePromocaoVendas(long id,[FromBody] PromocaoVendasData sdata)
        {
            if (ModelState.IsValid)
            {
                PromocaoVendas s = sdata.PromocaoVendas;
                s.PromocaoVendasId = id;
                context.Update(s);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpDelete("{id}")]
        public void DeletePromocaoVendas(long id)
        {
            context.Remove(new PromocaoVendas { PromocaoVendasId = id });
            context.SaveChanges();
        }
    }
}


