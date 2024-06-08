import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mens from '../catogries/mens assests/mens';
import Ladies from './ladies assests/ladies';
import Furniture from './furniture assests/furniture';
import Electronics from './electronics assests/electronics';
import Accessories from './accessories assests/accessories';
function Menus() {
    const [showContent, setShowContent] = useState(false);
    const [showAddToCart, setShowAddToCart] = useState(false);

    return (
        <div>
            <div className="menu-MLFEA hidden md:flex md:justify-around font-bold">
                <h1 className="px-2 py-2 cursor-pointer">
                    <Link to={'/Mens'} element={<Mens></Mens>}>Mens Dress</Link>
                </h1>
                <h1 className="px-2 py-2 cursor-pointer">
                    <Link to={'/Ladies'} element={<Ladies></Ladies>}>Ladies Dress</Link>
                </h1>
                <h1 className="px-2 py-2 cursor-pointer">
                    <Link to={'/Furniture'} element={<Furniture></Furniture>}>Furnitures</Link>

                </h1>
                <h1 className="px-2 py-2 cursor-pointer">
                <Link to={'/Electronics'} element={<Electronics></Electronics>}>Electronics</Link>

                </h1>
                <h1 className="px-2 py-2 cursor-pointer">
                <Link to={'/Accessories'} element={<Accessories></Accessories>}>Accessories</Link>

                </h1>
            </div>

            <div className="md:hidden text-center menu-MLFEA relative">
                <div
                    onMouseEnter={() => setShowContent(true)}
                    onMouseLeave={() => setShowContent(false)}
                >
                    <h1 className="p-3 font-bold">
                        <a className=" cursor-pointer">
                            shopping Now
                        </a>
                    </h1>
                    {showContent && (
                        <div className='flex justify-center'>
                            <div className="absolute shopingcollection bg-white px-2 py-2 cursor-pointer" style={{ zIndex: 1000 }}>
                                <h1 className="px-2 py-2 cursor-pointer hover:text-red-500">
                                    <Link to={'/Mens'} element={<Mens></Mens>}>Mens Dress</Link>
                                </h1>
                                <h1 className="px-2 py-2 cursor-pointer hover:text-red-500">
                                    <Link to={'/Ladies'} element={<Ladies></Ladies>}>Ladies Dress</Link>
                                </h1>
                                <h1 className="px-2 py-2 cursor-pointer hover:text-red-500">
                                <Link to={'/Furniture'} element={<Furniture></Furniture>}>Furnitures</Link>

                                </h1>
                                <h1 className="px-2 py-2 cursor-pointer hover:text-red-500 ">
                                <Link to={'/Electronics'} element={<Electronics></Electronics>}>Electronics</Link>

                                </h1>
                                <h1 className="px-2 py-2 cursor-pointer hover:text-red-500">
                                <Link to={'/Accessories'} element={<Accessories></Accessories>}>Accessories</Link>

                                </h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menus;
