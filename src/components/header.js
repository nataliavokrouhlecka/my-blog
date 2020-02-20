import React from "react"
import './header.css'
import { Timeline } from 'antd';

class Header extends React.Component {

  render() {
    return (
      <div id="about" className="header">
        <h2 className="header-tagline">Hi, I'm Natalia! I'm a web developer.</h2>
        <p>I enjoy organising workshops for developers. I also teach children programming using Scratch and Ozobots.
I am planning to share here my experience and ideas as well as experiment a bit with some new technologies - it is the excuse in case something goes wrong and the blog is down or broken ¯\_(ツ)_/¯.</p>
      </div>
    );
  }
}

export default Header;