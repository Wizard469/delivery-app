import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import postRequest from '../../../services/userApi';
import loginValidation from '../../../utils/loginValidation';

import './style.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);
  const [failedLogin, setFailedLogin] = useState(false);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

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

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
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
    <section className="main-section">
      <form className="login-form">
        <h1>Booze Buddy</h1>
        <input
          className="email-field"
          type="email"
          data-testid="common_login__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="seu-email@site.com"
          value={ email }
          onClick={ () => setFailedLogin(false) }
        />
        <div className="pwd-field">
          <input
            type={ type }
            data-testid="common_login__input-password"
            onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="Sua senha"
            value={ password }
            onClick={ () => setFailedLogin(false) }
          />
          <span
            role="presentation"
            onClick={ handleToggle }
          >
            <Icon icon={ icon } size={ 15 } />
          </span>
        </div>
        <button
          className="login-btn"
          type="button"
          data-testid="common_login__button-login"
          disabled={ isLoginBtnDisabled }
          onClick={ login }
        >
          LOGIN
        </button>
        <button
          className="new-user-btn"
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
        {
          (failedLogin)
        && (
          <p className="error-msg" data-testid="common_login__element-invalid-email">
            O endereço de e-mail ou a senha não estão corretos.
            <br />
            Por favor, tente novamente.
          </p>
        )
        }
      </form>
    </section>
  );
}
