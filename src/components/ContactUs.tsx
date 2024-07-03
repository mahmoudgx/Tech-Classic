import { FaArrowRight } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

const ContactUs = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[#272728] pb-10">
          <div className="max-w-7xl mx-auto px-5 pt-20 text-white">
            <div className="space-y-10">
              <h1 className="text-sm bg-black inline-block p-2 rounded-md font-semibold">
                Contact Us
              </h1>
              <h1 className="md:text-5xl text-3xl leading-tight font-semibold">
                Partner with Us for<br></br> Comprehensive IT
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#CED8EA] pb-10 pt-10">
          <div className="max-w-7xl mx-auto space-y-5 px-5 md:px-0">
            <h1 className="text-lg font-medium text-center md:text-left">
              We are happy to answer any questions you may have and help
              <br className="hidden md:block"></br>
              you determine which of our services best fit your needs.
            </h1>
            <h1 className="text-lg font-medium text-center md:text-left">
              Call us at: 1-800-356-8933
            </h1>
            <div className="text-lg font-medium">
              <div className="space-y-2 md:block hidden">
                <h1>Your benefits</h1>
                <div className="flex flex-wrap justify-center md:justify-start space-x-5 items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-700 p-1 rounded-full">
                      <TiTickOutline className=" text-white" />
                    </div>
                    <h1>Client-oriented</h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-700 p-1 rounded-full">
                      <TiTickOutline className=" text-white" />
                    </div>
                    <h1>Results-driven</h1>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start space-x-5 items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-700 p-1 rounded-full">
                      <TiTickOutline className=" text-white" />
                    </div>
                    <h1>Client-oriented</h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-700 p-1 rounded-full">
                      <TiTickOutline className=" text-white" />
                    </div>
                    <h1>Client-oriented</h1>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start space-x-5 items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-700 p-1 rounded-full">
                      <TiTickOutline className=" text-white" />
                    </div>
                    <h1>Client-oriented</h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-700 p-1 rounded-full">
                      <TiTickOutline className=" text-white" />
                    </div>
                    <h1>Client-oriented</h1>
                  </div>
                </div>
                <div className="pt-5 md:block hidden">
                  <h1>What happens next?</h1>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start items-center space-x-10">
                  <div className="flex items-center space-x-5">
                    <h1 className="text-4xl font-bold">1</h1>
                    <p className="text-center md:text-left">
                      We Schedule a call at<br></br> your convenience
                    </p>
                  </div>
                  <FaArrowRight />
                  <div className="flex items-center space-x-5">
                    <h1 className="text-4xl font-bold">2</h1>
                    <p className="text-center md:text-left">
                      We do a discovery<br></br> and consulting meeting
                    </p>
                  </div>
                  <FaArrowRight />
                  <div className="flex items-center space-x-5">
                    <h1 className="text-4xl font-bold">3</h1>
                    <p className="text-center md:text-left">
                      We prepare a<br></br> proposal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 py-10 px-10 right-0 hidden md:block">
          <div className="bg-white w-[700px] shadow-lg flex justify-center p-5">
            <div className="space-y-5">
              <div className="flex justify-center">
                <h1 className="text-lg font-medium">
                  Schedule a Free Consultation
                </h1>
              </div>
              <div className="flex flex-wrap space-x-2">
                <div className="flex items-center space-x-2">
                  <h1>First Name</h1>
                  <input className="border-2 rounded-md"></input>
                </div>
                <div className="flex items-center space-x-2">
                  <h1>Last Name</h1>
                  <input className="border-2 rounded-md"></input>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-nowrap">Company / Organization</h1>
                  <input className="border-2 w-full rounded-md"></input>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-nowrap">Company Email</h1>
                  <input className="border-2 w-full rounded-md"></input>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-nowrap">Phone</h1>
                  <input className="border-2 w-full rounded-md"></input>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-nowrap">Message</h1>
                  <textarea className="border-2 w-full rounded-md"></textarea>
                </div>
              </div>
              <button className="bg-blue-700 p-2 text-white rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
