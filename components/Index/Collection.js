import React from 'react';
import Link from 'next/link'

const Collection = () => {
    return (
        <>
            <div className="collection-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-collection-box">
                                <img src="/images/collection/collection1.jpg" alt="collection-image" />
                                <div className="content">
                                    <h3>Clothing <span>34 Items</span></h3>
                                </div>
                                <Link href="/shop-full-width-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-collection-box">
                                <img src="/images/collection/collection2.jpg" alt="collection-image" />
                                <div className="content">
                                    <h3>Accessories <span>28 Items</span></h3>
                                </div>
                                <Link href="/shop-full-width-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-collection-box">
                                <img src="/images/collection/collection3.jpg" alt="collection-image" />
                                <div className="content">
                                    <h3>Leather Bag <span>52 Items</span></h3>
                                </div>
                                <Link href="/shop-full-width-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collection;
