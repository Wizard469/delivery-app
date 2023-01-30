import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

const NewUser = async ({ name, email, password, role }) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const response = await api.post(
    'admin/manage',
    { name, email, password, role },
    { headers: { Authorization: token } },
  ).catch((error) => error);
  return response;
};

export default NewUser;
