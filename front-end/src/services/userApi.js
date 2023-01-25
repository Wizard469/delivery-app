const baseURL = 'http://localhost:3001';

const postRequest = async (data) => {
  const response = await fetch(`${baseURL}/login`, data);
  if (response.ok) {
    const json = await response.json();

    return json;
  }

  throw new Error();
};

export default postRequest;
