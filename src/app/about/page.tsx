import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <main >
            <div className='w-[90%] m-auto flex justify-between items-center'>
                <section className=' flex justify-start items-center p-[4%] w-[50%] '>
                    <Image src='/images/aboutimg.jpg' width={450} height={450} alt='' className=' border-solid border-[black] border-[10px]'></Image>
                </section>
                <section className='w-[50%] text-[1.1vw]  p-1'>
                    <h2 className='text-[3vw] capitalize text-center font-bold'>about us</h2>
                    <p>&quot;At wicks & whimsy, we believe that a candle is more than just a source of light; it&apos;s a
                        gateway to creating an atmosphere and evoking emotions. Founded in 2022, our passion for crafting
                        high-quality, artisanal candles has driven us to source the finest natural ingredients, ensuring
                        that each candle is not only beautiful but also safe for you and the environment.</p>
                    <br />
                    <p>Our candles are handcrafted in small batches, allowing us to maintain a level of quality that sets
                        us apart. We offer a diverse range of fragrances, from soothing florals to invigorating spices,
                        each designed to transform your space into a sanctuary of comfort and relaxation. </p>
                    <br />
                    <p> Our mission is to inspire moments of tranquility and joy in your daily life. Whether you&apos;re
                        unwinding after a long day, setting the mood for a special occasion, or searching for the perfect
                        gift, our candles are created to enhance every experience. Join us on this fragrant journey, and
                        discover the artistry and love that goes into every wax pour. Thank you for supporting our small
                        business and allowing us to be a part of your home&#33;&quot;</p>
                </section>

            </div>
        </main>
    )
}

export default About