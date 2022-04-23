import React from 'react'
import { Statistic,Card,Col,Row,Typography } from 'antd';
import productImg from '../../assets/product.png'
const { Title } = Typography;

function Product({title,desc,tags,price,quantity}) {
  return (
    <Col span={24}>
      <Card style={{margin:'.5rem'}}
        hoverable
        >
        <Row>
            <Col span={4}>
                <img src={productImg} alt='product-img' height={'45px'} width={'45px'}/>
            </Col>
            <Col span={8}>
                <Title level={5}>Product</Title>
            </Col>
            <Col span={6}>
                <Statistic title="Quantity" value={12} />
            </Col>
            <Col span={6}>
                <Statistic title="Price" value={'$12'} />
            </Col>
        </Row>
      </Card>
    </Col>

  )
}

export default Product