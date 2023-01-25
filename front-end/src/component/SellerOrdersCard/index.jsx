// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';
import React from 'react';

function SellerOrdersCard({
  saleId,
  order,
  status,
  saleDate,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
}) {
  const history = useHistory();

  let statusUpdate = '';
  if (status === 'Preparando') {
    statusUpdate = 'seller-order-status-preparando';
  }
  if (status === 'Entregue') {
    statusUpdate = 'seller-order-status-entregue';
  }

  const onClick = (value) => {
    history.push({
      pathname: `/seller/orders/${value}`,
      state: order,
    });
  };

  const handleDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-br');
  };

  return (
    <div
      className="seller-order-card-container"
      data-testid={ `seller_orders__element-order-id-${saleId}` }
      onClick={ () => onClick(saleId) }
      aria-hidden="true"
    >
      <div className="seller-info">
        <h3 className="order-title">{`Pedido ${order}`}</h3>
      </div>

      <div>
        <div
          className={ `seller-order-status-${statusUpdate}` }
          data-testid={ `seller_orders__element-delivery-status-${saleId}` }
        >
          {status}
        </div>
      </div>

      <div>
        <ul className="seller_orders_list">
          <li
            className="seller_orders_li"
            data-testid={ `seller_orders__element-order-date-${saleId}` }
          >
            {handleDate(saleDate)}
          </li>
          <li
            className="seller_orders_li"
          >
            R$
            {' '}
            {' '}
          </li>
          <p
            data-testid={ `seller_orders__element-card-price-${saleId}` }
          >
            {`R$ ${totalPrice.replace(/\./, ',')}`}
          </p>
        </ul>
        <p
          className="seller_orders_adress"
          data-testid={ `seller_orders__element-card-address-${saleId}` }
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
    saleId: PropTypes.string,
    order: PropTypes.string,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
  }),
}.isRequired;
