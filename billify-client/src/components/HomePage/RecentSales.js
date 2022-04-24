import React from 'react'
import {Card,Row,Col,Statistic } from 'antd'
import millify from 'millify';

function RecentSales({data}) {
  const totalAmount = (data.totalAmount || 0);
  const totalCustomers = data.totalCustomers || 0;
  const totalOrders = data.totalOrders || 0;
  return (
    <div>
        <Card style={{width:'fit-content',margin:'.5rem auto',textAlign:'center'}}
            title={'Recents Sales'}
            hoverable>
            <Row>
                <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Total Amount (₹)" value={millify(totalAmount)} /></Col>
                <Col xs={{span:24}} md={{span:12}} ><Statistic title="Net Customers" value={millify((totalCustomers))}/></Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Total Orders" value={millify(totalOrders)} /></Col>
                {/* <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Growth" value={18} suffix="%" /></Col> */}
            </Row>
        </Card>
    </div>
  )
}

export default RecentSales