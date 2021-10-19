import React from 'react';
import {
  Link
  } from "react-router-dom";
  
const MenuCart = ({ menudata }) => {
    
    return (
        <>
            <div className='container mt-5 '>
                <div className="row ">
                    {menudata.map((curElem) => {
                        const {id,img,desc}=curElem
                        return (
                            <>
                         

                            
                                <div className="col col-sm-6 col-md-6 col-lg-4">
                                    <div className="card m-2 border border-3" style={{ width: '18rem' }}>
                                        <img src={img}className="card-img-top  img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{id}</h5>
                                            <p className="card-text">{desc}</p>
                                            <Link
                                            to={`/details/${id}`}
                                            > <button className='btn btn-outline-dark'>Detaels</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                             
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default MenuCart;