import Header from '../../component/Header';
import ProductCard from '../../component/ProductCard';

function Products() {
  return (
    <div className="Products">
      <Header />
      <ProductCard />
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
