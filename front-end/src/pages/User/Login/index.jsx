import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import postRequest from '../../../services/userApi';
import loginValidation from '../../../utils/loginValidation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);
  const [failedLogin, setFailedLogin] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loginValidation(email, password)) setIsLoginBtnDisabled(false);
    else setIsLoginBtnDisabled(true);
  }, [email, password]);

  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const login = async () => {
    try {
      const response = await postRequest('/login', data);

      localStorage.setItem('user', JSON.stringify({ ...response }));

      if (response.role === 'seller') history.replace('/seller/orders');
      if (response.role === 'administrator') history.replace('/admin/manage');
      if (response.role === 'customer') history.replace('/customer/products');
    } catch (err) {
      setFailedLogin(true);
    }
  };

  return (
    <section>
      <form>
        <h1>{'<Nome do seu app>'}</h1>
        <input
          type="email"
          data-testid="common_login__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="seu-email@site.com"
          value={ email }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          onChange={ ({ target: { value } }) => setPassword(value) }
          placeholder="Sua senha"
          value={ password }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ isLoginBtnDisabled }
          onClick={ () => login() }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>

      {
        (failedLogin)
        && (
          <p data-testid="common_login__element-invalid-email">
            O endereço de e-mail ou a senha não estão corretos.
            <br />
            Por favor, tente novamente.
          </p>
        )
      }
    </section>
  );
}
