import React, { useState, useEffect } from 'react';
import Header from './Header/index';
import newUserValidation from '../../utils/newUserValidation';
import './Header/styles.css';

export default function UserManager() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleSelected, setRoleSelected] = useState('');
  const [isRegisterBtnDisabled, setIsRegisterBtnDisabled] = useState(true);

  useEffect(() => {
    if (newUserValidation(email, password, roleSelected)) setIsRegisterBtnDisabled(false);
    else setIsRegisterBtnDisabled(true);
  }, [email, password, roleSelected]);

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
          <label htmlFor="select-role">
            Tipo
            <select
              name="select-role"
              data-testid="admin_manage__select-role"
              value={ roleSelected }
              onChange={ (e) => setRoleSelected(e.target.value) }
            >
              <option value="vendedor">Vendedor</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ isRegisterBtnDisabled }
          >
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}
