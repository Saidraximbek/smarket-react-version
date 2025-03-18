import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FaStar } from "react-icons/fa";
const Products = ({ getProduct }) => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/product/" + id
  );
  console.log(data);

  return (
    <div className="grow-[1] container ml-auto mr-auto max-w-[1100px] pl-[40px] pr-[30px] bg-[rgb(62,62,62)] rounded-2xl pt-[50px]">
      {isPending && <h2>Loading...</h2>}
      <div>
        {data && (
          <div className="flex flex-col gap-[50px] justify-center items-center">
            <h1 className="text-4xl">{data.brand}</h1>
            <div className="flex gap-6 items-center w-[100%]">
              <img src={data.thumbnail} alt="" />
              <div className="flex flex-col gap-8">
                <div className=" flex items-center gap-[100px]">
                  <h2>{data.title}</h2>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <p>{data.rating}</p>
                  </div>
                </div>
                <p>{data.description}</p>
                <div className="text-xl flex items-center gap-3">
                    <del className="text-red-600">${data.price}</del>
                    <p>=</p>
                    <p className="text-green-600">${(data.price-(data.price/100*data.discountPercentage)).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
