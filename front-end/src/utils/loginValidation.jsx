const loginValidation = (email, password) => {
  const SIX = 6;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (emailRegex.test(email) && password.length >= SIX);
};

export default loginValidation;
