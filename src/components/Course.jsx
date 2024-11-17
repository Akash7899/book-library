import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Lorem ipsum dolor sit
            <span className="text-pink-500"> adipisicing elit:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            incidunt vel, officia officiis reprehenderit dolores animi omnis rem
            temporibus quas iste doloribus harum ratione a repellendus.officia
            officiis reprehenderit dolores animi omnis rem temporibus quas iste
            doloribus harum ratione a repellendus
          </p>
          <Link to="/">
            <button className="mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
