import React from 'react'
import announcement from './../../assets/Announcement.png';
import cityStudy from './../../assets/City-Study.png';
import companyLife from './../../assets/Company-Life.png';
import Header from '../Layouts/Header';

const Blog = () => {
  return (
    <section className="bg-bgColor">
  <Header />
  <div className="container mx-auto px-4 py-8 md:py-16 lg:py-40">
    {/* Header Section */}
    <div className="flex flex-col items-center mb-8 md:mb-16 space-y-6">
      {/* Title and Description */}
      <div className="w-full sm:w-10/12 md:w-full lg:w-9/12 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-headerFont">BLOG</h1>
        <p className="text-sm md:text-xl lg:text-2xl font-medium mt-4 font-bodyFont">
          Explore insightful articles, tips, and industry-leading financial news. Take a deep dive into what we do best- Expense Management, financial processes, spend optimization, and much more
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
        {['Announcement', 'City Study', 'Company Life', 'Engineering', 'Product Info', 'Offers'].map((category) => (
          <button
            key={category}
            className="bg-indigo-900 px-4 md:px-4 lg:px-6 py-2 md:py-3 text-xs md:text-base lg:text-lg font-bodyFont rounded-xl text-white"
          >
            {category}
          </button>
        ))}
      </div>
    </div>

    {/* Blog Posts */}
    <div className="space-y-12 md:space-y-24 lg:space-y-28">
      {[
        { title: 'Announcement', image: announcement, reverse: true },
        { title: 'City Study', image: cityStudy, reverse: false },
        { title: 'Company Life', image: companyLife, reverse: true },
        { title: 'Engineering', image: announcement, reverse: false },
        { title: 'Product Info', image: cityStudy, reverse: true },
        { title: 'Offers', image: companyLife, reverse: false }
      ].map((post, index) => (
        <div
          key={post.title}
          className={`flex flex-col items-center gap-12 md:gap-16 lg:gap-24 text-white
            ${post.reverse 
              ? 'sm:flex-col-reverse md:flex-row' 
              : 'sm:flex-col md:flex-row'}
            justify-center`}
        >
          {!post.reverse && (
            <div>
              <img 
                src={post.image} 
                alt={post.title}
                className="h-48 md:h-60 lg:h-72 w-auto object-cover" 
              />
            </div>
          )}
          
          <div className="flex flex-col w-full sm:w-9/12 md:w-8/12 lg:w-5/12 space-y-4 md:space-y-4 lg:space-y-6">
            <h2 className="font-headerFont text-xl md:text-3xl lg:text-4xl font-bold">
              {post.title}
            </h2>
            <p className="font-bodyFont text-base md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius nihil natus iusto error magnam iste maiores minus ullam, voluptatem expedita! Autem eligendi perspiciatis quasi, porro officia aspernatur similique laboriosam, magni odit, aliquid quidem animi tempora nam dignissimos totam. Ipsum id veniam dolor similique commodi facilis accusantium ex non sequi!
            </p>
          </div>
          
          {post.reverse && (
            <div>
              <img 
                src={post.image} 
                alt={post.title}
                className="h-48 md:h-60 lg:h-72 w-auto object-cover" 
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Blog