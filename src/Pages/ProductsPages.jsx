import React, { useEffect, useState } from "react";
import { getprodutsapi, getprodutsbyCate } from "../Api/api";
import { Produtscart } from "../compontes/Produtscart";
import Loading from "../LoadingCom/Loading";

export const ProductsPages = () => {
  const [produts, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [cate, setCate] = useState("");
  const [sort, setsort] = useState("");

  console.log(sort);

  useEffect(() => {
    (async () => {
      try {
        const results = await getprodutsapi();
        setproducts(results);
        setloading(false);
        // console.log(results)
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    if (cate == "") {
    } else {
      (async () => {
        try {
          const results = await getprodutsbyCate(cate);
          setproducts(results?.products);
          setloading(false);
          console.log(results);
        } catch (error) {}
      })();
    }
  }, [cate]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (sort === "hightolow") {
      const data = produts.sort(function (x, y) {
        return x.price - y.price;
      });
      setproducts(data);
    } else if (sort === "lowtohigh") {
      const data = produts.sort(function (x, y) {
        return y.price - x.price;
      });
      setproducts(data);
    }
  }, [sort]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <>
        <div className="flex justify-end items-center p-10  space-x-5">
          <div>
            <select
              className="border border-sky-200 outline-none "
              name=""
              id=""
              onChange={(e) => {
                setsort(e.target.value);
              }}
            >
              <option>Sort by Price </option>
              <option value="lowtohigh"> low to high </option>
              <option value="hightolow">high to low</option>
            </select>
          </div>

          <select
            className="border border-sky-200 outline-none "
            name=""
            id=""
            onChange={(e) => {
              setCate(e.target.value);
            }}
          >
            <option value="category">Category</option>
            <option value="laptops">laptops</option>
            <option value="home-decoration">home-decoration</option>

            <option value="smartphones">smartphones</option>

            <option value="fragrances">fragrances</option>
          </select>
        </div>
      </>
      <div className="grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {produts.map((item) => {
          return (
            <div key={item.id}>
              <Produtscart {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
