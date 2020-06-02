import React, { useContext, useState } from 'react';
import StoreContext from 'components/Store/Context';
import { useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios';

let allData = []
let allBids = []
let allBids2 = []

let allDates = []
const Profile = () => {

  const { setToken, token } = useContext(StoreContext);
  const { setEmail, email } = useContext(StoreContext);
  const [bids, setBids] = useState([])
  const [dates, setDates] = useState([])


  async function allBidsFnc() {

    const all = await axios.get(`http://localhost:3001/getAllBid/${email}`)
    await allData.push(all.data.userExists)
    await allBids.push(allData[0].map(e => e.bid[0]))
    await allBids2.push(allBids[0].map(e => e))
    await setBids(allBids2[0])
    await allDates.push(allData[0].map(e => e.createdAt))
    await allDates[0]
    await setDates(allDates[0])



  }

  useEffect(() => {

    allBidsFnc()


  }, [])


  let chartData = {
    labels: dates, // or labels [ with  values ] exemple: labels:[0,1,2,3s]
    datasets: [
      {
        label: 'lances',
        data: allBids2[0],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)'
          // 'rgba(255, 99, 132, 0.6)',
          // 'rgba(255, 206, 86, 0.6)',
          // 'rgba(75, 192, 192, 0.6)',
          // 'rgba(153, 102, 255, 0.6)',
          // 'rgba(255, 159, 64, 0.6)',
          // 'rgba(255, 99, 132, 0.6)'


        ]
      }
    ]
  }


  let defaultOption = {
    displayTitle: true,
    displayLegend: true,

    legendPosition: 'right',
    location: 'Farms'
  }








  return (
    <div  >

      <div style={{ width: "80vw", marginLeft: "10vw" }} className="chartContainer">
        <Line
          data={chartData}
          options={{
            title: {
              display: defaultOption.displayTitle,
              text: 'Seus Lances',
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
export default Profile