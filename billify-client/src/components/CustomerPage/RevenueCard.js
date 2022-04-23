import React from 'react'
import {Card,Row,Col,Statistic } from 'antd'
import millify from 'millify';

function RevenueCard() {
  return (
    <Card style={{width:'fit-content',margin:'.5rem auto'}}
      title={'Sale Summary'}
      hoverable>
        <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Total Investment (₹)" value={millify(120521)} /></Col>
            <Col xs={{span:24}} md={{span:12}} ><Statistic title="Net Worth (₹)" value={millify((10))}/></Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Total Sale (₹)" value={millify(1200)} /></Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} ><Statistic title="Growth" value={18} suffix="%" /></Col>
        </Row>
    </Card>
  )
}

export default RevenueCard