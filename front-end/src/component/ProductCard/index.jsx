import imageTest from '../../images/rockGlass.svg';
import './styles.css';

function ProductCard() {
  return (
    <div className="ProductCard">
      <div className="img-container">
        <span data-testid="customer_products__element-card-price-{<id>}">
          Preço
        </span>
        <img
          src={ imageTest }
          alt="produto logo"
          data-testid="customer_products__img-card-bg-image-{<id>}"
        />
      </div>
      <div className="info-container">
        <p data-testid="customer_products__element-card-title-{<id>}">
          Nome do produto
        </p>
        <div className="buttons">
          <button
            type="button"
            data-testid="customer_products__button-card-rm-item-{<id>}"
          >
            -
          </button>
          <span data-testid="customer_products__input-card-quantity-{<id>}">
            0
          </span>
          <button
            type="button"
            data-testid="customer_products__button-card-add-item-<id>"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
