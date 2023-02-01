import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export default function RedirectRouter({ children, ...rest }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Route
      { ...rest }
      render={ () => (!user ? (
        children
      ) : (
        <Redirect
          to="/customer/products"
        />
      )) }
    />
  );
}

RedirectRouter.propTypes = {
  children: PropTypes.element.isRequired,
};
