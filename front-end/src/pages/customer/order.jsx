import React from 'react';
import Header from '../../component/Header';

export default function Order() {
  return (
    <div>
      <Header />
      <h2>Finalizar Pedido</h2>
      <div className="sale-products-info">
        {/* <table>
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
              cart.length !== 0 && cart.map((product, index) => (
                <tr key={ product.id }>
                  <td data-testid={ `${testIdPrefix}-table-item-number-${index}` }>
                    {index + 1}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-name-${index}` }>
                    {product.name}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-quantity-${index}` }>
                    {product.quantity}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-unit-price-${index}` }>
                    {product.price.replace('.', ',')}
                  </td>
                  <td data-testid={ `${testIdPrefix}-table-sub-total-${index}` }>
                    {getSubTotal(product.price, product.quantity)}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={ () => updateCart(product.id) }
                      data-testid={ `${testIdPrefix}-table-remove-${index}` }
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table> */}
        {/* <p data-testid={ `${testIdPrefix}-total-price` }>
          {totalPrice !== 0 && `Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
        </p> */}
      </div>
    </div>
  );
}
