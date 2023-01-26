const baseURL = 'http://localhost:3001';

const postRequest = async (endpoint, data) => {
  const response = await fetch(`${baseURL}${endpoint}`, data);
  console.log(response);
  if (response.ok) {
    const json = await response.json();

    console.log(json);
    return json;
  }

  throw new Error();
};

export default postRequest;
