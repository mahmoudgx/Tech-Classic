const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto pt-20 justify-between border-b-2 pb-10 items-center">
      <div className="space-y-8 text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-6xl font-bold">
          We manage your IT,
          <br className="hidden md:block" />
          so you can manage
          <br className="hidden md:block" />
          your business
        </h1>
        <h2 className="text-xl md:text-3xl">
          Take charge of your business continuity
          <br className="hidden md:block" />
          with innovative IT solutions
        </h2>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 font-semibold">
          <button className="bg-blue-700 py-2 px-4 text-white rounded-md">
            Schedule a free Consultation
          </button>
          <button className="bg-[#D8E1F8] py-2 px-4 rounded-md text-blue-700">
            Services
          </button>
        </div>
      </div>
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-end">
        <img
          width={600}
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
          }}
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
