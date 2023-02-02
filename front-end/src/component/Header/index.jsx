import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

function Header() {
  const history = useHistory();
  const [user] = useState(() => JSON.parse(localStorage.getItem('user')));

  return (
    <header className="Customer-Header">
      <div className="header-item">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
      </div>
      <div className="header-item">
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
      </div>
      <div className="header-item">
        <p data-testid="customer_products__element-navbar-user-full-name">
          { user.name }
        </p>
      </div>
      <div className="header-item">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => {
            localStorage.removeItem('user');
            history.replace('/login');
          } }
        >
          Sair
        </button>
      </div>
    </header>
  );
}

export default Header;
