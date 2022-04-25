import { Row,Col } from 'antd'
import React,{useState,useEffect} from 'react'
import ConsumerItem from '../CustomerPage/ConsumerItem'
import BillCard from './BillCard'
import Invoice from './Invoice'
import axios from 'axios'


function BillingPage() {

  const getProducts=()=>{
    const productRoute = process.env.REACT_APP_BACKEND + '/product/getProducts';
    console.log(productRoute);
    axios.get(productRoute, {withCredentials: true}).then(res => {
      console.log(res);
      if(res['data']['products']){
        setProductList({
          list:res['data']['products'].map((product)=>({
            name:product.product.name,
            price:product.product.price,
            quantity:product.quantity,
          })),
          isFetching:false,
        });
      }else{
        setProductList({
          list:undefined,
          isFetching:false,
        });
      }
      }).catch(error => {
        console.log(error);
        setProductList({
          list:undefined,
          isFetching:false,
        }); 
      })
    }
    useEffect(()=>{
      getProducts();
    },[])


  const [productList,setProductList]=useState({list:undefined,isFetching:true});
  const [customerDetails,setCustomerDetails]=useState(undefined);
  const [cartProductList,setCartProductList]=useState([]);

  return (
    <div>
        <Row>
            <Col lg={16} md={24}>
                <BillCard productList={productList.list} setCustomerDetails={setCustomerDetails} setCartProductList={setCartProductList}/>
            </Col>
            <Col lg={8} md={24}>
                <Invoice customerDetails={customerDetails} cartProductList={cartProductList}/>
            </Col>
        </Row>
    </div>
  )
}

export default BillingPage