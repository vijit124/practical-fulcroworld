/* eslint-disable jsx-a11y/no-redundant-roles */
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useParams } from 'react-router-dom';

const CreateDonor = () => {
  const params = useParams();

  const pages = [
    { name: 'Services', href: '/', current: false },
    { name: params?.name, href: '#', current: true },
  ];

  const arr = [0, 1, 2, 3, 4, 5];
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-indigo-600">
      <main className="w-full py-1 mx-auto min-h-[30rem] md:w-2/3 lg:w-3/4">
        <div className="pt-28">
          <div className="flex justify-between gap-x-4">
            <div>
              <nav aria-label="Breadcrumb" className="flex">
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div>
                      <a href="#?" className="text-white hover:text-gray-100">
                        <HomeIcon aria-hidden="true" className="flex-shrink-0 w-5 h-5" />
                        <span className="sr-only">Home</span>
                      </a>
                    </div>
                  </li>
                  {pages.map(page => (
                    <li key={page.name}>
                      <div className="flex items-center">
                        <ChevronRightIcon aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" />
                        <a
                          href={page.href}
                          aria-current={page.current ? 'page' : undefined}
                          className="ml-4 text-sm font-medium text-white hover:text-gray-100"
                        >
                          {page.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
              <h1 className="pt-16 text-white">{params?.name}</h1>
              <h4 className="pt-4 text-white">Embracing Change for Future Success</h4>
              <p className="max-w-xl pt-4 text-sm text-white">Explore how digital transformation can revolutionize your business landscape and propel you towards sustainable growth.</p>
            </div>
            <img src="https://fulcro-prod-website-assets.fulcroworld.com/assets/media/01_digital_transformation_4e282a2647.webp" alt="images" className="w-1/3" />
          </div>
        </div>
      </main>
      <div className="bg-gray-100 pt-28">
        <main className="w-full py-1 mx-auto min-h-[30rem] md:w-2/3 lg:w-3/4">
          <p className="text-lg font-semibold">WHAT WE DO</p>
          <h1 className="font-semibold text-indigo-800">Comprehensive Digital Transformation Solutions</h1>
          <p className="text-gray-500">Transform your business with our tailored digital services.
            We offer a suite of services designed to modernize your operations,
            enhance customer experiences, and drive growth. Our sub-services include:
          </p>
          <div className="grid grid-cols-1 gap-4 mb-20 lg:gap-8 lg:grid-cols-3">
            {arr.map(page => (
              <div className="p-6 bg-white shadow-xl rounded-xl lg:p-8" key={page}>
                <p className="text-[24px] md:text-[26px] font-[700] leading-[30px] inline-block text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">Cloud Integration</p>
                <p className="text-gray-500">Streamline your operations and increase scalability with our cloud solutions.</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateDonor;
