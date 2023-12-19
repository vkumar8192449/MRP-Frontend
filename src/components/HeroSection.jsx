import React from "react";
// import "../components-style/HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <div className="max-w-4xl -mt-56">
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            MRP is now available in submission mode only!
          </p>
        </div>
        <h1 className='text-7xl font-bold'>
          Share your{' '}
          <span className='text-blue-600'>Interview</span>{' '}
          Experiences.
        </h1>
        <p className='mt-5 text-xl text-gray-700'>
          Triumph over your interview by reading the experiences of others.
        </p>
      </div>
    </div>
  );
};
