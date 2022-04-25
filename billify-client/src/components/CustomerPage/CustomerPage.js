import ConsumerItem from './ConsumerItem'
import RevenueCard from './RevenueCard'
import SearchCustomerCard from './SearchCustomerCard'
import {Card,Row,Col } from 'antd'
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function CustomerPage() {
  const [customerList,setCustomerList]=useState({list:undefined,isFetching:true});

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


  const getCustomers=()=>{
    const currTime = new Date().getTime();
    const startTime = currTime - (1000*24*60*60*30);
    const customerRoute = process.env.REACT_APP_BACKEND + '/billing/topcustomers'+ '?' + 'startTimestamp' + startTime
    + '&' + 'endTimeStamp' + currTime;

    console.log(customerRoute);
    axios.get(customerRoute, {withCredentials: true}).then(res => {
      console.log(res);
      if(res['data']){
        setCustomerList({
          list:res['data'],
          isFetching:false,
        });
      }else{
        setCustomerList({
          list:undefined,
          isFetching:false,
        });
      }
      }).catch(error => {
        console.log(error);
        setCustomerList({
          list:undefined,
          isFetching:false,
        }); 
      })
    }
    useEffect(()=>{
      getCustomers();
    },[])

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Row>
            {/* <RevenueCard data={totalStats}/> */}
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
              title={<SearchCustomerCard/>}
              style={{width:'fit-content',margin:'.5rem auto'}}
              hoverable>
              <Row span={24}>
                {
                  customerList && customerList.list && customerList.list.map((customer, index) => {
                    return <ConsumerItem key={index} name={customer.name} netOrder={customer.netOrder} avgOrder={customer.avgOrder} />
                  })
                }
              </Row>
          </Card>
        </Col>      
      </Row>
    </div>
  )
}
