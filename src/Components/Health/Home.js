import React from 'react';
import img from '../imagess/health.jpg'

import imgs from '../../Components/imagess/health.jpg'
import imgss from '../../Components/imagess/download (2).jpg'
import imgsss from '../../Components/imagess/download (1).jpg'

import './Home.css'
const Home = () => {
    return (
        <>
            <div className=''>



                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imgs} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={imgss} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={imgsss} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

















                <div className="row my-5">
                    <h5 className='text-lead fs-1 my-3 font-monospace text-center'>Why is Healthcare So Important?</h5>
                    <div className="col-md-6 text-white">
                        <img className='img-fluid border border-2 rounded-end' src={img} alt="" />
                    </div>
                    <div className="shadow p-3 mb-5 bg-body rounded col-md-6 d-flex justify-content-center align-items-center">
                        <p className='text-lead text-center'>Healthcare is a part of life we all consider to be something we are entitled to – it is our right to have access to healthcare whenever we need it. However, for many people across the world, this is simply not an option. Those living in poverty or dealing with the devastating effects of war and conflict do not have access to healthcare – even the most basic medical supplies are out of reach for many vulnerable people</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h2 text-lead fs-1 my-3 font-monospace text-center>Syria Donations: Hospital Appeal</h2>
                    <div className="col-md-4">
                        <div className='shadow p-3 mb-5 bg-body rounded'>
                            <h5 className='text-lead fw-normal fw-light  text-start'>Our Syria hospital appeal allows us to support a large hospital in northern Syria. This clinic sees over 14,000 patients pass through its doors every single month, causing an incredible strain on resources. In addition to the lack of medical supplies and qualified medical personnel, saving lives in a war zone only complicates things further.</h5>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-body rounded">
                        <p className='text-lead font-monospace text-end'>Healthcare is a part of life we all consider to be something we are entitled to – it is our right to have access to healthcare whenever we need it.</p>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-body rounded">
                        <p className='text-lead font-monospace text-end'>Healthcare is a part of life we all consider to be something we are entitled to – it is our right to generous support, we can send much-needed aid to this hospital, supplying vital equipment, supplies, and staff to give hope to the people of Syria. Donations really can save lives have access to healthcare whenever we need it.</p>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Home;