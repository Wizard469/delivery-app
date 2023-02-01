import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SellerHeader from '../../component/SellerHeader';
import { saleById } from '../../services/sales';

function SellerOrdersDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState({});

  const testIdPrefix = 'seller_order_details__element-order';

  const getSubTotal = (price, quantity) => (price * quantity)
    .toFixed(2).replace('.', ',');

  useEffect(() => {
    saleById(id)
      .then((data) => setSale(data.data));
  }, [id]);

  return (
    <div>
      <SellerHeader />
      <h2>Detalhes dos Pedidos</h2>
      <div>
        <p
          data-testid={ `${testIdPrefix}-details-label-order-id` }
        >
          {`PEDIDO ${sale.id} | `}
        </p>

        <p data-testid={ `${testIdPrefix}-details-label-order-date` }>
          {`${new Date(sale.saleDate).toLocaleDateString('pt-BR')} | `}
        </p>

        <p
          data-testid={ `${testIdPrefix}-details-label-delivery-status` }
        >
          {`${sale.status} | `}
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
          disabled
        >
          Saiu para a entrega
        </button>
      </div>

      <table>
        <thead>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </thead>
        <tbody>
          { sale.products && sale.products.map((product, i) => (
            <tr key={ product.id }>
              <td
                data-testid={ `${testIdPrefix}-table-item-number-${i}` }
              >
                {i + 1}
              </td>

              <td
                data-testid={ `${testIdPrefix}-table-name-${i}` }
              >
                {product.name}
              </td>

              <td
                data-testid={ `${testIdPrefix}-table-quantity-${i}` }
              >
                {product.SaleProduct.quantity}
              </td>

              <td
                data-testid={ `${testIdPrefix}-table-unit-price-${i}` }

              >
                {product.price.replace('.', ',')}
              </td>

              <td
                data-testid={ `${testIdPrefix}-table-sub-total-${i}` }
              >
                {getSubTotal(product.price, product.SaleProduct.quantity)}
              </td>
            </tr>
          )) }
        </tbody>
      </table>

      <p data-testid={ `${testIdPrefix}-total-price` }>
        {sale.id && `${sale.totalPrice.replace('.', ',')}`}
      </p>
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
