import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import postRequest from '../../../services/userApi';
import registerValidation from '../../../utils/registerValidation';
import './style.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedRegister, setFailedRegister] = useState(false);
  const [isRegisterBtnDisabled, setIsRegisterBtnDisabled] = useState(true);

  const history = useHistory();

  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  };

  useEffect(() => {
    if (registerValidation(name, email, password)) setIsRegisterBtnDisabled(false);
    else setIsRegisterBtnDisabled(true);
  }, [name, email, password]);

  const register = async () => {
    try {
      const response = await postRequest('/register', data);

      localStorage.setItem('user', JSON.stringify({ ...response }));

      history.push('/customer/products');
    } catch (error) {
      setFailedRegister(true);
    }
  };

  return (
    <section className="main-section">
      <form className="register-form">
        <h1>Cadastro</h1>
        <input
          type="text"
          data-testid="common_register__input-name"
          onChange={ ({ target: { value } }) => setName(value) }
          placeholder="Seu nome"
          value={ name }
          onClick={ () => setFailedRegister(false) }
        />
        <input
          type="email"
          data-testid="common_register__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="seu-email@site.com"
          value={ email }
          onClick={ () => setFailedRegister(false) }
        />
        <input
          type="password"
          data-testid="common_register__input-password"
          onChange={ ({ target: { value } }) => setPassword(value) }
          placeholder="Sua senha"
          value={ password }
        />
        <button
          className="register-btn"
          type="button"
          data-testid="common_register__button-register"
          disabled={ isRegisterBtnDisabled }
          onClick={ () => register() }
        >
          CADASTRAR
        </button>
        {
          (failedRegister)
        && (
          <p
            className="error-msg"
            data-testid="common_register__element-invalid_register"
          >
            Nome ou email já cadastrado.
            <br />
            Por favor, tente novamente.
          </p>
        )
        }
      </form>
    </section>
  );
}
