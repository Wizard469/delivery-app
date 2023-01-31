import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

export async function getAll(sellerId) {
  try {
    const response = await api.get(`sales/orders/${sellerId}`);
    return response;
  } catch (error) {
    return error.stack;
  }
}

export async function saleById(id) {
  try {
    const response = await api.get(`sales/${id}`);
    return response;
  } catch (error) {
    return error.stack;
  }
}

export async function createSale(order) {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await api
      .post('sales', order, { headers: { Authorization: token } });

    localStorage.removeItem('cart');
    return response.data;
  } catch (error) {
    return error.stack;
  }
}
