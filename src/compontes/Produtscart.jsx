import React from "react";
import { Link } from "react-router-dom";

export const Produtscart = ({ thumbnail, id, title, price, description }) => {
  return (
    <div>
      <Link to={"/products/" + id}>
        <div className="mx-auto   w-full max-w-7xl items-center space-y-4 px-2 py-10 ">
          <div key={id} className="rounded-md border  box-content">
            <img
              src={thumbnail}
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {title}
              </h1>
              <p className="mt-3 text-sm text-gray-600">{description}</p>

              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  $ {price}
                </div>
                <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                  ${price + 10}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
