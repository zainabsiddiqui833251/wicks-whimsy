import React from 'react'
import Link from 'next/link'

const Header = () => {

    return (
        <header >
            <div className="header-text w-fit p-[6%] ">
                <h1 className='text-[2.5vw] uppercase m-2'>Welcome to</h1>
                <p id='typing text' className='text-[3.9vw] capitalize'>Wicks & Whimsy</p>

                <h3 className='text-[1.7vw] m-2 capitalize'>ignite your senses ,light your home</h3>
                <p className='text-[1.2vw] m-2'>&quot;Illuminate your space with our exquisite collection of handcrafted candles. Each scent is <br /> thoughtfully
                    curated to evoke memories, create ambiance, and bring warmth to your <br /> home. Whether you&apos;re looking for
                    a relaxing lavender, a refreshing citrus, or a festive <br /> seasonal blend, we have the perfect candle to
                    elevate your moments. Discover the art of <br /> fragrance today&#33;&quot;</p>
                <button className='btn text-[1.5vw] capitalize border-solid border-[1px] border-black rounded-2xl mt-4 ml-2 p-2 '><Link href=''><span>discover your favourite scents with us</span></Link></button>
            </div>
        </header>
    )
}

export default Header