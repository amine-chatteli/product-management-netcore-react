namespace ProductManagementAPI.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }

        public void Order(int quantity)
        {
            if (quantity > Quantity)
            {
                throw new InvalidOperationException("Not enough stock available.");
            }
            Quantity -= quantity;
        }
    }
}