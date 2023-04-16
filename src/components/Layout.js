import React from 'react'
import {Navbar, Footer} from "../globals";
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout