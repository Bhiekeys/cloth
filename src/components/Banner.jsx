/** @format */

import {useState} from 'react';
import image from '../assets/ban.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
      'https://images.pexels.com/photos/5558228/pexels-photo-5558228.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2829369/pexels-photo-2829369.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/346744/pexels-photo-346744.jpeg?auto=compress&cs=&w=600',
      'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=600',
    ];
    
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev)=> prev - 1)
    }
     const nextSlide = () => {
       setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
     };
  return (
    <div className="w-full overflow-x-hidden h-auto">
      <div className="w-screen h-[650px] relative ">
              <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }} className="w-[400vw] h-full
         flex transition-transform duration-1000">
          <img
            src={data[0]}
            className="w-screen h-full object-cover "
            alt="img1"
            loading="priority"
          />
          <img
            src={data[1]}
            className="w-screen h-full object-cover "
            alt="img1"
            loading="priority"
          />
          <img
            src={data[2]}
            className="w-screen h-full object-cover "
            alt="img1"
            loading="priority"
          />
          <img
            src={data[3]}
            className="w-screen h-full object-cover "
            alt="img1"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-600 hover:text-white active:bg-gray-200 duration-300">
            <BsArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-600 hover:text-white active:bg-gray-200 duration-300">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
