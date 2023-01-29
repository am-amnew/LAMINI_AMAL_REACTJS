import React from 'react'
import "./l.css"
import o from './image/2554434.png';
import o2 from './image/h.png';
import c from './image/c.png';


const test = () => {

    return (
        <>
            <br /><br /><br />
            <div className="container mt-5 mb-5">
                <div className="row g-2">
                    <div className="col-md-4">
                        <div className="card p-3 text-center px-4">
                            <div className="user-image">
                                <img src={o} className="rounded-circle" width={80} />
                            </div>
                            <div className="user-content">
                                <h5 className="mb-0">Quality</h5>
                                <span>For our users</span>
                                <p>Always the quality for our customers.</p>
                            </div>
                            <div className="ratings">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 text-center px-4">
                            <div className="user-image">
                                <img src={o2} className="rounded-circle" width={80} />
                            </div>
                            <div className="user-content">
                                <h5 className="mb-0">Happy Customers</h5>
                                <span>For our users</span>
                                <p>The better desicion you make the happier you become.</p>
                            </div>
                            <div className="ratings">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 text-center px-4">
                            <div className="user-image">
                                <img src={c} className="rounded-circle" width={80} />
                            </div>
                            <div className="user-content">
                                <h5 className="mb-0">confident</h5>
                                <span>For our users</span>
                                <p>Always in time.</p>
                            </div>
                            <div className="ratings">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="four col-md-3">
                        <div className="counter-box colored">
                            <i className="fa fa-thumbs-o-up" />
                            <span className="counter">2147</span>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa fa-group" />
                            <span className="counter">3275</span>
                            <p>Registered Members</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa  fa-shopping-cart" />
                            <span className="counter">289</span>
                            <p>Available Products</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa  fa-user" />
                            <span className="counter">1563</span>
                            <p>Saved Trees</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default test