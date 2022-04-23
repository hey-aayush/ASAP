import React from 'react'
import RevenueCard from '../CustomerPage/RevenueCard'
import RecentSales from './RecentSales'
import {Row,Col } from 'antd'

function HomePage() {
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