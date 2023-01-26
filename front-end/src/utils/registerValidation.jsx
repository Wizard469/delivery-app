const registerValidation = (name, email, password) => {
  const TWELVE = 12;
  const SIX = 6;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (emailRegex.test(email) && password.length >= SIX && name.length >= TWELVE);
};

export default registerValidation;
