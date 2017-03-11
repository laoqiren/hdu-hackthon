import React from 'react';
import fetch from 'isomorphic-fetch'
import { Button,Card,Row,Col,Rate,Icon,Layout } from 'antd';
import Side from './Side'
const { Header, Footer, Sider, Content } = Layout;


export default class Menber extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menbers: [],
            menberNum: 0
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(id,i){
        fetch(`/api/deleteMenber?id=${id}`,{
            method: 'GET',
            credentials: "include"
        }).then((res)=>{
            if(res.ok){
                if(i === 0){
                     return this.setState({
                         menberNum: this.state.menberNum - 1,
                         menbers: this.state.menbers.slice(1)
                    })
                }
                this.setState({
                    menberNum: this.state.menberNum - 1,
                    menbers: [...this.state.menbers.slice(0,i),...this.state.menbers.slice(i+1)]
                })
            }
        })
    }
    componentDidMount(){
        fetch('/api/getMenbers',{
            method: 'GET',
            credentials: "include"
        }).then((res)=>{
            if(res.ok){
                return res.json();
            }
        }).then(json=>{
            if(json){
                this.setState({
                    menbers: json
                })
            }
            this.setState({
                menberNum: this.state.menbers.length
            })
        })
    }
    render(){
        return (
            <div style={{fontSize:'16px'}}>
                <Layout style={{padding:'20px'}}>
                    <Sider width="300" style={{backgroundColor:'#EDEDED',marginRight:'20px'}}>
                        <Side type="menber" menberNum={this.state.menberNum}/>
                    </Sider>
                    <Content style={{backgroundColor:'white',padding:'30px'}}>
                        <Row style={{backgroundColor:'#E0FFFF',height:'50px',lineHeight:'50px'}}>
                            <Col span="3">姓名</Col>
                            <Col span="2">年级</Col>
                            <Col span="4">学校</Col>
                            <Col span="2">学院</Col>
                            <Col span="2">性别</Col>
                            <Col span="4">联系方式</Col>
                            <Col span="4">所属团队</Col>
                        </Row>
                        {this.state.menbers.map((menber,i)=>{
                            return <Row key={i} style={{borderBottom:'1px solid #EDEDED',height:'50px',lineHeight:'50px',overflow:'hidden'}}>
                                <Col span="3">{menber.name}</Col>
                                <Col span="2">{menber.grade}</Col>
                                <Col span="4">{menber.school}</Col>
                                <Col span="2">{menber.college}</Col>
                                <Col span="2">{menber.sex}</Col>
                                <Col span="4">{menber.tel}</Col>
                                 <Col span="4">{menber.team}</Col>
                                <Col span="2"><Button type="danger" onClick={()=>this.handleDelete(menber._id,i)}>删除</Button></Col>
                            </Row>
                        })}
                        </Content>
                    </Layout>
                        
            </div>
        )
    }
}