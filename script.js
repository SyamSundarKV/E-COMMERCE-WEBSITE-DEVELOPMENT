document.addEventListener('DOMContentLoaded', function () {
  const productsSection = document.getElementById('products');

  // Dummy product data
  const products = [
    { name: 'Product 1', price: 20, image: 'product1.jpg' },
    { name: 'Product 2', price: 30, image: 'product2.jpg' },
    { name: 'Product 3', price: 25, image: 'product3.jpg' }
  ];

  // Function to generate product cards
  function generateProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;
    productsSection.appendChild(card);
  }

  // Generate product cards
  products.forEach(product => {
    generateProductCard(product);
  });
});
