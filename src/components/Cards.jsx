import React from "react";

const Cards = ({ item }) => {
  console.log(item);

  return (
    <div className="mt-4 mb-4 p-3">
      <div className="card bg-base-100 w-auto md:w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">
            {item.name}
            <div className="badge badge-secondary">{item.categories}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline">$ {item.price}</div>
            <div className="px-[30px] py-[15px] cursor-pointer border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200 ">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
