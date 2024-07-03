import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Clutch from "../assets/Clutch.svg";

const Testimonials = () => {
  return (
    <div className="max-w-5xl flex flex-col mx-auto justify-center pt-20 pb-20 px-5">
      <div className="space-y-5">
        <img
          className="rounded-md w-12 h-12 sm:w-16 sm:h-16"
          src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Testimonial"
        />
        <p className="text-xl sm:text-4xl leading-tight font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eum labore dolorum odio deserunt excepturi ab et pariatur a. Incidunt
          omnis recusandae doloremque modi nulla sit molestiae minus rerum
          voluptate!
        </p>
        <div>
          <h1 className="font-semibold">Amanda Parks</h1>
          <h1 className="text-gray-500">
            Network Manager, Healthcare Organization
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-5 space-y-5 sm:space-y-0">
        <div className="flex items-center space-x-5">
          <div className="bg-gray-300 p-2 rounded-full">
            <FaArrowLeft />
          </div>
          <div className="bg-gray-300 p-2 rounded-full">
            <FaArrowRight />
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <img
            className="w-20 sm:w-24"
            src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo.png"
            alt="Google Reviews"
          />
          <img className="w-20 sm:w-24" src={Clutch} alt="Clutch" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
