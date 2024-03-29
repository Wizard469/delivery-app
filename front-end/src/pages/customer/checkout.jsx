import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import usePersistedState from '../../hooks/use-persisted-state';
import { createSale } from '../../services/sales';
import Header from '../../component/Header/index';

const tableHeaders = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-total',
  'Remover Item',
];

const getSubTotal = (price, quantity) => (price * quantity).toFixed(2).replace('.', ',');
const testIdPrefix = 'customer_checkout__element-order';

export default function Checkout() {
  const history = useHistory();
  const [cart, setCart] = usePersistedState('cart');
  const totalPrice = cart.reduce((acc, cur) => {
    const sum = acc + (cur.quantity * cur.price);
    return sum;
  }, 0);
  const [order, setOrder] = useState(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
      userId: user.id,
      sellerId: null,
      deliveryAddress: '',
      deliveryNumber: '',
    };
  });

  const [sellers, setSellers] = useState([]);

  const updateCart = (productId) => {
    const updatedCart = cart.filter(({ id }) => id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    fetch('http://localhost:3001/users/sellers')
      .then((response) => response.json())
      .then((data) => setSellers(data));
  }, []);

  return (
    <div className="checkout">
      <Header />
      <h2>Finalizar Pedido</h2>
      <div className="sale-products-info">
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
        </table>
        <p data-testid={ `${testIdPrefix}-total-price` }>
          {totalPrice !== 0 && `Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
        </p>
      </div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <div className="sale-delivery-info">
        <form>
          <select
            name="seller"
            id="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ (e) => setOrder({ ...order, sellerId: e.target.value }) }
          >
            <option value="----" disabled selected>Selecione o Vendedor</option>
            {sellers.length && sellers.map((el) => (
              <option value={ el.id } key={ el.id }>{el.name}</option>
            ))}
          </select>
          <input
            type="text"
            id="address"
            placeholder="Informe seu endereço, sem numero..."
            data-testid="customer_checkout__input-address"
            onChange={ (e) => setOrder({ ...order, deliveryAddress: e.target.value }) }
          />
          <input
            type="text"
            id="address-number"
            placeholder="Informe o número"
            data-testid="customer_checkout__input-address-number"
            onChange={ (e) => setOrder({ ...order, deliveryNumber: e.target.value }) }
          />
        </form>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ async () => {
            const sale = await createSale({
              ...order,
              products: cart,
              totalPrice,
            });
            history.push(`/customer/orders/${sale.id}`);
          } }
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
