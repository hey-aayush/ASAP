import { Form, Input, Button, Checkbox,Card,Switch } from 'antd';

const LoginCard = ({imgIcon,title}) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
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
            label="ShopOwner"
            rules={[
            {
                required: true,
            },
            ]}
            valuePropName='checked'
            >
            <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
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
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    </Card>

  );
};

export default LoginCard;