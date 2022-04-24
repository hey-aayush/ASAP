import {Card,Row,Col} from 'antd'
import Product from './Product'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AddProductCard from './AddProductCard';
import EditProductCard from './EditProductCard';
import SearchProductCard from './SearchProductCard';

function ProductPage() {
  const [productList,setProductList]=useState({list:undefined,isFetching:true});

  const getProducts=()=>{
    const productRoute = process.env.REACT_APP_BACKEND + '/product/getProducts';
    console.log(productRoute);
    axios.get(productRoute, {withCredentials: true}).then(res => {
      console.log(res);
      if(res['data']['products']){
        setProductList({
          list:res['data']['products'],
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

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Row><AddProductCard/></Row>
          <Row><EditProductCard/></Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
            title={<SearchProductCard/>}
            style={{width:'fit-content',margin:'2rem auto'}}
            hoverable>
            <Row span={24}>
              {
                productList && productList.list && productList.list.map((product,index) => {
                    return <Product key={index} title={product.product.name} price={product.price} quantity={product.quantity} />
                })
              }
            </Row>
          </Card>

        </Col>
      </Row>

    </div>
  )
}

export default ProductPage