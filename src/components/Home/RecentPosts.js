import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import React from 'react';
import BlogLayoutThree from '../Blog/BlogLayoutThree';
import { BsFillEyeFill } from 'react-icons/bs';
import '../Header/custom.css'

const RecentPosts = ({ blogs }) => {

    const sortedBlogs = sortBlogs(blogs);

    return (
        <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center'>
            <div className='flex w-full justify-between'>
                <h2 className='w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light'>
                    Recent Posts
                </h2>
                <Link href="/categories/all">
                    <div className='view-all-button dark:bg-light dark:text-dark'>
                        <div className='icon-view-all'><BsFillEyeFill className='icon-view-all-eye' /></div>
                        <span className='span-view-all dark:font-semibold'>View All</span>
                    </div>
                </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16'>
                {
                    sortedBlogs.slice(4, 10).map((blog, index) => {
                        return <article key={index} className='col-span-1 row-span-1 relative'>
                            <BlogLayoutThree blog={blog} />
                        </article>
                    })
                }
            </div>
        </section>
    );
};

export default RecentPosts;