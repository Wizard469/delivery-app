import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import postRequest from '../../../services/userApi';
import registerValidation from '../../../utils/registerValidation';
import './style.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedRegister, setFailedRegister] = useState(false);
  const [isRegisterBtnDisabled, setIsRegisterBtnDisabled] = useState(true);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

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

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  return (
    <section className="main-section">
      <form className="register-form">
        <h1>Faça o seu cadastro</h1>
        <input
          className="name-field"
          type="text"
          data-testid="common_register__input-name"
          onChange={ ({ target: { value } }) => setName(value) }
          placeholder="Seu nome"
          value={ name }
          onClick={ () => setFailedRegister(false) }
        />
        <input
          className="email-field"
          type="email"
          data-testid="common_register__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="seu-email@site.com"
          value={ email }
          onClick={ () => setFailedRegister(false) }
        />
        <div className="pwd-field">
          <input
            type={ type }
            data-testid="common_register__input-password"
            onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="Sua senha"
            value={ password }
          />
          <span
            role="presentation"
            onClick={ handleToggle }
          >
            <Icon icon={ icon } size={ 15 } />
          </span>
        </div>
        <button
          className="register-btn"
          type="button"
          data-testid="common_register__button-register"
          disabled={ isRegisterBtnDisabled }
          onClick={ register }
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
