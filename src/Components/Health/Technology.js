import React from 'react';
import img from '../imagess/download (2).jpg'
import img2 from '../imagess/download (1).jpg'

const Technology = () => {
    return (
        <>
        <div className=''>
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
    <div className=''>
            <div className="row my-5">
                <h5 className='text-lead fs-1 my-3 font-monospace text-center'>Why is Healthcare So Important?</h5>
                <div className="col-md-6 text-white">
                    <img className='img-fluid border border-2 rounded-end' src={img2} alt="" />
                </div>
                <div className="shadow p-3 mb-5 bg-body rounded col-md-6 d-flex justify-content-center align-items-center">
                    <p className='text-lead text-center'>Healthcare is a part of life we all consider to be something we are entitled to – it is our right to have access to healthcare whenever we need it. However, for many people across the world, this is simply not an option. Those living in poverty or dealing with the devastating effects of war and conflict do not have access to healthcare – even the most basic medical supplies are out of reach for many vulnerable people</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default Technology;