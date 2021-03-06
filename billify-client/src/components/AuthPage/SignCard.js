import React,{useState} from 'react'
import {Form,Input, Button,Card,Switch} from 'antd';
import shopkeeperIcon from '../../assets/shopkeeper.png'
import axios from 'axios';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function SignUpCard() {
  
  const [signing,setSigning]=useState(false);
  const [isShopkeeper,setShopkeeper]=useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success : ",values)
    setSigning(true);

    var signInRoute=process.env.REACT_APP_BACKEND;
    var userRequest;
    if(isShopkeeper){
      signInRoute = signInRoute + '/register/shopkeeper';
      userRequest={
        email: values.email, 
        password: values.password,
        name:(values.firstname+' '+values.lastname),
        shopName:values.shopName
      };
    }else{
      signInRoute = signInRoute + '/register/customer';
      userRequest={
        email: values.email, 
        password: values.password,
        name:(values.firstname+' '+values.lastname),
      };
    }

    console.log(userRequest);
    axios.post(signInRoute,userRequest, {withCredentials: true}).then(res => {
        console.log(res);
        if(res['data']){
            window.location.reload(false);
        }
    }).catch(error => {
        console.log(error);
    })
  }

  const handleShopChange=()=>{
    setShopkeeper(!isShopkeeper);
  }
  return (
    <div>
      <Card
        extra={<img className='signup-image' alt='img' src={shopkeeperIcon} height={'35px'} />}
        title={`Sign-up form`}
        style={{margin:'2rem auto',width:'fit-content'}}
        hoverable
        >

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '91',
        }}
        scrollToFirstError
      >
      <Form.Item
        name="firstname"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          // {
          //     pattern:  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/,
          //     message: 'Wrong format',
          // },
        ]}
        hasFeedback
      >
        <Input.Password style={{margin:0}}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Re-enter Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        style={{width:"fit-content"}}
      >
        <Input.Password style={{margin:0}}/>
      </Form.Item>

      
      <Form.Item
        name="isShopkeeper"
        label="Are you Shopkeeper ?"
        rules={[
          {
            required: true,
          },
        ]}
        valuePropName='checked'
        >
        <Switch checkedChildren="Yes" unCheckedChildren="No" onChange={handleShopChange}/>
      </Form.Item>
      {(isShopkeeper)?(
        <Form.Item
          name="shopName"
          label="Shop Name"
        >
          <Input />
        </Form.Item>
      ):(<></>)}

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={signing}>
          Register
        </Button>
      </Form.Item>
      </Form>
      </Card>

    </div>
  )
}

export default SignUpCard