import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import { navbarBrand } from './layout.module.scss'
import '../scss/custom.scss';


const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data.site)
  
  return (
      <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Navbar */}
      <nav className="navbar sticky-top navbar-light">
        <div className="container justify-content-start">
          <button 
            className="navbar-toggler" type="button" 
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className={`${navbarBrand} navbar-brand fw-lighter fs-4`}>ARDY</Link>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <p className="offcanvas-title fw-lighter fs-1" id="offcanvasNavbarLabel">ARDY</p>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 pe-3 fs-2">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Design concepts</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/" className="nav-link">Aon Brand</Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* end of Navbar */}
      <main>
        <br/>
        {children}
      </main>
    </div>
  )
}

export default Layout