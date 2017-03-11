import React from 'react';
import fetch from 'isomorphic-fetch'
import { Button,Card,Row,Col,Rate,Icon,Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


export default class Side extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            teamNum: 0,
            menberNum: 0
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
                    teamNum: json.length
                })
            }
        })
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
                    menberNum: json.length
                })
            }
        })
    }
    render(){
        return (
            <div style={{fontSize:'16px'}}>
                <div style={{backgroundColor:'white',marginBottom:'10px'}}>
                    <h4 style={{backgroundColor:'#F0FFF0'}}>
                    <span>数据统计</span>
                    </h4>
                    <div style={{padding:'8px'}}>
                        <Row>
                        <Col><Icon type="usergroup-delete" /> {this.state.teamNum} 个团队参赛</Col>
                        </Row>
                        <Row>
                        <Col><Icon type="user-add" /> {this.props.menberNum || this.state.menberNum} 个人参赛</Col>
                        </Row>
                    </div>
                </div>
                <div style={{backgroundColor:'white',marginBottom:'10px'}}>
                    <h4 style={{backgroundColor:'#F0FFF0'}}>
                    <span>操作</span>
                    </h4>
                    <div style={{padding:'8px'}}>
                        <Row>
                        <Col><Button type="primary" icon="download" ><a href="/api/download" style={{color:'white'}}>导出Excel</a></Button></Col>
                        </Row>
                        <br/>
                        
                    </div>
                </div>
                            
            </div>
        )
    }
}