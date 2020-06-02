import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import { useEffect } from 'react';

import './Home.css';
import { Header } from '../../styles/Header/Header'
import { Div } from '../../styles/Div/Div'
import * as map from '../../../assets/map.png'
import * as chart from '../../../assets/chart.png'
import * as user from '../../../assets/user.png'

const Home = () => {
  const { setToken, token } = useContext(StoreContext);
  const { setEmail, email } = useContext(StoreContext);

  useEffect(() => {
  }, [])



  function setStates() {
    return setToken(null), setEmail(null)
  }
  return (
    <>
      <Header>
        <h1>Header</h1>
        <h4>system</h4>
        <div></div>
        <button type="button" onClick={setStates}>
          Logout
      </button>
      </Header>
      <Div>
        <div className="pages-home">

          <div className="container">
            <img src={map} />
            <button className="containerBTN"><Link style={{ color: "#757575" }} to="/map"> acessar</Link></button>
          </div>

          <div className="container">
            <img className="chartt" src={chart} />

            <button className="containerBTN"><Link style={{ color: "#757575" }} to="/chart"> acessar</Link></button>

          </div>
          <div className="container">
            <img className="user" src={user} />

            <button className="containerBTN"><Link style={{ color: "#757575" }} to="/profile"> acessar</Link></button>

          </div>


        </div>
      </Div>
    </>
  );
};

export default Home;
