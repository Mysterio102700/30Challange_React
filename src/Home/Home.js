import React from "react";
import ClockTHMB from '../Assets/Clock.png'
import { Link } from 'react-router-dom';

const Home = () => {
  const challenges = [
    {
      title: "Clock",
      description: "This is the home page of the application.",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
    {
      title: "Clock",
      description:
        "The Clock component adapts to various screen sizes while displaying the current time in an elegant analog format.",
      image: ClockTHMB,
      link: "/clock",
    },
    {
      title: "Todo List",
      description: "This is the home page of the application.",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
    {
      title: "Calculator",
      description: "This is the home page of the application.",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
    {
      title: "Todo List",
      description: "This is the home page of the application.",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-3 mt-10">
        <div className="row grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {challenges.map((challenge, index) => (
            <div key={index} className="col w-auto border border-gray-200/10 rounded">
              <img src={challenge.image} alt={challenge.title} />
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">{challenge.title}</h2>
                <p className="text-sm">{challenge.description}</p>
                <Link to={challenge.link} className="text-sm">
                  preview
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
