import React from 'react'
import ConsumerItem from './ConsumerItem'
import RevenueCard from './RevenueCard'
import SearchCustomerCard from './SearchCustomerCard'
import {Card,Row,Col } from 'antd'
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function CustomerPage() {
  const [customerList,setCustomerList]=useState({list:undefined,isFetching:true});

  const getCustomers=()=>{
    const customerRoute = process.env.REACT_APP_BACKEND + '/billing/topcustomers';
    console.log(customerRoute);
    axios.get(customerRoute, {withCredentials: true}).then(res => {
      console.log(res);
      // if(res['data']['products']){
      //   setCustomerList({
      //     list:res['data']['products'],
      //     isFetching:false,
      //   });
      // }else{
      //   setCustomerList({
      //     list:undefined,
      //     isFetching:false,
      //   });
      // }
      // }).catch(error => {
      //   console.log(error);
      //   setCustomerList({
      //     list:undefined,
      //     isFetching:false,
      //   }); 
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
            <RevenueCard/>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
              title={<SearchCustomerCard/>}
              style={{width:'fit-content',margin:'.5rem auto'}}
              hoverable>
              <Row span={24}>
                <ConsumerItem/>
                <ConsumerItem/>
                <ConsumerItem/>
              </Row>
          </Card>
        </Col>      
      </Row>
    </div>
  )
}
