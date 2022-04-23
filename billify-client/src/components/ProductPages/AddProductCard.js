import React from 'react'
import { Form, Input, InputNumber, Button,Card } from 'antd';
import { createProduct } from '../../apiCalls/product';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function AddProductCard() {

    const addProduct = ({ productName , tag , price }) => {
      createProduct(productName, price, tag);
    }

    const onFinish = (values) => {
        console.log(values);
        addProduct(values);
      };
    
      return (
        <Card
          title={'Add New Products'} 
          style={{width:'fit-content',margin:'.5rem auto'}}
          hoverable
        >

        <Form {...layout} name="nest-messages" onFinish={onFinish}  validateMessages={validateMessages}>
          <Form.Item
            name='productName'
            label="Product"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{width:'fit-content'}}/>
          </Form.Item>
        
          <Form.Item
            name='tag'
            label="Tag"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{width:'fit-content'}}/>
          </Form.Item>
          
          <Form.Item
            name='price'
            label="Price"
            rules={[
              {
                type: 'number',
                min: 0,
                required: true
              },
            ]}
          >
            <InputNumber controls={false} style={{width:'fit-content'}}/>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
        </Card>

    )
}

export default AddProductCard