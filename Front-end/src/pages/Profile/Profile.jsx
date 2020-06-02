import React from 'react';
import { Link } from 'react-router-dom'
import Profile from 'components/User/Profile/Profile';
import { Header } from '../../components/styles/Header/Header'
const PagesProfile = () => (
  <div>
    <Header>
      <h1>Profile</h1><h3>System</h3>  <Link className="link" style={{ color: "#757575", marginLeft: "75vw" }} to="/">  Voltar</Link>
    </Header>
    <Profile />
  </div>
);

export default PagesProfile;
