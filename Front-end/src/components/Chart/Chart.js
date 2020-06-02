import React, { useContext, useEffect, useState } from 'react';
import StoreContext from 'components/Store/Context';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios'
import './style.css'


let allData = []
let allData2 = []

let allBids = []
let allEmails = []


let cor = []
let cor2 = []



const Chart = () => {
  const [bids, setBids] = useState([])
  const [email, setEmails] = useState([])

  let defaultOption = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'Farms'
  }




  async function getAllBids() {
    const all = await axios.get('http://localhost:3001/allBids')
    // console.log(all.data)
    await allData.push(all.data)
    await allData2.push(allData[0].userExists)
    await allBids.push(allData2[0].map(e => e.bid[0]))
    await allEmails.push(allData2[0].map(e => e.email))
    await setBids(allBids[0])
    await setEmails(allEmails[0])

    await allBids[0].map(e => {
      return cor.push(
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)')
    })

    await cor2.push(cor.map(e => e))

  }


  useEffect(() => {
    getAllBids()

  }, [])

  let corz = [,
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)']


  let chartData = {
    labels: allEmails[0], //['Felipe', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste'],
    datasets: [
      {
        label: 'Sacas',
        data: allBids[0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  }





  return (
    <div className="chartDiv" >
      <div className="chartContainer">
        <Bar
          data={chartData}
          options={{
            title: {
              display: defaultOption.displayTitle,
              text: 'Lances Gerais',
              fontSize: 25
            },
            legend: {
              display: defaultOption.displayLegend,
              position: defaultOption.legendPosition
            }
          }}
        />
      </div>
    </div>
  )
}
export default Chart