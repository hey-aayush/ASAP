import React from 'react'
import {Card,Row,Col,Statistic,Typography } from 'antd'
import consumerImg from '../../assets/customer.png'

function ConsumerItem() {
  return (
    <Col span={24}>
        <Card style={{margin:'.5rem'}}
            hoverable
            >
            <Row>
                <Col span={4}>
                    <img src={consumerImg} alt='product-img' height={'45px'} width={'45px'}/>
                </Col>
                <Col span={8}>
                    <Statistic title="Name" value={'Aayush'} />
                </Col>
                <Col span={6}>
                    <Statistic title="Net Order" value={120} />
                </Col>
                <Col span={6}>
                    <Statistic title="Avg Order" value={'$12'} />
                </Col>
            </Row>
        </Card>
    </Col>
  )
}

export default ConsumerItem