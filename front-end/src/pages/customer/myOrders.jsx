import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header';

const testIdPrefix = 'customer_orders__element';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { id } = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3001/sales/customer/${id}`);
      const data = await response.json();
      setOrders(data);
    })();
  }, [id]);

  return (
    <div>
      <Header />
      <div>
        {
          orders.length && orders.map((order) => (
            <Link
              to={ `/customer/orders/${order.id}` }
              key={ order.id }
            >
              <div>
                <div>
                  <span>PEDIDO</span>
                  <span data-testid={ `${testIdPrefix}-order-id-${order.id}` }>
                    {order.id}
                  </span>
                </div>
                <div>
                  <span data-testid={ `${testIdPrefix}-delivery-status-${order.id}` }>
                    {order.status}
                  </span>
                </div>
                <div>
                  <p data-testid={ `${testIdPrefix}-order-date-${order.id}` }>
                    {new Date(order.saleDate)
                      .toLocaleDateString('pt-BR', { dateStyle: 'short' })}
                  </p>
                  <p>
                    R$
                    <span data-testid={ `${testIdPrefix}-card-price-${order.id}` }>
                      {order.totalPrice.replace('.', ',')}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
