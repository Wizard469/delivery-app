const { useState, useEffect } = require('react');

const usePersistedState = (key, initialValue = []) => {
  const [value, setValue] = useState(() => {
    const cart = localStorage.getItem(key);

    return cart ? JSON.parse(cart) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default usePersistedState;
