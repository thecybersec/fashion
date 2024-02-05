import React from 'react';

const OrderTrackingForm = () => {
    return (
        <>
            <div className="order-tracking-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="order-tracking-content">
                                <form>
                                    <div className="form-group">
                                        <label>Order ID</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Found in your order confirmation email" 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Billing E-mail</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Email you used during checkout" 
                                        />
                                    </div>
                                    <button type="submit" className="default-btn">TRACK ORDER</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="order-tracking-image">
                                <img 
                                    src="/images/order-tracking.png" 
                                    alt="order-tracking" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderTrackingForm;