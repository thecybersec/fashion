import React from 'react';
import Link from 'next/link';

const PageTitle = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <>
            <div className="page-title-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <h2>{pageTitle}</h2>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <ul className="page-title-content">
                                <li>
                                    <Link href={homePageUrl}>
                                        <a>{homePageText}</a>
                                    </Link>
                                </li>
                                <li>{activePageText}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageTitle;