import React from 'react'
import {Card,Row,Col,Statistic } from 'antd'
import millify from 'millify';

function RevenueCard({data}) {
  const totalAmount = data.totalAmount;
  const totalCustomers = data.totalCustomers;
  const totalOrders = data.totalOrders;
  return (
    <Card style={{width:'fit-content',margin:'.5rem auto',textAlign:'center'}}
      title={'Sale Summary'}
      hoverable>
        <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Total Amount (₹)" value={(totalAmount)} /></Col>
            <Col xs={{span:24}} md={{span:12}} ><Statistic title="Total Customers" value={((totalCustomers))}/></Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Total Orders" value={(totalOrders)} /></Col>
            {/* <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Growth" value={18} suffix="%" /></Col> */}
        </Row>
    </Card>
  )
}

export default RevenueCard