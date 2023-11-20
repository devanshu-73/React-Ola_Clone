/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

const Sec_6 = () => {
    // State to track the active image container
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Function to toggle image containers
    const toggleImages = (itemIndex) => {
        setActiveImageIndex(itemIndex);
    };

    return (
        <>
            <div id="sec-6">
                <div className="container">
                    <div className="s6-top-h1 col-8 py-5 pe-5">
                        In our future factory, ordinary doesn't make the cut
                    </div>
                    <div className="nav-gallery w-100 d-flex justify-content-around mb-3">
                        <a href="#sec-6" className="fs-1" onClick={() => toggleImages(0)}>
                            Design
                        </a>
                        <a href="#sec-6" className="fs-1" onClick={() => toggleImages(1)}>
                            Digital Tech
                        </a>
                        <a href="#sec-6" className="fs-1" onClick={() => toggleImages(2)}>
                            Performance
                        </a>
                        <a href="#sec-6" className="fs-1" onClick={() => toggleImages(3)}>
                            Safety
                        </a>
                    </div>
                    <div className="s6-bottom">
                        {/* Images for Design */}
                        <div className={`image-container ${activeImageIndex === 0 ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/design_web_image_c1r1_310523.webp" className="img-fluid" alt="Design Image 1" />
                                </div>
                                <div className="col-6">
                                    <img src="/img/design_web_image_c2r1_010623.webp" className="img-fluid row" alt="Design Image 2" />
                                    <img src="/img/design_web_image_c2r2_010623.webp" className="img-fluid row mt-4" alt="Design Image 3" />
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-4">
                                    <div className="s6-h1">Iconic headlamp</div>
                                    <div className="fs-5 text-black-50 text-black-50">
                                        Like the moon. But better.
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">12 stunning colours</div>
                                    <div className="fs-5 text-black-50 text-black-50">
                                        Many colours. All green.
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">Seamless Design</div>
                                    <div className="fs-5 text-black-50 text-black-50">
                                        No nuts. No bolts. No kidding.
                                    </div>
                                </div>
                                <div>
                                    <a href="#sec-6" className="text-black-50 text-decoration-none fs-2">
                                        Learn more about Design
                                        <span><img src="/img/cta-green-arrow_v1.svg" alt /></span></a>
                                </div>
                            </div>
                        </div>

                        {/* Images for Digital Tech */}
                        <div className={`image-container ${activeImageIndex === 1 ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/digitaltech_web_image_c1r1_310523.webp" className="img-fluid" alt="Digital Tech Image 1" />
                                </div>
                                <div className="col-6">
                                    <img src="/img/digitaltech_web_image_c2r1_310523.webp" className="img-fluid row" alt="Digital Tech Image 2" />
                                    <img src="/img/digitaltech_web_image_c2r2_310523.webp" className="img-fluid row mt-4" alt="Digital Tech Image 3" />
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-4">
                                    <div className="s6-h1">Digital Key</div>
                                    <div className="fs-5 text-black-50">LTap. Lock. Tap. Unlock.</div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">Proximity Unlock</div>
                                    <div className="fs-5 text-black-50">
                                        Step closer to unlock. Like magic.
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">Built-in Navigation</div>
                                    <div className="fs-5 text-black-50">
                                        Take the road less travelled.
                                    </div>
                                </div>
                                <div>
                                    <a href="#sec-6" className="text-black-50 text-decoration-none fs-2">
                                        Learn more about Digital Tech
                                        <span><img src="/img/cta-green-arrow_v1.svg" alt /></span></a>
                                </div>
                            </div>

                        </div>

                        {/* Images for Performance */}
                        <div className={`image-container ${activeImageIndex === 2 ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/performance_web_image_c1r1_310523.webp" className="img-fluid" alt="Performance Image 1" />
                                </div>
                                <div className="col-6">
                                    <img src="/img/performance_web_image_c2r1_310523.webp" className="img-fluid row" alt="Performance Image 2" />
                                    <img src="/img/home_tenet_performance_mods.webp" className="img-fluid row mt-4" alt="Performance Image 3" />
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-4">
                                    <div className="s6-h1">181km range</div>
                                    <div className="fs-5 text-black-50">
                                        Go further. And then some.
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">Peak power of 8.5KW</div>
                                    <div className="fs-5 text-black-50">
                                        We don’t call it a beast for nothing.
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">Modes</div>
                                    <div className="fs-5 text-black-50">
                                        You choose the speed. We have a Mode.
                                    </div>
                                </div>
                                <div>
                                    <a href="#sec-6" className="text-black-50 text-decoration-none fs-2">
                                        Learn more about Performance
                                        <span><img src="/img/cta-green-arrow_v1.svg" alt /></span></a>
                                </div>
                            </div>
                        </div>

                        {/* Images for Safety */}
                        <div className={`image-container ${activeImageIndex === 3 ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/safety_web_image_c1r1_310523.webp" className="img-fluid" alt="Safety Image 1" />
                                </div>
                                <div className="col-6">
                                    <img src="/img/safety_web_image_c2r1_310523.webp" className="img-fluid row" alt="Safety Image 2" />
                                    <img src="/img/safety_web_image_c2r2_310523.webp" className="img-fluid row mt-4" alt="Safety Image 3" />
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-4">
                                    <div className="s6-h1">Tested for 4Mn km</div>
                                    <div className="fs-5 text-black-50">
                                        To the moon and back. 5 times over.
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">A battery that lasts</div>
                                    <div className="fs-5 text-black-50">
                                        Bank on your battery. Without a second thought
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="s6-h1">IP67 and 55 certification</div>
                                    <div className="fs-5 text-black-50">
                                        No nuts. No bolts. No kidding.
                                    </div>
                                </div>
                                <div>
                                    <a href="#sec-6" className="text-black-50 text-decoration-none fs-2">
                                        Learn more about Safety
                                        <span><img src="/img/cta-green-arrow_v1.svg" alt /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sec_6;
