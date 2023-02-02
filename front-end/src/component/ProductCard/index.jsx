import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import './styles.css';

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(() => {
    const productQuantity = cart.find(({ id }) => id === product.id);
    if (productQuantity) return productQuantity.quantity;

    return 0;
  });

  const updateCart = () => {
    const newCart = cart.some((cartProduct) => product.id === cartProduct.id)
      ? cart.map((cartProduct) => {
        if (product.id === cartProduct.id) {
          return {
            ...cartProduct,
            price: product.price,
            id: product.id,
            name: product.name,
            quantity,
          };
        }
        return cartProduct;
      })
      : [
        ...cart, {
          price: product.price,
          id: product.id,
          name: product.name,
          quantity,
        },
      ];

    setCart(newCart.filter((element) => element.quantity > 0));
  };

  useEffect(() => {
    updateCart();
  }, [quantity]);

  return (
    <div className="ProductCard">
      <p className="product-price">
        <span>R$</span>
        <span data-testid={ `customer_products__element-card-price-${product.id}` }>
          { product.price.replace('.', ',') }
        </span>
      </p>
      <div className="img-container">
        <img
          src={ product.urlImage }
          alt="produto logo"
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </div>
      <div className="info-container">
        <p data-testid={ `customer_products__element-card-title-${product.id}` }>
          { product.name }
        </p>
        <div className="buttons">
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ () => {
              const newQuantity = quantity - 1 < 0 ? 0 : quantity - 1;
              setQuantity(newQuantity);
            } }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            type="number"
            value={ quantity }
            onFocus={ (event) => event.target.select() }
            onChange={ ({ target }) => setQuantity(Number(target.value)) }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ () => { setQuantity(quantity + 1); } }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
