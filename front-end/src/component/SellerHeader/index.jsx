import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

function SellerHeader() {
  const history = useHistory();
  const [user] = useState(() => JSON.parse(localStorage.getItem('user')));
  return (
    <header className="SellerHeader">
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Pedidos
      </Link>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        {user.name}
      </button>
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
    </header>
  );
}

export default SellerHeader;
