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
            <Col span={3}>
                <img src={productImg} alt='product-img' height={'35px'} width={'35px'}/>
            </Col>
            <Col span={9}>
              {/* <Statistic title="Name" value={title} /> */}

                <Title level={5}>{title}</Title>
            </Col>
            <Col span={6}>
                <Statistic title="Stocks" value={quantity} />
            </Col>
            <Col span={6}>
                <Statistic title="Price" value={price} />
            </Col>
        </Row>
      </Card>
    </Col>

  )
}

export default Product