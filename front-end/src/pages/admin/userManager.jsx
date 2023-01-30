import React, { useState, useEffect } from 'react';
import Header from './Header/index';
import './Header/styles.css';
import NewUser from '../../services/admin';
import registerValidation from '../../utils/registerValidation';

export default function UserManager() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('vendedor');
  const [isRegisterBtnDisabled, setIsRegisterBtnDisabled] = useState(true);
  const [failedRegister, setFailedRegister] = useState(false);

  useEffect(() => {
    if (registerValidation(name, email, password)) {
      setIsRegisterBtnDisabled(false);
    } else setIsRegisterBtnDisabled(true);
  }, [name, email, password]);

  const checkNewUser = async () => {
    console.log('front:', { name, email, password, role });
    const response = await NewUser({ name, email, password, role });
    console.log(response, 'teste');
    if ('message' in response) {
      return setFailedRegister(true);
    }
    return setFailedRegister(false);
  };

  return (
    <div>
      <Header />
      <section>
        <form>
          <h1>Cadastrar Novo Usuário</h1>
          <label className="label" htmlFor="name">
            Nome
            <input
              id="name"
              name="name"
              type="text"
              data-testid="admin_manage__input-name"
              onChange={ ({ target: { value } }) => setName(value) }
              placeholder="Nome e Sobrenome"
              value={ name }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="email"
              data-testid="admin_manage__input-email"
              onChange={ ({ target: { value } }) => setEmail(value) }
              placeholder="seu-email@site.com"
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              name="password"
              type="password"
              data-testid="admin_manage__input-password"
              onChange={ ({ target: { value } }) => setPassword(value) }
              placeholder="insira a senha"
              value={ password }
            />
          </label>
          <select
            name="select-role"
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
          <button
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ isRegisterBtnDisabled }
            onClick={ checkNewUser }
          >
            Cadastrar
          </button>
          {
            (failedRegister)
        && (
          <p data-testid="admin_manage__element-invalid-register">
            email ou usuários já cadastrados
            <br />
            Por favor, tente novamente.
          </p>
        )
          }
        </form>
      </section>
    </div>
  );
}
