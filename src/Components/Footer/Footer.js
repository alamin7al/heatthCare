import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className='text-start'>HealthCare</h3>
                        <p>Healthcare is a part of life we all  we are entitled to – it is our right to have access to healthcare whenever we need it. However, for many people across the world</p>
                        
                    </div>
                    <div className="col-md-4">
                        <h4 className='text-start'>Usefull Links</h4>
                        <div className='d-flex '>

                            <div className='my-auto mx-1 mt-4'>
                                <a className='d-block text-decoration-none' href="/general">General Info</a>
                                <a className='d-block text-decoration-none' href="/help">Help Center</a>
                                <a className='d-block text-decoration-none' href="/our service">Ouer Services</a>
                                <a className='d-block text-decoration-none' href="/privacy">Privacy Policy</a>
                            </div>
                            <div className='my-auto mx-1 mt-4'>
                                <a className='d-block text-decoration-none' href="/online"> Online Support </a>
                                <a className='d-block text-decoration-none' href="/help"> Help Counter </a>
                                <a className='d-block text-decoration-none' href="/students"> Health</a>
                                <a className='d-block text-decoration-none' href="/secter"> Health Care </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className='text-start'> Health</h4>
                        <div className='d-flex '>
                            <div className='my-auto mx-1 mt-4'>
                                <h6> Nurse </h6>
                                <h6> Doctor </h6>
                                <h6> Preshent </h6>
                                <h6> Healthy </h6>
                            </div>
                            <div className='my-auto mx-1 mt-4'>
                                <h6> Sick </h6>
                                <h6> Medical  </h6>
                                <h6> Quantity </h6>
                                <h6>HealthCare Symbol </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;