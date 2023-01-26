import Header from "../../component/Header";

function SellerOrdersDetails() {
  return (
    <div>
      <Header />
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
        >
          Preparar pedido
        </button>

        <button
          type="button"
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
            data-testid={
              `seller_order_details__element-order-table-item-number-${i}`
            }
          >
            Número
          </td>

          <td
            data-testid={
              `seller_order_details__element-order-table-name-${i}`
            }
          >
            Name
          </td>

          <td
            data-testid={
              `seller_order_details__element-order-table-quantity-${i}`
            }
          >
            Quantidade
          </td>

          <td
            data-testid={
              `seller_order_details__element-order-table-unit-price-${i}`
            }
          >
            Preço
          </td>

          <td
            data-testid={
              `seller_order_details__element-order-table-sub-total-${i}`
            }
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
