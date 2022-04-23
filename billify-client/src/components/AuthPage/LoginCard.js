import { Form, Input, Button, Checkbox,Card,Switch } from 'antd';
import axios from 'axios';
import React,{useState} from 'react'

const LoginCard = ({imgIcon}) => {

    const [logging,setLoging]=useState(false);
    const [isShopkeeper,setShopkeeper]=useState(false);
    
    const login=(values)=>{
        var loginRoute;
        if(isShopkeeper) loginRoute= process.env.REACT_APP_BACKEND + '/login/shopkeeper';
        else loginRoute = process.env.REACT_APP_BACKEND + '/login/customer';
        console.log(isShopkeeper,loginRoute);
        axios.post(loginRoute, {
            email: values.emailId, 
            password: values.password
        }, {withCredentials: true}).then(res => {
            console.log(res);
            if(res['data']){
                window.location.reload(false);
            }
            setLoging(false);

        }).catch(error => {
            console.log(error);
            setLoging(false);
        })
    }
    const onFinish = (values) => {
        setLoging(true);
        console.log('Success:', values);
        login(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleShopChange=()=>{
        setShopkeeper(!isShopkeeper);
    }

    return (
        
        <Card style={{ width: 'max-content' ,margin:"2rem auto"}}
            extra={<img className='login-image' alt='img' src={imgIcon} height={'40px'} />}
            title={`Login`}
            hoverable
            >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 12,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            <Form.Item
                name="emailId"
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
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password style={{margin:0}} />
            </Form.Item>

            <Form.Item
                name="isShopkeeper"
                label="Shopkeeper"
                rules={[
                {
                    required: true,
                },
                ]}
                valuePropName='checked'
                >
                <Switch checkedChildren="Yes" unCheckedChildren="No" onChange={handleShopChange}/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset:8,
                span: 8,
                }}
            >
                <Button type="primary" htmlType="submit" loading={logging}>
                    Submit
                </Button>
            </Form.Item>
            </Form>
        </Card>
    );
};

export default LoginCard;