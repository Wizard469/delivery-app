import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../component/Header';
import SellerOrdersCard from '../../component/SellerOrdersCard';
import api from '../../services/api';

export default function SellerOrders() {
  const [sellerOrders, setSellerOrders] = useState([]);
  const history = useHistory();
  const [userToken, setUserToken] = useState();
  const [idUser, setIdUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserId = () => {
      if (!localStorage.getItem('user')) {
        return history.push('/login');
      }
      const { id, token } = JSON.parse(localStorage.getItem('user'));
      setIdUser(id);
      setUserToken(token);
      return token;
    };

    const sellers = async (token, value) => {
      const url = 'http://www.localhost:3001/seller/orders';
      const header = { headers: { Authorization: `${token}` } };
      const { data } = await api.get(url, header);
      const userId = data.filter((order) => order.sellerId === value);
      setSellerOrders(userId);
    };
    const token = getUserId();
    sellers(token, idUser);
    setLoading(false);
  }, [idUser, history, userToken]);

  return (
    <>
      <Header />
      <div>
        {!loading
          && sellerOrders.map(
            (
              {
                id,
                userId,
                status,
                saleDate,
                totalPrice,
                deliveryAddress,
                deliveryNumber,
              },
              index,
            ) => (
              <SellerOrdersCard
                key={ id }
                saleId={ id }
                sellerId={ userId }
                order={ `${index + 1}` }
                status={ status }
                saleDate={ saleDate }
                totalPrice={ totalPrice }
                deliveryAddress={ deliveryAddress }
                deliveryNumber={ deliveryNumber }
              />
            ),
          )}
      </div>
    </>
  );
}
