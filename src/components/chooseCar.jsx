"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
export default function ChooseCar() {
  const [url, setUrl] = useState("http://localhost:3000/trips/1");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setCars(json));
  }, [url]);

  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold">Our rental fleet</h1>
      <div className="flex">
        <div className="basis-1/3">
          <div className="flex flex-col gap-y-3 ms-14">
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=1")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-4 w-[70%]"
            >
              1
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=2")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-4 w-[70%]"
            >
              2
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=3")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-4 w-[70%]"
            >
              3
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=4")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-4 w-[70%]"
            >
              4
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=5")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-4 w-[70%]"
            >
              5
            </button>
          </div>
        </div>
        <div className="basis-1/3">
          {cars.map((e, index) => (
            <Image width={600} height={600} src={e.src}/> 
          ))}
        </div>
        <div className="basis-1/3"></div>
      </div>
    </div>
  );
}
