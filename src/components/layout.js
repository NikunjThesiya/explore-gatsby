import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  )
}
export default Layout
