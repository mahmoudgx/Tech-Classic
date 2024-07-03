import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Use = () => {
  return (
    <div className="bg-[#272728] pb-10">
      <div className="max-w-7xl mx-auto px-5 pt-20 text-white">
        <div className="space-y-5 sm:space-y-10">
          <h1 className="text-sm bg-black inline-block p-2 rounded-md font-semibold">
            How We use
          </h1>
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Brining the best IT vendors to you.
          </h1>
          <p className="text-sm sm:text-base">
            Working only with the best, to ensure the quality of our services,
            and to bring state of the art technology to those who need it.
          </p>
        </div>
      </div>
      <div className="flex justify-center mx-auto pt-10 text-white text-lg font-semibold">
        <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-5 bg-gray-900 py-2 px-8 rounded-md">
          <div className="bg-black p-2 rounded-full">
            <FaArrowLeft />
          </div>
          <h1 className="text-center sm:text-left">Your IT Challenges</h1>
          <div className="bg-black p-2 rounded-full">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
