import React from 'react';
import Link from 'next/link'

const Offers = () => {
    return (
        <>
            <div className="collection-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-collection-item">
                                <img src="/images/collection/collection4.jpg" alt="collection-image" />
                                <div className="content">
                                    <h3>
                                        SUMMER
                                        <span>SALE</span>
                                        UPTO 50% OFF
                                    </h3>
                                    <Link href="/shop-full-width-1">
                                        <a className="default-btn">
                                            <i className="fas fa-store"></i> SHOP NOW
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-collection-item">
                                <img src="/images/collection/collection5.jpg" alt="collection-image" />
                                <div className="content">
                                    <h3>
                                        SAVE UP
                                        <span>50%</span>
                                        OFF
                                    </h3>
                                    <Link href="/shop-full-width-1">
                                        <a className="default-btn">
                                            <i className="fas fa-store"></i> SHOP NOW
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape2">
                    <img src="/images/shape/shape2.png" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default Offers;
