import React from 'react';
import fetch from 'isomorphic-fetch'
import { Button,Card,Row,Col,Rate,Icon,Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Side from './Side'


export default class Team extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [{teamName:'hhhhh',school:'hdu',college:'computer',menbers:[]}]
        }
    }
    componentDidMount(){
        fetch('/api/getTeams',{
            method: 'GET',
            credentials: "include"
        }).then((res)=>{
            if(res.ok){
                return res.json();
            }
        }).then(json=>{
            if(json){
                this.setState({
                    users: json
                })
            }
        })
    }
    render(){
        return (
            <div style={{fontSize:'16px'}}>
                <Layout style={{padding:'20px'}}>
                    <Sider width="300" style={{backgroundColor:'#EDEDED',marginRight:'20px'}}>
                        <Side type="team" />
                    </Sider>
                    <Content style={{backgroundColor:'white',padding:'30px'}}>
                        <Row style={{backgroundColor:'#E0FFFF',height:'50px',lineHeight:'50px'}}>
                            <Col span="4">团队名称</Col>
                            <Col span="2">年级</Col>
                            <Col span="2">学校</Col>
                            <Col span="2">学院</Col>
                            <Col span="4">联系方式</Col>
                            <Col span="2">成员1</Col>
                            <Col span="2">成员2</Col>
                            <Col span="2">成员3</Col>
                            <Col span="2">成员4</Col>
                        </Row>
                        {this.state.users.map((user,i)=>{
                            return <Row key={i} style={{borderBottom:'1px solid #EDEDED',height:'50px',lineHeight:'50px',overflow:'hidden'}}>
                                <Col span="4">{user.teamName}</Col>
                                <Col span="2">{user.grade}</Col>
                                <Col span="2">{user.school}</Col>
                                <Col span="2">{user.college}</Col>
                                <Col span="4">{user.tel}</Col>
                                {
                                    this.state.users[i].menbers
                                    .map((menber,j)=>{
                                        return <Col key={j} span="2">
                                            {menber.name}
                                        </Col>
                                    })
                                }
                                
                            </Row>
                        })}
                        </Content>
                    </Layout>
            </div>
        )
    }
}