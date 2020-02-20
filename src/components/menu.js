import React from 'react';
import { Menu } from 'antd';
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
        <Menu.Item key="about">
          <a href="#about">
            About
          </a>
        </Menu.Item>
        <Menu.Item key="articles">
          <a href="#posts">
            Articles
            </a>
        </Menu.Item>
        <Menu.Item key="events">
          <a href="#events">
            Events
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;