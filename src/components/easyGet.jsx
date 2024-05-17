import serviceAgent from "../assets/service-agent.png";
import accept from "../assets/accept.png";
import trip from "../assets/trip.png";
import Image from "next/image";

export default function EasyGet() {


  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-extrabold">
        Quick & easy car rental
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 mt-24">
        <div className="flex flex-col leading-9  w-[30%] justify-center items-center">
          <Image src={accept} />
          <h1 className="text-2xl font-bold">Select Car</h1>
          <p className="text-center w-[65%] my-3 leading-5 text-neutral-600">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="flex flex-col leading-9  w-[30%] justify-center items-center">
          <Image src={serviceAgent} />
          <h1 className="text-2xl font-bold">Contact Operator</h1>
          <p className="text-center w-[65%] my-3 leading-5 text-neutral-600">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col leading-9  w-[30%] justify-center items-center">
          <Image src={trip} />
          <h1 className="text-2xl font-bold">Let's Drive</h1>
          <p className="text-center w-[65%] my-3 leading-5 text-neutral-600">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
}
