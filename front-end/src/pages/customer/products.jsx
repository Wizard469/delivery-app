import { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../component/Header';
import ProductCard from '../../component/ProductCard';
import CartContext from '../../context/CartContext';

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const history = useHistory();

  const context = useMemo(() => ({
    cart, setCart,
  }), [cart]);

  const totalPrice = cart.reduce((acc, cur) => {
    const sum = acc + (cur.quantity * cur.price);
    return sum;
  }, 0);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <CartContext.Provider value={ context }>
      <div className="Products">
        <Header />
        <div>
          {products.length && products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))}
        </div>
        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ totalPrice === 0 }
          onClick={ () => history.push('/customer/checkout') }
        >
          <span>Ver Carrinho:</span>
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {totalPrice.toFixed(2).replace('.', ',')}
          </span>
        </button>
      </div>
    </CartContext.Provider>
  );
}

export default Products;
