"use client";

import { useEffect, useState } from "react";
// import firstID from '../assets/firstID.jpg'
// import secondID from '../assets/secondID.jpg'
// import thirdID from '../assets/thirdID.jpg'
// import fourthID from '../assets/fourthID.jpg'
import Image from "next/image";
export default function ChooseCar() {
  const [url, setUrl] = useState("http://localhost:3000/trips?id=1");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setCars(json));
  }, [url]);

  return (
    <div className="p-1 mt-32">
      <h1 className="text-center text-4xl font-extrabold mb-5">Our rental fleet</h1>
      <div className="flex justify-around items-center">
        <div className="basis-1/4">
          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=1")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-4 w-[70%]"
            >
              Benz C1
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=2")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-5 w-[70%]"
            >
              Toyota Alpine
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=3")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-5 w-[70%]"
            >
              Chrysler Wrangler
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=4")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-5 w-[70%]"
            >
              Jaguar XC90
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?id=5")}
              className=" bg-[#2d7e74] hover:bg-[#155048] transition .4s ease-in-out duration-200 text-white p-5 w-[70%]"
            >
              Chevrolet CTS
            </button>
          </div>
        </div>
        <div className="basis-1/3">
          {cars.length > 0 ? (
            cars.map((e, index) => (
              <div key={index} className="p-2">
                <Image width={600} height={600} src={e.src} />
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="basis-1/3">
          <div className="flex justify-center items-center">
            {cars.map((e) => (
              <div key={e.id}>
                <div className="bg-teal-600 p-[.38rem]">
                  <h1 className="text-white text-3xl font-bold">{e.price}<span className="font-light">  /rent per day</span></h1>
                </div>
                <table className="border border-1 border-teal-700 w-full">
                  <tr>
                    <td className="font-semibold">Model</td>
                    <td>{e.Model}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Mark</td>
                    <td>{e.Mark}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Year</td>
                    <td>{e.Year}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Doors</td>
                    <td>{e.Doors}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">AC</td>
                    <td>{e.AC}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Transmission</td>
                    <td>{e.Transmission}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Fuel</td>
                    <td>{e.Fuel}</td>
                  </tr>
                </table>
                <div>
                  <button className="w-full  bg-teal-800 hover:shaodw-xl shadow-teal-400 hover:bg-teal-600 transition .4s ease-in-out duration-200 text-white p-4 rounded-sm mt-4">Reserve NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
