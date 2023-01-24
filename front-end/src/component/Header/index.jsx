import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="Header">
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </Link>
      <p data-testid="customer_products__element-navbar-user-full-name">
        Username
      </p>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}

export default Header;
