
import React, { useState } from 'react';
import menu from '../../data'
import { useParams } from 'react-router-dom'
const Details = () => {
    const { detailsId } = useParams()
    const [menus, setMenu] = useState(menu)
    const finding = menus.find(p => +detailsId === p.id)
    return (
        <div>
            <>
                <div className='container mt-5 '>
                    <div className="row">
                        
                        <>
                            <div className="col-md-4">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={finding.img} className="card-img-top  img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{finding.id}</h5>
                                        <p>{detailsId}</p>
                                        <p className="card-text">{finding.desc}</p>

                                    </div>
                                </div>
                            </div>
                        </>
                        

                    </div>
                </div>
            </>
        </div>
    );
};

export default Details;

