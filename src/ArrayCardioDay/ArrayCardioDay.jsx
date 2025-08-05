import React, { useState } from "react";

const ArrayCardioDay = () => {
  const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];

  return (
    <>
      <div className="container mx-auto flex gap-5 flex-wrap align-center justify-center">
        {inventors.map((inventor, index) => (
          <div key={index} className="border p-4 rounded shadow ">
            <h6 className="text-base">
              {inventor.first + " " + inventor.last}
            </h6>
            <p>
              Born: {inventor.year}, Died: {inventor.passed}
            </p>
            <p>Age at Death: {inventor.passed - inventor.year}</p>
          </div>
        ))}
      </div>
      <div className="container mx-auto py-5">
        <div className="row">
          <div className="col w-1/2 flex flex-col gap-5">
            <div className="border border-neutral-100 p-5 rounded">
              <h3 className="text-xl">
                Filter the list of inventors for those who were born in the
                1500's
              </h3>
              <table className="w-full table-auto border-collapse mt-5">
                <thead className="text-white font-[raleway] font-normal">
                  <tr>
                    <th className="w-1/4 border border-neutral-100 py-3">
                      First Name
                    </th>
                    <th className="w-1/4 border border-neutral-100 py-3">
                      Last Name
                    </th>
                    <th className="w-1/4 border border-neutral-100 py-3">
                      Born
                    </th>
                    <th className="w-1/4 border border-neutral-100 py-3">
                      Passed
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400 text-center">
                  {inventors
                    .filter(
                      (inventor) =>
                        inventor.year >= 1500 && inventor.year < 1600
                    )
                    .map((_, index) => (
                      <tr key={index}>
                        <td className="border border-neutral-100 py-3">
                          {_.first}
                        </td>
                        <td className="border border-neutral-100 py-3">
                          {_.last}
                        </td>
                        <td className="border border-neutral-100 py-3">
                          {_.year}
                        </td>
                        <td className="border border-neutral-100 py-3">
                          {_.passed}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="border border-neutral-100 p-5 rounded">
              <h3 className="text-xl">
                Give us an array of the inventor first and last names
              </h3>
              <div className="">
                {inventors.map((inventor, index) => (
                  <p>{inventor.first + inventor.last}, </p>
                ))}
              </div>
            </div>
          </div>
          <div className="col w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default ArrayCardioDay;
