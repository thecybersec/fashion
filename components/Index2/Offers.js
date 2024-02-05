import React from 'react';
import Link from 'next/link';

const Offers = () => {
    return (
        <>
            <div className="collection-area pb-100">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="collection-image">
                                <img src="/images/collection/collection6.jpg" alt="collection-image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="collection-content">
                                <h2 className="d-flex align-items-center">SUMMER SALE <span>50%</span> OFF</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod.</p>

                              <Link href="/shop-left-sidebar-2">
                                 <a className="default-btn">
                                        <i className="fas fa-store"></i> SHOP NOW
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offers;