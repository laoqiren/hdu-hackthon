import React from 'react';
import fetch from 'isomorphic-fetch'
import { Button,Card,Row,Col,Rate,Icon,Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import MyHeader from './Header';
require('../main.css')

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={{fontSize:'16px'}}>
                <Layout>
                   
                    <MyHeader/>
                    
                    <Content style={{backgroundColor: '#EDEDED', padding:"15px 5%"}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        created by Xia Luo
                    </Footer>
                </Layout>
            </div>
        )
    }
}