import React from "react"
import './footer.css'

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer" role="contentinfo">
        <p>Made for fun to learn and share</p>
        <a className="footer-link" href="#top-menu">Go to the top of the page</a>
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nataliavokrouhlecka/" aria-label="Go to Natalia's LinkedIn profile"><i className="fab fa-linkedin-in footer-icon"></i></a>
      </footer>
    );
  }
}

export default Footer;