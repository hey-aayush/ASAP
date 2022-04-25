import React from 'react'
import { Form, Input, InputNumber, Button,Card, Select} from 'antd';
const { Option } = Select;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
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

function BillCard({productList,setCustomerDetails,setCartProductList}) {

    const onFinish = (values) => {
      console.log(values);
      setCartProductList({

      })
    };

  return (
    <div>
        <Card
          title={'Create new Bills'} 
          style={{width:'fit-content',margin:'3rem auto',padding:'.5rem' }}
          hoverable
        >
        <Form {...layout} name="nest-messages" onFinish={onFinish}  validateMessages={validateMessages} style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',margin:'.2rem auto'}}>
          <Form.Item
            name='customerName'
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{width:'fit-content'}}/>
          </Form.Item>
        
          <Form.Item
            name='emailId'
            label="Email ID"
            rules={[
              {
                type: 'number',
                min: 0
              },
            ]}
          >
            <Input style={{width:'fit-content'}}/>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>

        <Form {...layout} name="nest-messages" onFinish={onFinish}  validateMessages={validateMessages}  style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
          <Form.Item
            name='productName'
            label="Product"
            rules={[
              {
                required: true,
              },
            ]}
            style={{width:'max-content'}}
          >
              {(productList)?(
                <Select
                  defaultValue={productList[0].id}
                >
                  {productList.map((product,index)=>{
                    return (
                      <Option key={product}>{product.name}</Option>
                    )
                  })}
                </Select>
              ):(<>
                <Select disabled={true}/>
              </>)}
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
    </div>
  )
}

export default BillCard