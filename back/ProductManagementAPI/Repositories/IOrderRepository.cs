using ProductManagementAPI.Entities;
using System.Collections.Generic;

namespace ProductManagementAPI.Repositories
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetAllOrders();
        void AddOrder(Order order);
    }
}