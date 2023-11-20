/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
  return (
    <>
      <div id="sec-1" className="position-relative overflow-hidden h-100 w-100">
        <img src="/img/home-page.png" alt="home-page" className="img-fluid overflow-hidden" />
        <div className="w-100 h-100 position-absolute top-0">
          <div className="container h-75 mt-5 nav-container d-flex flex-column justify-content-between">
            <nav className="navbar navbar-expand-lg navbar-dark nav-bdr animate__animated animate__fadeInUpBig animate__slower animate__delay-1s">
              <div className="container-fluid">
                <a className="navbar-brand animate__animated animate__hinge animate__slower animate__delay-4s" href="#">
                  <img src="/img/logo_dark.webp" className="h-75 img-fluid" alt="logo" />
                </a>
                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="nav-1 w-100 d-flex justify-content-between">
                    <div className="nav-left">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-5 me-5">
                          <a className="nav-link text-black-50" aria-current="page" href="/Ola-html/s1-pro.html">S1 Pro</a>
                        </li>
                        <li className="nav-item ms-5 me-5">
                          <a className="nav-link text-black-50" href="/Ola-html/s1-new.html">S1</a>
                        </li>
                        <li className="nav-item ms-5 me-5">
                          <a className="nav-link text-black-50" href="/Ola-html/s1-air.html">S1 Air</a>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-right">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
                        <li className="nav-item ms-5 me-5">
                          <a className="nav-link text-black-50" href="#">Experience Centre</a>
                        </li>
                        <li className="nav-item ms-5 me-5">
                          <a className="nav-link text-black-50" href="#">Order Now</a>
                        </li>
                        <li className="nav-item ms-5 me-5 d-none d-lg-block d-xl-block d-xxl-block">
                          <button className="btn navbar-toggler-icon bg-dark p-4 rounded-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                          <div className="offcanvas offcanvas-end s1-offcanvas text-white-50" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                              <h5 id="offcanvasRightLabel" className="s11-h1">
                                Product
                              </h5>
                              <button type="button" className="btn-close text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                            </div>
                            <div className="offcanvas-body d-flex flex-column">
                              <div className="text-center s11-h4">S1 Pro</div>
                              <hr className="bg-white" />
                              <div className="text-center s11-h4">S1 Air</div>
                              <hr className="bg-white" />
                              <div className="text-center s11-h4">S1 New</div>
                              <hr className="bg-white" />
                              <div className="text-center s6-h1 mt-5">
                                Ownership and Support
                              </div>
                              <hr className="bg-white" />
                              <div className="text-center s11-h4">
                                Experience centre
                              </div>
                              <hr className="bg-white" />
                              <div className="text-center s11-h4">Hypercharger</div>
                              <hr className="bg-white" />
                              <div className="text-center row s11-h4 mt-5">
                                <div className="col-1" />
                                <button className="btn col-4 s11-h4 px-5 border border-dark bg-white">
                                  <a className="text-decoration-none" href="/Ola-html/form.html">Sign In</a>
                                </button>
                                <div className="col-2" />
                                <button className="btn col-4 s11-h4 px-5 border border-white text-white">
                                  <a className="text-decoration-none text-white" href>Support</a>
                                </button>
                                <div className="col-1" />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="container nav-bottom d-flex justify-content-between">
              <h1 className="left-text display-1 text-white fst-italic">
                The scooter <br />
                from the future
              </h1>
              <div className="right-text d-flex justify-content-center align-items-center">
                <div className="btn-group btn-group-lg w-100" role="group" aria-label="Basic example">
                  <button type="button" className="btn r-btn-1 me-3 fs-3">
                    Book a Test Ride
                  </button>
                  <button type="button" className="btn r-btn-2 fs-3">
                    Explore S1 Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
