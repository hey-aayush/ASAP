import React from 'react'
import RevenueCard from '../CustomerPage/RevenueCard'
import RecentSales from './RecentSales'
import {Row,Col } from 'antd'

function HomePage() {
  const getStatsForToday=()=>{
    const currTime = new Date().getTime();
    const startTime = currTime - (1000*24*60*60);
    const dashboardRoute = process.env.REACT_APP_BACKEND + '/dashboard' + '?' + 'startTimestamp' + startTime
    + '&' + 'endTimeStamp' + currTime;
    console.log(dashboardRoute);
    axios.get(dashboardRoute, {withCredentials: true}).then(res => {
      console.log(res);
    })
   
  }
  const getTotalStats=()=>{
    const currTime = new Date().getTime();
    const startTime = 0;
    const dashboardRoute = process.env.REACT_APP_BACKEND + '/dashboard' + '?' + 'startTimestamp' + startTime
    + '&' + 'endTimeStamp' + currTime;
    console.log(dashboardRoute);
    axios.get(dashboardRoute, {withCredentials: true}).then(res => {
      console.log(res);
    })
   
  }
  return (
    <div>
        <Row>
            <Col md={24} lg={12}><RevenueCard/></Col>
            <Col md={24} lg={12}><RecentSales/></Col>
        </Row>
    </div>
  )
}

export default HomePage