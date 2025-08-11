import React, { useEffect, useState } from "react";

const AjaxTypeAhead = () => {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const [term, setTerm] = useState("");
  const [Cities, setCities] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((blog) => blog.json())
      .then((data) => setCities(data));
  }, []);

  useEffect(() => {
    const regex = new RegExp(term, "gi");
    const filter = Cities.filter(
      (city) => city.city.match(regex) || city.state.match(regex)
    );
    setFiltered(filter);
  }, [Cities, term]);

  return (
    <>
      <div className="container w-full mx-auto">
        <div className="row mx-auto">
          <div className="col py-20 flex flex-col items-center gap-5">
            <h1 className="text-3xl">AjaxTypeAhead</h1>

            <input
              className="text-white bg-white/10 py-2.5 px-3 w-1/2 mx-auto"
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search the Name or City"
            />
          </div>
        </div>
        <div className="row grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((filter, index) => (
            <div
              key={index}
              className="col w-auto border border-gray-200/20 rounded p-3 shine"
            >
              {" "}
              <p>
                <b>City :</b> {filter.city}
              </p>
              <p>
                <b>State :</b> {filter.state}
              </p>
              <p>
                <b>population :</b> {filter.population}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AjaxTypeAhead;
