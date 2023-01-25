import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.css';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="ProductCard">
      <div className="img-container">
        <span data-testid={ `customer_products__element-card-price-${product.id}` }>
          { product.price.replace('.', ',') }
        </span>
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
            onChange={ ({ target }) => setQuantity(target.value) }
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
