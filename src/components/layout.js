import React from "react"
import TopMenu from "../components/menu"
import Footer from "../components/footer"
import './layout.css'

export default ({ children }) => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <TopMenu />
        {children}
      </div>
      <Footer />
    </div>
  )
}