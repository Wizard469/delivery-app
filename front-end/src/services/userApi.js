const baseURL = 'http://localhost:3001';

const postRequest = async (data) => {
  const response = await fetch(`${baseURL}/login`, data);
  const json = await response.json();
  console.log(json);

  return json;
};

export default postRequest;
