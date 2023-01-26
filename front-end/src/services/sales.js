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
