import React from 'react';
import { Link } from 'react-router-dom'
import Register from '../../components/User/Register/Register';
import { Header } from '../../components/styles/Header/Header'
const PagesRegister = () => (
  <div>
    <Header>
      <h1>Register</h1><h3>System</h3>  <Link className="link" style={{ color: "#757575", marginLeft: "75vw" }} to="/">  Voltar</Link>
    </Header>
    <Register />
  </div>
);

export default PagesRegister;