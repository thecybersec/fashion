import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import Link from 'next/link'

const ErrorPage = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <div className="not-found-area ptb-100">
                <div className="container">
                    <div className="not-found-content">
                        <img src="/images/error.png" alt="error-image" />
                        <h3>Page Doesn't Exist</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                        <Link href="/">
                            <a className="default-btn">
                                <i className="far fa-hand-point-left"></i> Back to Home
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ErrorPage;
