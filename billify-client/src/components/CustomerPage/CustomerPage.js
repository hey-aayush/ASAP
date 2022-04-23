import React from 'react'
import ConsumerItem from './ConsumerItem'
import RevenueCard from './RevenueCard'
import SearchCustomerCard from './SearchCustomerCard'
import {Card,Row,Col } from 'antd'

export default function CustomerPage() {
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
