import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../component/Header';

const tableHeaders = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-total',
];

const getSubTotal = (price, quantity) => (price * quantity).toFixed(2).replace('.', ',');
const testIdPrefix = 'customer_order_details__element-order';

export default function Order() {
  const { id } = useParams();
  const [sale, setSale] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/sales/${id}`).then((response) => response.json()).then((data) => setSale(data));
  }, []);

  return (
    <div>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <div className="sale-products-info">
        {sale.id && (
          <div>
            <span data-testid={ `${testIdPrefix}-details-label-order-id` }>
              {`PEDIDO ${sale.id} | `}
            </span>
            <span data-testid={ `${testIdPrefix}-details-label-seller-name` }>
              {`P. Vend: ${sale.seller.name} | `}
            </span>
            <span data-testid={ `${testIdPrefix}-details-label-order-date` }>
              {`${new Date(sale.saleDate).toLocaleDateString('pt-BR')} | `}
            </span>
            <span data-testid={ `${testIdPrefix}-details-label-delivery-status<index>` }>
              {`${sale.status} | `}
            </span>
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
            >
              Marcar como entregue
            </button>
          </div>
        )}
        <table>
          <thead>
            <tr>
              {
                tableHeaders.map((header) => (
                  <th key={ header }>
                    {header}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              sale.products && sale.products.map((product, index) => (
                <tr key={ product.id }>
                  <td data-testid={ `${testIdPrefix}-table-item-number-${index}` }>
                    {index + 1}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-name-${index}` }>
                    {product.name}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-quantity-${index}` }>
                    {product.SaleProduct.quantity}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-unit-price-${index}` }>
                    {product.price.replace('.', ',')}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-sub-total-${index}` }>
                    {getSubTotal(product.price, product.SaleProduct.quantity)}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <p data-testid={ `${testIdPrefix}-total-price` }>
          {sale.id && `Total: R$ ${sale.totalPrice}`}
        </p>
      </div>
    </div>
  );
}
