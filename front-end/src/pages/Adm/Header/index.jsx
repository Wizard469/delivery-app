import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="Header">
      <Link
        // to="/customer/orders" - não sei se está certo
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar Usuários
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