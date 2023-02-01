import PropTypes from 'prop-types';
import './styles.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

function SellerOrdersCard({ sale: {
  id,
  status,
  saleDate,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
} }) {
  const history = useHistory();

  let statusUpdate = '';
  if (status === 'Preparando') {
    statusUpdate = 'seller-order-status-preparando';
  }
  if (status === 'Entregue') {
    statusUpdate = 'seller-order-status-entregue';
  }

  const onClick = (value) => {
    history.push(`/seller/orders/${value}`);
  };

  const handleDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-br');
  };

  return (
    <div
      onClick={ () => onClick(id) }
      className="seller-order-card-container"
      data-testid={ `seller_orders__element-order-id-${id}` }
      aria-hidden="true"
    >
      <div className="seller-info">
        <h3 className="order-title">{`Pedido ${id}`}</h3>
      </div>

      <div>
        <div
          className={ `seller-order-status-${statusUpdate}` }
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          {status}
        </div>
      </div>

      <div>
        <ul className="seller_orders_list">
          <li
            className="seller_orders_li"
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            {handleDate(saleDate)}
          </li>
          <li
            className="seller_orders_li"
          >
            <p
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              R$
              {' '}
              {totalPrice.replace(/\./, ',')}
            </p>
          </li>
        </ul>
        <p
          className="seller_orders_adress"
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          {`Endereço: ${deliveryAddress}, ${deliveryNumber}`}
        </p>
      </div>
    </div>
  );
}

export default SellerOrdersCard;

SellerOrdersCard.propTypes = {
  SellerOrdersCard: PropTypes.shape({
    id: PropTypes.string,
    order: PropTypes.string,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
  }),
}.isRequired;
