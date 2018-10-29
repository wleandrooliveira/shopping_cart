﻿using shopping_cart.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace shopping_cart.Controllers
{
    [Route("/api/orders")]
    [Authorize(Roles = "Administrator")]
    public class OrderController : Controller
    {
        private DataContext context;
        public OrderController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet]
        public IEnumerable<Order> GetOrders()
        {
            return context.Orders
            .Include(o => o.Products).Include(o => o.Payment);
        }
        [HttpPost("{id}")]
        public void MarkShipped(long id)
        {
            Order order = context.Orders.Find(id);
            if (order != null)
            {
                order.Shipped = true;
                context.SaveChanges();
            }
        }
        [HttpPost]
        [AllowAnonymous]
        public IActionResult CreateOrder([FromBody] Order order)
        {
            if (ModelState.IsValid)
            {
                order.OrderId = 0;
                order.Shipped = false;
                order.Payment.Total = GetPrice(order.Products);
                ProcessPayment(order.Payment);
                if (order.Payment.AuthCode != null)
                {
                    context.Add(order);
                    context.SaveChanges();
                    return Ok(new
                    {
                        orderId = order.OrderId,
                        authCode = order.Payment.AuthCode,
                        amount = order.Payment.Total
                    });
                }
                else
                {
                    return BadRequest("Payment rejected");
                }
            }
            return BadRequest(ModelState);
        }
        private decimal GetPrice(IEnumerable<CartLine> lines)
        {
            IEnumerable<long> ids = lines.Select(l => l.ProductId);
            return context.Produtos
            .Where(p => ids.Contains(p.ProdutoId))
            .Select(p => lines
            .First(l => l.ProductId == p.ProdutoId).Quantity * p.ProdutoId)
            .Sum();
        }
        private void ProcessPayment(Payment payment)
        {
            // integrate your payment system here
            payment.AuthCode = "12345";
        }
    }
}

