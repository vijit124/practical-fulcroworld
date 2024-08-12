import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, HeroSection } from '../../components/common';

const Dashboard = () => {
  const cards = [
    {
      link: '/request-query',
      button: 'Request query',
      imageUrl: 'images/query-request.jpeg',
    },
    {
      link: '/donor-registration',
      button: 'Register As User',
      imageUrl: 'images/register-as-donor.jpeg',
    },
    {
      button: `Total Users: ${0} `,
      imageUrl: 'images/total-query-donations.jpeg',
    },
    {
      link: '/',
      button: 'Happy Stories',
      imageUrl: 'images/happy-stories.jpeg',
    },
  ];

  return (
    <>
      <HeroSection />
      <div className="py-12 lg:h-[30rem]">
        <Carousel images={[
          'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg',
          'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg',
          'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg',
        ]}
        />
      </div>
      <div className="bg-ivory-400">
        <ul className="grid w-11/12 grid-cols-1 gap-6 py-12 mx-auto md:w-5/6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map(card => (
            <li
              key={card.button}
              className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
            >
              <div className="flex flex-col flex-1 p-8">
                <img className="w-32 h-32 mx-auto border border-red-500 rounded-full" src={card.imageUrl} alt="" />
              </div>
              <div>
                <div className="flex -mt-px divide-x divide-gray-200">
                  {card.link
                    ? (
                      <Link
                        to={card.link}
                        className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold text-white bg-red-500 border border-transparent rounded-br-lg gap-x-3 hover:bg-red-600"
                      >
                        {card.button}
                      </Link>
                    )
                    : <span className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold text-white bg-red-500 border border-transparent rounded-br-lg gap-x-3 hover:bg-red-600">{card.button}</span>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
