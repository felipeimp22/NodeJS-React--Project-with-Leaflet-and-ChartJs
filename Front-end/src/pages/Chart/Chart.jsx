import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import StoreContext from 'components/Store/Context';
import Chart from '../../components/Chart/Chart'
import { Header } from '../../components/styles/Header/Header'
import axios from 'axios'


const PagesChart = () => {


  return (
    <div>
      <Header><h1>Chart</h1> <h3>System</h3> <Link className="link" style={{ color: "#757575", marginLeft: "75vw" }} to="/">  Voltar</Link> </Header>
      <Chart className="chart" />
    </div>
  )
}


export default PagesChart;
