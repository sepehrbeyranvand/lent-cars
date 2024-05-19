export default function Footer() {
  return (
    <footer className="flex p-16">
      <div className=" basis-1/4">
        <h1 className="text-3xl font-extrabold p-3">Car Rental</h1>
        <p className=" text-neutral-500 leading-7 p-3">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="flex justify-start items-center">
          <i className="fa fa-phone text-2xl p-3"></i>
          <p className=" text-neutral-800 font-semibold">999-999-999</p>
        </div>
        <div className="flex justify-start items-center">
          <i className="fa fa-envelope-o p-3"></i>
          <p className=" text-neutral-800 font-semibold">
            sepehr7797@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center basis-1/4">
        <h1 className="text-3xl font-extrabold p-3">Company</h1>
        <ul className=" leading-[3rem]">
          <li className="text-neutral-700 text-lg hover:text-teal-500 transition .4s ease-in-out duration-200 cursor-pointer">
            Iran
          </li>
          <li className="text-neutral-700 text-lg hover:text-teal-500 transition .4s ease-in-out duration-200 cursor-pointer">
            United state
          </li>
          <li className="text-neutral-700 text-lg hover:text-teal-500 transition .4s ease-in-out duration-200 cursor-pointer">
            England
          </li>
          <li className="text-neutral-700 text-lg hover:text-teal-500 transition .4s ease-in-out duration-200 cursor-pointer">
            Spain
          </li>
        </ul>
      </div>
      <div className="flex items-center flex-col leading-8 basis-1/4">
        <h1 className="text-3xl font-extrabold p-3">WORKING HOURS</h1>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className=" basis-1/4">
        <h1 className="text-3xl font-extrabold p-3">SUBSCRIPTION</h1>
        <p>Subscribe your Email address for latest news & updates.</p>
        <div className="flex flex-col">
          <input
            className="bg-neutral-200 border p-[.86rem] w-[84%] border-neutral-100 mt-4 outline-none"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <button className="bg-teal-500 text-white p-[.86rem] w-[84%] shadow-md shadow-teal-300 mt-4 hover:bg-teal-600 transition-all .4s ease-in-out duration-250">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
}
