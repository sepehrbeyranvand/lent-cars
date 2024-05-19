import Image from "next/image";
import Link from "next/link";
import carLogo from '../assets/carLogo.png'


export default function Navbar(){
    return(
        <div className="flex justify-between items-center p-3 shadow-md">
            <div className="flex items-center ms-10">
                <Image src={carLogo}/>
                <div className="flex flex-col p-2">
                    <h2 className=" font-extrabold text-2xl">Car</h2>
                    <p className="font-light">Rental</p>
                </div>
            </div>
            <div className="flex gap-x-10">
                <Link className="font-semibold text-[1.01em] hover:text-teal-500 transition .4s ease-in-out duration-300" href='/vehicles'>Vehicles</Link>
                <Link className="font-semibold text-[1.01em] hover:text-teal-500 transition .4s ease-in-out duration-300" href='/about'>About</Link>
                <Link className="font-semibold text-[1.01em] hover:text-teal-500 transition .4s ease-in-out duration-300" href='/team'>Our Team</Link>
                <Link className="font-semibold text-[1.01em] hover:text-teal-500 transition .4s ease-in-out duration-300" href='/contact'>Contact Us</Link>
            </div>
            <div className="flex gap-x-7 me-10">
                <button className="font-semibold">Sign In</button>
                <button className="text-white bg-teal-500 p-[.85rem] rounded-sm w-32 shadow-lg shadow-teal-200 hover:bg-teal-600 transition .4s ease-in-out duration-200">Register</button>
            </div>
        </div>
    )
}