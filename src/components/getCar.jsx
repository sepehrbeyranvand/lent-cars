export default function GetCar() {
  return (
    <div className="flex justify-center items-center">
      <div className=" p-20 w-[90%] shadow-2xl mb-[5rem] bg-white">
        <form className="flex flex-wrap w-full justify-center items-center gap-x-3 gap-y-8">
          <div className="flex flex-col w-[30%]">
            <label className=" py-3">
              <i className="fa fa-car text-xl me-2"></i>Select Your Car Types
              <span className="text-red-500">*</span>
            </label>
           <select className="border border-1 border-[#ccd7e6] outline-none p-3 placeholder:text-[#ababab]" name="" id="">
              <option value=""></option>
              <option value="Tehran">Mercedes Benz Charger</option>
              <option value="Isfahan">Fiat Volt</option>
              <option value="Mashhad">Ferrari Golf</option>
              <option value="Karaj">Jaguar Challenger</option>
              <option value="Yazd">Kia Element</option>
            </select>
          </div>
          <div className="flex flex-col w-[30%]">
            <label className=" py-3">
              <i className="fa fa-map-marker text-xl me-2"></i>Pick-up
              <span className="text-red-500">*</span>
            </label>
            <select
             className="border border-1 border-[#ccd7e6] outline-none p-3 placeholder:text-[#ababab]"
              name=""
              id=""
            >
              <option value=""></option>

              <option value="Tehran">Tehran</option>
              <option value="Isfahan">Isfahan</option>
              <option value="Mashhad">Mashhad</option>
              <option value="Karaj">Karaj</option>
              <option value="Yazd">Yazd</option>
            </select>
          </div>
          <div className="flex flex-col w-[30%]">
            <label className=" py-3">
              <i className="fa fa-map-marker text-xl me-2"></i>Drop-off{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
             className="border border-1  border-[#ccd7e6] outline-none p-3 placeholder:text-[#ababab]"
              name=""
              id=""
            >
              <option value=""></option>

              <option value="Tehran">Tehran</option>
              <option value="Isfahan">Isfahan</option>
              <option value="Mashhad">Mashhad</option>
              <option value="Karaj">Karaj</option>
              <option value="Yazd">Yazd</option>
            </select>
          </div>
          <div className="flex flex-col w-[30%]">
            <label className=" py-3">
              <i className="fa fa-calendar-check-o me-2 text-xl"></i>Pick-up{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              className=" text-sm text-neutral-600 border border-1 border-[#ccd7e6] outline-none p-3 placeholder:text-[#ababab]"
            />
          </div>
          <div className="flex flex-col w-[30%]">
            <label className=" py-3">
              <i className="fa fa-calendar-times-o me-2 text-xl"></i>Drop-off{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              className=" text-sm text-neutral-600 border border-1 border-[#ccd7e6] outline-none p-3 placeholder:text-[#ababab]"
            />
          </div>
          <div className="mt-[2.8rem] w-[30%]">
            <button className="text-white shadow-xl shadow-teal-200 bg-teal-500 w-full p-3 hover:shadow-2xl hover:bg-teal-600 transition .4s ease-in-out duration-200">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
