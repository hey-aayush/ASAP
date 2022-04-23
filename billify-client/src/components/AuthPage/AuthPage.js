import React from 'react'
import {Row,Col,Card,Tabs} from 'antd';
import LoginCard from './LoginCard';
import SignUpCard from './SignCard';
import shopkeeperIcon from '../../assets/shopkeeper.png'
const { TabPane } = Tabs;
function AuthPage() {
  return (
    <div>
        <Card>
            <Tabs defaultActiveKey="1" centered style={{width:'fit-content',margin:'1rem auto'}}>
                <TabPane tab="Login" key="1">
                    <LoginCard imgIcon={shopkeeperIcon}/>
                </TabPane>
                <TabPane tab="Sign Up" key="2">
                    <SignUpCard/>
                </TabPane>
            </Tabs>
        </Card>

    </div>
  )
}

export default AuthPage