import React, { useState, useEffect, useContext } from "react";
import { Map, TileLayer, Marker, Polygon, Popup } from "react-leaflet";
import * as farms231 from '../../static data/JSON/farm_231.json'
import * as farms221 from '../../static data/JSON/farm_221.json'
import * as farms271 from '../../static data/JSON/farm_271.json'
import ReactLeafletSearch from "react-leaflet-search"
import StoreContext from 'components/Store/Context';
import { Icon } from 'leaflet'
import Modal from 'react-modal'
import { popup } from "leaflet";
import { Link } from 'react-router-dom';
import { DivModal, MeuBotao } from './style'
import Accordion from '../Accordion/Accordion'
import { Header } from '../styles/Header/Header'
import axios from 'axios'

import './style.css'

let somaFiels = []
let total = 0
let lance1 = ''
let lance2 = ''
const icon = new Icon({
  iconUrl: "https://img.icons8.com/cotton/2x/farm--v1.png",
  iconSize: [35, 40]

})
const icon2 = new Icon({
  iconUrl: "https://simpleicon.com/wp-content/uploads/map-marker-2.png",
  iconSize: [90, 90]

})

const MapComponent = () => {




  const { setToken, token } = useContext(StoreContext);
  const { setEmail, email } = useContext(StoreContext);
  let mathTotal = () => {

    for (var i = 0; i < somaFiels.length; i++) {
      total = total + somaFiels[i]
    }
  }
  const [active, setActive] = React.useState(false)
  const [info, setInfo] = React.useState([])

  let ha;
  let floatInfo = () => {
    return ha = parseFloat(info[1]).toFixed(3)
  }

  let center = [-20.419854, -48.744932]



  useEffect(() => {


    Modal.setAppElement('body');
    // console.log(farms.features[0].geometry.coordinates[0])
  }, [])

  let allField231 = React.useCallback(() => {
    setActive(true)
    setInfo(['teste', '50.000', 231])

  }, [])

  return (
    <div>
      <div>

      </div>
      <DivModal>
        <div className="divModal" >
          <Modal isOpen={active} onRequestClose={() => { setActive(false) }} >

            {floatInfo()}
            <div className="modal">
              {
                info[0] === "teste" ? farms231.features.map(el => (
                  somaFiels.push(el.properties.field_id), somaFiels.splice(24), mathTotal()

                )) : null
              }

              <div className="modalHeader">
                <h1>Name: {info[0]}</h1>
                <h2 className="modalId">Identificacion: {info[2]} </h2>
                <div>
                  <MeuBotao className="modalIdButton" onClick={() => { setActive(false) }} >X </MeuBotao>
                </div>

              </div>
              <h1>area: {ha} ha</h1>
              <div>
                <Accordion title="Information">
                  <span className="accordion-text">Field Informations</span>
                  <p>total price {farms231.features.map(el => (
                    el.properties.field_id
                  ))}</p>
                  <button onClick={() => {
                    alert('funcionalidade nao esta pronta ainda')
                  }}>Buy</button>
                </Accordion>

              </div>



              {info[0] !== "teste" ? farms231.features.map(el => (
                <Accordion title={`Name: ${el.properties.g_name} -  area: ${el.properties.g_area_ha} ha - identification: ${el.properties.field_id}`}>
                  <div className="accordionContent">
                    <span className="spanAcc" className="accordion-text">Area de {el.properties.g_area_ha} ha </span>
                    <input placeholder="sacas" onChange={(e) => {

                      lance1 = e.target.value
                    }} /> <button onClick={() => {
                      if (isNaN(lance1)) {
                        return alert('é necessario digitar apenas numeros')
                      } else {
                        axios.post('http://localhost:3001/bid', {
                          email: email,
                          bid: lance1
                        }).then(res => { setActive(false) }).then(ress => { alert('voce deu um lance') }).then(r => { window.location.reload() })
                      }
                    }}>Dar Lance</button>
                    <div className="modalHeader">
                      <h3>Total Price {el.properties.field_id} sacas</h3> <button onClick={() => {
                        axios.post('http://localhost:3001/bid', {
                          email: email,
                          bid: el.properties.field_id

                        }).then(res => { setActive(false) }).then(ress => { alert('voce deu um lance no valor total') }).then(r => { window.location.reload() })
                      }}>buy</button>
                    </div>
                  </div>
                </Accordion>
              )) : null}

              {info[0] === "teste" ? farms231.features.map(el => (
                <Accordion title={`Name: ${el.properties.g_name} -  area: ${el.properties.g_area_ha} ha - identification: ${el.properties.field_id}`}>
                  <div className="accordionContent">
                    <span className="spanAcc" className="accordion-text">Area de {el.properties.g_area_ha} ha </span>
                    <input placeholder="sacas" onChange={(e) => {

                      lance1 = e.target.value
                    }} /> <button onClick={() => {
                      if (isNaN(lance1)) {
                        return alert('é necessario digitar apenas numeros')
                      } else {
                        axios.post('http://localhost:3001/bid', {
                          email: email,
                          bid: lance1
                        }).then(res => { setActive(false) }).then(ress => { alert('voce deu um lance') }).then(r => { window.location.reload() })
                      }
                    }}>Dar Lance</button>
                    <div className="modalHeader">
                      <h3>Total Price {el.properties.field_id} sacas</h3> <button onClick={() => {
                        axios.post('http://localhost:3001/bid', {
                          email: email,
                          bid: el.properties.field_id


                        }).then(res => { setActive(false) }).then(ress => { alert('voce deu um lance no valor total') }).then(r => { window.location.reload() })
                      }}>buy</button>
                    </div>
                  </div>
                </Accordion>
              )) : null}
            </div>

          </Modal>
        </div>
      </DivModal>
      <Map center={center} zoom={14}>
        <ReactLeafletSearch className="search" position="topleft" inputPlaceholder="Search Place" />



        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />


        <Marker onclick={allField231} position={[-20.40199, -48.755032]} icon={icon} />
        <Marker onclick={allField231} position={[-20.40199, -48.755032]} icon={icon2} />




        {
          farms231.features.map(el => (
            // console.log(el.geometry.coordinates[0].map(e => [e[1], e[0]])),
            <Polygon key={el.properties.field_id} positions={
              [
                el.geometry.coordinates[0].map(e => [e[1], e[0]])

              ]
            } color='red'
              onclick={() => (
                setActive(true),
                setInfo([
                  el.properties.g_name, el.properties.g_area_ha, el.properties.field_id
                ]))}
            />
          ))}



      </Map>
    </div >
  )
}
export default MapComponent;