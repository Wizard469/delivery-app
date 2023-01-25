import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const setLocalStorage = (key, info) => {
    localStorage.setItem(key, JSON.stringify(info));
  };

  const context = useMemo(() => ({
    loading,
    setLoading,
    orders,
    setOrders,
    user,
    setUser,
    setLocalStorage,
  }), [orders, loading, user]);

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
