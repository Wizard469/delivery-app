import React, { useState, useEffect } from 'react';
import SellerHeader from '../../component/SellerHeader.jsx';
import SellerOrdersCard from '../../component/SellerOrdersCard';
import { getAll } from '../../services/sales';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);
  const [user] = useState(() => JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    getAll(user.id)
      .then((data) => setSales(data.data));
  }, [user.id]);

  return (
    <>
      <SellerHeader />
      { sales.length !== 0 && sales.map((sale, i) => (
        <SellerOrdersCard sale={ sale } key={ i } />
      ))}
    </>
  );
}
