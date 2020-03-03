import React from 'react';
import { Menu } from 'antd';
import { Link } from "gatsby"
import 'antd/dist/antd.css'
import './Menu.css'

class TopMenu extends React.Component {
  state = {
    current: '',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="top-menu" id="top-menu">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/#about">About</Link>
        </Menu.Item>
        <Menu.Item key="posts">
          <Link to="/#posts">Posts</Link>
        </Menu.Item>
        <Menu.Item key="events">
          <Link to="/#events">Events</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;