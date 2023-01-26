const baseURL = 'http://localhost:3001';

const postRequest = async (endpoint, data) => {
  const response = await fetch(`${baseURL}${endpoint}`, data);

  if (response.ok) {
    const json = await response.json();

    return json;
  }

  throw new Error();
};

export default postRequest;
