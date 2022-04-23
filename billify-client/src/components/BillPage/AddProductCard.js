import React from 'react'
import { Form, Input, InputNumber, Button,Card, Row } from 'antd';

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

    const addProduct=()=>{}

    const onFinish = (values) => {
        console.log(values);
      };
    
      return (
        <Card
          title={'Add New Products'} 
          style={{width:'fit-content',margin:'.5rem auto',padding:'.5rem' }}
          hoverable
        >
        <Form {...layout} name="nest-messages" onFinish={onFinish}  validateMessages={validateMessages} style={{display:'flex',flexDirection:'row'}}>
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
            name='quantity'
            label="Quantity"
            rules={[
              {
                type: 'number',
                min: 0
              },
            ]}
          >
            <InputNumber controls={false} style={{width:'fit-content'}}/>
          </Form.Item>
          
          <Form.Item
            name='price'
            label="Price"
            rules={[
              {
                type: 'number',
                min: 0
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