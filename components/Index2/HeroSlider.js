import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    nav: true,
    margin: 25,
    loop: true,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
        "<i class='fas fa-long-arrow-alt-left'></i>",
        "<i class='fas fa-long-arrow-alt-right'></i>",
    ]
};

const HeroSlider = () => {

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="home-wrapper-area">
                <div className="container-fluid">
                    {display ? <OwlCarousel 
                        className="home-wrapper-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-banner-item">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-12">
                                    <div className="content">
                                        <span className="sub-title">New Arrival!</span>
                                        <h1>SUMMER COLLECTION <span>-50%</span></h1>
                                        <Link href="/shop-left-sidebar-2">
                                            <a className="default-btn">
                                                <i className="fas fa-store"></i> SHOP NOW
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="image">
                                        <img src="/images/banner/banner1.jpg" alt="banner-image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-banner-item">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-12">
                                    <div className="content">
                                        <span className="sub-title">New Arrival!</span>
                                        <h1>WINTER COLLECTION <span>-20%</span></h1>
                                        <Link href="/shop-left-sidebar-2">
                                            <a className="default-btn">
                                                <i className="fas fa-store"></i> SHOP NOW
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="image">
                                        <img src="/images/banner/banner2.jpg" alt="banner-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
                
                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape/shape1.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape/shape3.png" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default HeroSlider;
