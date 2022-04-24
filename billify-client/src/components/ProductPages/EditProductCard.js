import React,{useState} from 'react'
import { Form, Select, InputNumber, Button,Card } from 'antd';

const { Option } = Select;

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
  

function EditProductCard({productList}) {

    // const [searchTerm,setSearchTerm]=useState('');

    const editProduct=()=>{}

    const onFinish = (values) => {
      console.log(values);
      editProduct();
    };

    // const options=productList.filter((product) => (product.name.includes(searchTerm)));

    // const handleSearch=(event)=>{setSearchTerm(event.target.value)};
    
      return (
        <Card
          title={'Update Products Stocks'} 
          style={{width:'fit-content',margin:'.5rem auto'}}
          hoverable
        >
        {console.log(productList)}

        <Form {...layout} name="nest-messages" onFinish={onFinish}  validateMessages={validateMessages} >
          <Form.Item
            name='productName'
            label="Product"
            rules={[
              {
                required: true,
              },
            ]}
          >
            {/* <Input style={{width:'fit-content'}}/> */}
            {(productList)?(
              <Select
                defaultValue={productList[0].name}
                style={{ width: '100%' }}
              >
                {productList.map((product,index)=>{
                  return (
                    <Option key={product}>{product.name}</Option>
                  )
                })}
              </Select>
            ):(<></>)}

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
              Update
            </Button>
          </Form.Item>
        </Form>
        </Card>

    )

}

export default EditProductCard