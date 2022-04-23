import { Row,Col } from 'antd'
import React from 'react'
import ConsumerItem from '../CustomerPage/ConsumerItem'
import BillCard from './BillCard'
import Invoice from './Invoice'

function BillingPage() {
  return (
    <div>
        <Row>
            <Col lg={16} md={24}>
                <BillCard/>
            </Col>
            <Col lg={8} md={24}>
                <Invoice/>
            </Col>
        </Row>
    </div>
  )
}

export default BillingPage