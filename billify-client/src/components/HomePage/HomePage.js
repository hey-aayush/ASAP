import React, { useEffect, useState } from 'react'
import RevenueCard from './RevenueCard'
import RecentSales from './RecentSales'
import {Row,Col } from 'antd'
import axios from 'axios'

function HomePage() {

  const [ todayStats, setTodayStats ] = useState();
  const [ totalStats, setTotalStats ] = useState();

  const getStatsForToday=()=>{
    const currTime = new Date().getTime();
    const startTime = currTime - (1000*24*60*60);
    const dashboardRoute = process.env.REACT_APP_BACKEND + '/dashboard' + '?' + 'startTimestamp' + startTime
    + '&' + 'endTimeStamp' + currTime;
    console.log(dashboardRoute);
    axios.get(dashboardRoute, {withCredentials: true}).then(res => {
      console.log('Today', res);
      setTodayStats(res['data']);
    })
   
  }

  const getTotalStats=()=>{
    const currTime = new Date().getTime();
    const startTime = 0;
    const dashboardRoute = process.env.REACT_APP_BACKEND + '/dashboard' + '?' + 'startTimestamp' + startTime
    + '&' + 'endTimeStamp' + currTime;
    console.log(dashboardRoute);
    axios.get(dashboardRoute, {withCredentials: true}).then(res => {
      console.log('Total', res);
      setTotalStats(res['data']);
    })
   
  }
  
  useEffect(()=>{
    getStatsForToday();
    getTotalStats();
  },[])

  return (
    <div>
        <Row>
          {
            totalStats && <Col md={24} lg={12}><RevenueCard data={totalStats} /></Col>
          }
          {
            todayStats && <Col md={24} lg={12}><RecentSales data={todayStats} /></Col>
          }
        </Row>
    </div>
  )
}

export default HomePage