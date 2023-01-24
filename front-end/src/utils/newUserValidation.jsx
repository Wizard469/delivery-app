const newUserValidation = (email, password, roleSelected) => {
  const maxName = 12;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (emailRegex.test(email) && password.length >= maxName
   && !roleSelected); // não sei se funciona
};

export default newUserValidation;
