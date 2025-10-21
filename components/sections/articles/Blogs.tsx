import React from 'react'
import Link from 'next/link'

export default function BlogSection() {
  // const blogs = [
  //   {
  //     title: 'Announcing a free plan for small teams',
  //     description: 'At Wake, our mission has always been focused on bringing openness.',
  //     image: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80',
  //     author: 'Lauren Waller',
  //     avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  //     link: '#',
  //   },
  //   {
  //     title: 'How Google Assistant now helps you record stories for kids',
  //     description: 'Google is constantly updating its consumer AI, Google Assistant, with new features.',
  //     image: 'https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80',
  //     author: 'Aaron Larsson',
  //     avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  //     link: '#',
  //   },
  //   {
  //     title: "Front accounts - let's work together",
  //     description: 'Are you an accountant? Are you a company formation advisor?',
  //     image: 'https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80',
  //     author: 'Lauren Waller',
  //     avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  //     link: '#',
  //   },
  // ]

  return (
   <>
    <div className="bg-gray-900">
       <section className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center  mb-10 lg:mb-14">
<h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-100 mb-20">
          My Services & Expertise
        </h1>       
      </div>

      {/* Grid */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.link}
            className="group flex flex-col h-full bg-gray-950  hover:border-transparent hover:shadow-lg transition duration-300 rounded-none p-5  dark:hover:shadow-black/40"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img className="w-full object-cover rounded-xl" src={blog.image} alt={blog.title} />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-950 dark:text-neutral-300 dark:group-hover:text-white">
                {blog.title}
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">{blog.description}</p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img className="w-8 h-8 rounded-full" src={blog.avatar} alt={blog.author} />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-neutral-200">{blog.author}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div> */}

      {/* Read More Button */}
      <div className="mt-12 text-center">
        <Link
          href="#"
          className="inline-flex items-center gap-x-1 text-sm font-medium rounded-full   bg-gray-800 text-gray-50 shadow-2xs hover:bg-gray-50 py-3 px-4 transition dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800"
        >
          Read more
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </section>
    </div>
   
   </>
  )
}
