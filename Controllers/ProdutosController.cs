using shopping_cart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shopping_cart.Models.BindingTargets;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

namespace shopping_cart.Controllers
{
    [Route("api/produtos")]
    [Authorize(Roles = "Administrator")]
    public class ProdutosController : Controller
    {
        private DataContext context;
        public ProdutosController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet("{id}")]
        [AllowAnonymous]
        public Produto GetProduto(long id)
        {
            IQueryable<Produto> query = context.Produtos
                .Include(p => p.Classificacao);
            if(HttpContext.User.IsInRole("Administrator"))
            {
                query = query.Include(p => p.PromocaoVendas)
                    .ThenInclude(s => s.Produtos);
            }
            Produto result = query.First(p => p.ProdutoId == id);

            if (result != null)
            {
                if (result.PromocaoVendas != null)
                {
                    result.PromocaoVendas.Produtos = result.PromocaoVendas.Produtos.Select(p =>
                    new Produto
                    {
                        ProdutoId = p.ProdutoId,
                        Nome = p.Nome,
                        Descricao = p.Descricao,
                        Preco = p.Preco,
                    });
                }
                if (result.Classificacao != null)
                {
                    foreach (Classificacao r in result.Classificacao)
                    {
                        r.Produto = null;

                    }
                }
            }
            return result;
        }
        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetProdutos(string produto, string search, 
            bool related = false, bool metadata = false)
        {
            IQueryable<Produto> query = context.Produtos;
            if (!string.IsNullOrWhiteSpace(produto))
            {
                string catlower = produto.ToLower();
                query = query.Where(p => p.Nome.ToLower().Contains(catlower));
            }
            if (!string.IsNullOrWhiteSpace(search))
            {
                string searchLower = search.ToLower();
                query = query.Where(p => p.Nome.ToLower().Contains(searchLower) || p.Descricao.ToLower().Contains(searchLower));
            }
            if (related && HttpContext.User.IsInRole("Administrator"))
            {
                query = query.Include(p => p.PromocaoVendas).Include(p => p.Classificacao);
                List<Produto> data = query.ToList();
                data.ForEach(p =>
                {
                    if (p.PromocaoVendas != null)
                    {
                        p.PromocaoVendas.Produtos = null;
                    }
                    if (p.Classificacao != null)
                    {
                        p.Classificacao.ForEach(r => r.Produto = null);
                    }
                });
                return metadata ? CreateMetadata(data) : Ok(data);
            }
            else
            {
                return metadata ? CreateMetadata(query) : Ok(query);
            }
        }

        private IActionResult CreateMetadata(IEnumerable<Produto> produtos)
        {
            return Ok(new
            {
                data = produtos,
                produtosearch = context.Produtos.Select(p => p.Nome)
                .Distinct().OrderBy(c => c)
            });
        }
        [HttpPost]
        public IActionResult CreateProduto([FromBody] ProdutoData pdata)
        {
            if (ModelState.IsValid)
            {
                Produto p = pdata.Produto;
                if (p.PromocaoVendas != null && p.PromocaoVendas.PromocaoVendasId != 0)
                {
                    context.Attach(p.Classificacao);
                }
                context.Add(p);
                context.SaveChanges();
                return Ok(p.ProdutoId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpPut("{id}")]
        public IActionResult ReplaceProduto(long id, [FromBody] ProdutoData pdata)
        {
            if (ModelState.IsValid)
            {
                Produto p = pdata.Produto;
                p.ProdutoId = id;
                if (p.PromocaoVendas != null && p.PromocaoVendas.PromocaoVendasId != 0)
                {
                    context.Attach(p.PromocaoVendas);
                }
                context.Update(p);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpPatch("{id}")]
        public IActionResult UpdateProduto(long id, [FromBody]JsonPatchDocument<ProdutoData> patch)
        {
            Produto produto = context.Produtos
            .Include(p => p.PromocaoVendas)
            .First(p => p.ProdutoId == id);
            ProdutoData pdata = new ProdutoData { Produto = produto };
            patch.ApplyTo(pdata, ModelState);
            if (ModelState.IsValid && TryValidateModel(pdata))
            {
                if (produto.PromocaoVendas != null && produto.PromocaoVendas.PromocaoVendasId != 0)
                {
                    context.Attach(produto.PromocaoVendas);
                }
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpDelete("{id}")]
        public void DeleteProduto(long id)
        {
            context.Produtos.Remove(new Produto { ProdutoId = id });
            context.SaveChanges();
        }
    }
}
