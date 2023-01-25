import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

const NewUser = async ({ name, email, password, role }) => api
  .post('admin/manage', { name, email, password, role })
  .catch((error) => error.response.data);

export default NewUser;
