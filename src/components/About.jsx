import React from "react";

export const About = () => {
  return (
    <section class="bg-white -mt-24 pt-16 mb-24">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          class="w-full "
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard-img"
        />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 leading-normal">
            Conquer Interview Anxiety: Learn from Real Experiences, Not Just
            Textbooks
          </h2>
          <p class="mb-6 text-gray-500 md:text-lg">
            With MRP (MCA Records on Placement) get inside the minds of hiring
            managers. Juniors, find comfort and guidance in interview questions
            shared by seniors who've been in your shoes.
          </p>
          <a
            href="/"
            class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Get started
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
