import React, { useState } from 'react';
import menu from '../../data'
import MenuCart from '../MenuCart/MenuCart';
import Navbar from '../Navbar/Navbar';

const uniqueList = [
    ...new Set(
        menu.map((curElem) => {
            return curElem.category
        })
    ),
        'All'
]
const Resturent = () => {
    const [menudata, setMenudDta] = useState(menu)
    const [menuList,setMenuList]=useState(uniqueList)
    const filterItem = (category) => {
        if(category==='All'){
            setMenudDta(menu)
            return;
        }
        const updateList = menu.filter((curElem) => {
            return curElem.category === category
        })
        setMenudDta(updateList)
    }
    return (
        <div>
           <Navbar
           filterItem={filterItem}
           menuList={menuList}
           ></Navbar>
            <MenuCart
                menudata={menudata}
            ></MenuCart>
        </div>
    );
};

export default Resturent;