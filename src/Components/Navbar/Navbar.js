import React from 'react';

const Navbar = ({ filterItem, menuList }) => {
    return (
        <div>
            <div className='text-center mt-5 mb-2 '>
                {
                    menuList.map((curElem) => {
                        return <button onClick={() => filterItem(curElem)} className='ms-5 btn btn-outline-dark bt-sm'>{curElem}</button>
                    })
                }
            </div>
        </div>
    );
};

export default Navbar;