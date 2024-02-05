import React from 'react';
import Link from 'next/link';

const Collection = () => {
    return (
        <>
            <div className="collection-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="collection-item">
                                <img src="/images/collection/collection7.jpg" alt="collection-image" />
                                <div className="content">
                                    <span>New Collection</span>
                                    <h3>SHOP WOMANS</h3>
                                    <Link href="/shop-left-sidebar-2">
                                        <a className="link-btn">
                                            <i className="fas fa-store"></i> SHOP NOW
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="collection-item">
                                <img src="/images/collection/collection8.jpg" alt="collection-image" />
                                <div className="content">
                                    <span>New Collection</span>
                                    <h3>SHOP MANS</h3>
                                    <Link href="/shop-left-sidebar-2">
                                        <a className="link-btn">
                                            <i className="fas fa-store"></i> SHOP NOW
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collection;
