/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <>
            <div id="sec-12" className="mt-5">
                <div>
                    {/* Footer */}
                    <footer className="text-center text-lg-start text-white">
                        {/* Grid container */}
                        <div className="container p-4 pb-0">
                            {/* Section: Links */}
                            <section className>
                                {/*Grid row*/}
                                <div className="row">
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold s11-h1">
                                            Ola Electric
                                        </h6>
                                        <p>
                                            Here you can use rows and columns to organize your footer
                                            content.
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    <hr className="w-100 clearfix d-md-none" />
                                    {/* Grid column */}
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold s11-h4">Products</h6>
                                        <h6 className="text-uppercase mb-4 font-weight-bold s11-h4">Contact</h6>
                                        <h6 className="text-uppercase mb-4 font-weight-bold s11-h4">Privacy</h6>
                                    </div>
                                    {/* Grid column */}
                                    <hr className="w-100 clearfix d-md-none" />
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold s11-h4">
                                            Coperate
                                        </h6>
                                        <h6 className="text-uppercase mb-4 font-weight-bold s11-h4">
                                            Join Us
                                        </h6>
                                    </div>
                                    {/* Grid column */}
                                    <hr className="w-100 clearfix d-md-none" />
                                    {/* Grid column */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold s11-h4">Address</h6>
                                        <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                                        <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
                                        <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                                        <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/*Grid row*/}
                            </section>
                            {/* Section: Links */}
                            <hr className="my-3" />
                            {/* Section: Copyright */}
                            <section className="p-3 pt-0">
                                <div className="row d-flex align-items-center">
                                    {/* Grid column */}
                                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                                        {/* Copyright */}
                                        <div className="p-3">
                                            © 2023 Copyright:
                                            <a className="text-white" href="https://olaelectric.com/">Ola Electric</a>
                                        </div>
                                        {/* Copyright */}
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                        {/* Facebook */}
                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
                                        {/* Twitter */}
                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
                                        {/* Google */}
                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
                                        {/* Instagram */}
                                        <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
                                    </div>
                                    {/* Grid column */}
                                </div>
                            </section>
                            {/* Section: Copyright */}
                        </div>
                        {/* Grid container */}
                    </footer>
                    {/* Footer */}
                </div>
            </div>

        </>
    )
}

export default Footer
