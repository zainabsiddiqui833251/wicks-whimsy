'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Blog {
    id: number;
    title: string;
    image: string;
    description: string;
    author: string;
    url: string;
}

const Blogs = () => {
    const [blogData, setBlogData] = useState<Blog[]>([]); // Specify the type here

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs-data'); // Ensure this path is correct
            const data = await response.json();
            setBlogData(data);
        };

        fetchBlogs();
    }, []);

    return (
        <main className='w-[100%]'>
            <section className='w-[90%] m-auto p-[3%]'>
                <h2 className='text-[3vw] text-center capitalize'>the best blogs</h2>
                <div className="card-container p-4 flex justify-center items-center gap-16 mt-6">
                    {blogData.map(blog => (
                        <div key={blog.id} className="card transition-transform duration-300 ease-in-out transform hover:scale-105 w-[40%] flex-wrap bg-[#f9f7e3] capitalize border-solid border-[1px] border-black p-4">
                            <Image
                                src={blog.image}
                                width={500}
                                height={500}
                                alt={blog.title}
                            />
                            <div className="description mt-4">
                                <h3 className='text-[1.5vw] font-semibold'>
                                    <Link href={blog.url}>
                                        {blog.title}
                                    </Link>
                                </h3>
                                
                                <br />
                                <p className='text-[1.1vw]'>{blog.description}</p>
                                <br />
                                <h5 className='text-[1.7vw] font-bold'>{blog.author}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Blogs;

