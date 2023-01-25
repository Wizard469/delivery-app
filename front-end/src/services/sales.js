import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

export async function getAll(sales) {
  try {
    const response = await api.get('/sales', sales);
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

export default {
  getAll, saleById,
};
