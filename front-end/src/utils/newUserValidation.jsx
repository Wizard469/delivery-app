const newUserValidation = (email, password) => {
  const maxName = 12;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (emailRegex.test(email) && password.length >= maxName); // não sei se funciona
};

export default newUserValidation;
