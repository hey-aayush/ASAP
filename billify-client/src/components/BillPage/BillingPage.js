import { Row,Col } from 'antd'
import React,{useState} from 'react'
import ConsumerItem from '../CustomerPage/ConsumerItem'
import BillCard from './BillCard'
import Invoice from './Invoice'

function BillingPage() {

  const [productList,setProductList]=useState({list:undefined,isFetching:true});
  const [customerDetails,setCustomerDetails]=useState({data:undefined,isFetching:true});
  const [cartProductList,setCartProductList]=useState([]);

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