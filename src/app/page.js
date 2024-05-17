import Image from 'next/image';
import firstCar from '../assets/firstCar.jpg'
import GetCar from '@/components/getCar';
import EasyGet from '@/components/easyGet';
// import secondCar from '../assets/secondCar.png'
// import thirdCar from '../assets/thirdCar.png'
export default function Home() {
  return (
    <div>
        <div className='bg-[#fafafaa8]'>
        <section className='flex items-center h-[82vh]'>
          <div className='basis-1/2 p-2 leading-[2.7rem] ms-24'>
            <p className='font-bold text-neutral-800'>Plan your trip now</p>
            <h1 className='text-6xl leading-[4rem] font-extrabold w-[70%]'>Save <span className='text-teal-600 font-extrabold'>BIG</span> with our car rental</h1>
            <p className=' text-neutral-500 font-light w-[70%]'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className='flex gap-x-4 mt-6'>
              <button className='text-white bg-teal-500 p-[.45rem] rounded-sm w-36 shadow-lg shadow-teal-200 hover:bg-teal-600 transition .4s ease-in-out duration-200'>Book One</button>
              <button className='text-white bg-neutral-900 p-[.45rem] rounded-sm w-36 hover:bg-white hover:text-black transition .5s ease-in-out duration-300 border-2 font-semibold border-black outline-none'>Learn More <i className='fa fa-angle-right ms-[.378rem]'></i></button>
            </div>
          </div>
          <div className='basis-1/2'>
            <Image className=' mix-blend-multiply' width={680} src={firstCar}/>
          </div>
        </section>
        <GetCar></GetCar>
        </div>
        <EasyGet></EasyGet>
    </div>
  );
}
