import { useEffect, useState } from 'react';
import Header from '../../component/Header';
import ProductCard from '../../component/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products').then((response) => response.json()).then((data) => setProducts(data));
  }, []);

  return (
    <div className="Products">
      <Header />
      <div>
        {products.length && products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
      <button
        type="button"
        customer_products__button-cart
      >
        <span>Ver Carrinho:</span>
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          Preço
        </span>
      </button>
    </div>
  );
}

export default Products;
