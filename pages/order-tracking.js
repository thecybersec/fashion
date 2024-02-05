import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import OrderTrackingForm from '../components/OrderTracking/OrderTrackingForm';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const OrderTracking = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageTitle
                pageTitle="Order Tracking" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Order Tracking"
            />

            <OrderTrackingForm />

            <SubscribeForm />

            <Footer />
        </>
    );
}

export default OrderTracking;