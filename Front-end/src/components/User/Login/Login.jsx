import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}
let Logintoken = []
let Loginemail = []


async function login({ user, password }) {
  if (user === "", password === "") {
    return Logintoken.splice(0), Loginemail.splice(1), { error: 'Usuário ou senha inválido' }

  }
  else if (user && password) {

    try {
      const result = await axios.post('http://localhost:3001/sessions', {
        email: user,
        password: password
      })


      await Promise.all([result]).then((values) => {

        Logintoken.push(`${values[0].data.token}`)
        Logintoken.splice(1)
        Loginemail.push(`${values[0].data.user.email}`)

        Loginemail.splice(1)








      });
    } catch (e) { if (e) { console.log(e) } }
  }

  return { error: 'Usuário ou senha inválido' };



}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const { setEmail } = useContext(StoreContext);

  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    const { token, error } = await login(values);


    if (Logintoken[0]) {
      setToken(Logintoken[0]);
      setEmail(Loginemail[0]);



      return history.push('/');
    }
    setError(error);
    setValues(initialState);
  }

  return (
    <div className="user-login">
      <h1 className="userLoginTitle">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="userLoginFormControl">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
            placeholder="Email: admin@admin.com"
          />
        </div>
        <div className="userLoginFormControl">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            placeholder="Password: admin"
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
      <Link style={{ color: "rgb(124, 124, 124)" }} to={"/register"}>Criar conta</Link>
    </div>
  );
};

export default UserLogin;
