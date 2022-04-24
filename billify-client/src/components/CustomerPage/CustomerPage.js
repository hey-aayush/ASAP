import ConsumerItem from './ConsumerItem'
import RevenueCard from './RevenueCard'
import SearchCustomerCard from './SearchCustomerCard'
import {Card,Row,Col } from 'antd'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function CustomerPage() {

  const [customers,setCustomerList]=useState({list:undefined,isFetching:false});

  const getCustomerLists=()=>{
    const CustomerRoute = process.env.REACT_APP_BACKEND + '/shopkeeper/getCustomers';
    console.log(CustomerRoute);
    axios.get(CustomerRoute, {withCredentials: true}).then(res => {
      console.log(res);
      if(res['data']['Customers']){
        // setCustomerList({
        //   list:res['data']['Customers'].map((product)=>({
        //     name:product.product.name,
        //     price:product.product.price,
        //     quantity:product.quantity,
        //   })),
        //   isFetching:false,
        // });
      }else{
        // setProductList({
        //   list:undefined,
        //   isFetching:false,
        // });
      }
      }).catch(error => {
        console.log(error);
        // setProductList({
        //   list:undefined,
        //   isFetching:false,
        // }); 
      })
    }

    useEffect(()=>{
      getCustomerLists();
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
