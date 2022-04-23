import React from 'react'
import { Card,Row,Col,Statistic, Button } from 'antd'
import BillTableCard from './BillTableCard'

function Invoice() {
  return (
    <div>
        <Card
            title={'INVOICE'}
            style={{margin:'1rem auto',width:'max-content'}}
            hoverable>
            <Row>
            <Col xs={{ span: 24 }} md={{ span: 8 }} ><Statistic title="Name" value={'Aayush'} /></Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }} ><Statistic title="Email Id" value={'aayush@gmail.com'} /></Col>
            </Row>

            <BillTableCard/>
            <Row>
            <Col span={16}>
              <Button>Print</Button>
            </Col>
            <Col span={8}>
              <Statistic title="Total" value={'500 /-'}/>
            </Col>

            </Row>

        </Card>
    </div>
  )
}

export default Invoice