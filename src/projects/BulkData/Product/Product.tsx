import { useState, useEffect } from "react";

type DataType = {
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
};
export const Product = () => {
  const [data, setdata] = useState<DataType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const callApi = await fetch("https://dummyjson.com/products");
      const data = await callApi.json();
      setdata(data.products);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className=" text-center text-6xl font-serif font-semibold mt-28">
        Bulk Products
      </h1>
      <section className=" w-[90%] mx-auto my-20 flex flex-wrap justify-center items-baseline">
        {data.map((value) => {
          return (
            <div className="  w-[320px] rounded-lg m-5 overflow-hidden cursor-pointer group">
              <img
                src={value.images[0]}
                alt={value.title}
                className=" w-full h-[200px] object-cover border border-gray-200 rounded-lg group-hover:scale-125 duration-700"
              />
              <div className=" flex justify-between items-center px-2 my-3">
                <p className=" text-xl w-[80%] font-semibold whitespace-nowrap overflow-hidden">
                  {value.title}
                </p>
                <p className=" text-lg font-bold ml-3">${value.price}</p>
              </div>
              <p className=" text-sm px-2 break-all h-[45px] overflow-hidden ">
                {value.description}
              </p>
              <button className=" w-full mx-2 mt-4 py-2 rounded-[5px] font-semibold uppercase bg-blue-400 text-white hover:bg-blue-600 duration-500">
                Add Cart
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};
