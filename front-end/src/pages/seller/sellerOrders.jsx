import React, { useEffect, useState } from 'react';
import Header from '../../component/Header';
import SellerOrdersCard from '../../component/SellerOrdersCard';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const allSales = async () => {
      const getSales = await allSales();
      setSales(getSales);
    };
    allSales();
  }, []);

  return (
    <>
      <Header />
      {sales.map((sale, i) => (
        <SellerOrdersCard sale={ sale } key={ i } />
      ))}
    </>
  );
}
