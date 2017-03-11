import React from 'react';
import { Router, Route, Link ,browserHistory} from 'react-router'
import {Button,Menu, Icon,Input, Layout} from 'antd'
const Search = Input.Search;
export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           current: 'menber'
           
        }
       this.handleNavigator = this.handleNavigator.bind(this)
    }
    handleNavigator(e){
        this.setState({
            current: e.key
        })
    }
    render(){
        return (
            <div>
                <Menu selectedKeys={[this.state.current]} theme="dark" onClick={this.handleNavigator} mode="horizontal" style={{padding:'0 30px'}}>
                    <Menu.Item key="title">
                        <span style={{color:'white',fontSize:'20px'}}>Hackthon大赛后台管理系统</span>
                    </Menu.Item>
                    <Menu.Item key="menber">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="team">
                        <Link to="/team">团队信息</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}