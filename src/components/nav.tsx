'use client'
import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false); // State to toggle dropdown

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
    };

    return (
        <nav className='navbar w-[100%] flex justify-between items-center shadow-[0_3px_25px_grey]'>
            <div className="logo ml-10">
            <h1><Link href='/' className='logo-text text-[2.5vw] p-2 ' >wicks & whimsy</Link></h1>
            </div>
            <div className="nav-links ">
                <ul className='flex justify-center items-center gap-10 text-[1.6vw] capitalize p-3 '>
                    <li><Link className='link' href='/about'>about</Link></li>
                    <li onClick={toggleDropdown} style={{ cursor: 'pointer' }}> <Link className='link' href=''>products</Link>
                        {isDropdownVisible && (
                            <div className="dropdown">
                                <ul>
                                    <li><Link className='link' href=''>handmade candles</Link></li>
                                    <li><Link className='link' href=''>soy & bees wax candles</Link></li>
                                    <li><Link className='link' href=''>seasonal candles</Link></li>
                                    <li><Link className='link' href=''>aromatherapy candles</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li><Link className='link' href='/blogs'>blogs</Link></li>
                    <li><Link className='link' href='/jobs'>sell you candles</Link></li>
                    <li><Link className='link' href='/contact'>contact</Link></li>
                    <li><Link className='link' href=''>FAQs</Link></li>
                </ul>
            </div>
            <div className="nav-btns mr-10 capitalize">
                <button className='btn text-[1.3vw] capitalize border-solid border-[1px] border-black rounded-2xl p-2 m-4 '>
                    <span><i className="bi bi-cart"></i> cart</span>
                </button>
                <button className='btn text-[1.3vw] capitalize border-solid border-[1px] border-black rounded-2xl m-4 p-2'>
                    <span><i className="bi bi-person-fill"></i>  sign up</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;