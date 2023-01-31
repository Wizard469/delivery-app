import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SellerHeader from '../../component/SellerHeader';
import { saleById } from '../../services/sales';

function SellerOrdersDetails() {
  useEffect(() => {
    saleById();
  }, []);

  return (
    <div>
      <SellerHeader />
      <h1>Detalhes dos Pedidos</h1>
      <div>
        <p data-testid="seller_order_details__element-order-details-label-order-id">
          Número do Pedido
        </p>

        <p data-testid="seller_order_details__element-order-details-label-order-date">
          Date
        </p>

        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          Status
        </p>

        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
        >
          Preparar pedido
        </button>

        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
        >
          Saiu para a entrega
        </button>
      </div>

      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        <tr>
          <td
            data-testid="seller_order_details__element-order-table-item-number-<id>"
          >
            Número
          </td>

          <td
            data-testid="seller_order_details__element-order-table-name-<id>"
          >
            Name
          </td>

          <td
            data-testid="seller_order_details__element-order-table-quantity-<id>"
          >
            Quantidade
          </td>

          <td
            data-testid="seller_order_details__element-order-table-unit-price-<id>"

          >
            Preço
          </td>

          <td
            data-testid="seller_order_details__element-order-table-sub-total-<id>"
          >
            Subtotal
          </td>
        </tr>
      </table>

      <h2
        data-testid="seller_order_details__element-order-total-price"
      >
        Total Price
      </h2>
    </div>
  );
}

export default SellerOrdersDetails;

SellerOrdersDetails.propTypes = {
  SellerOrdersDetails: PropTypes.shape({
    id: PropTypes.string,
    order: PropTypes.string,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
  }),
}.isRequired;
