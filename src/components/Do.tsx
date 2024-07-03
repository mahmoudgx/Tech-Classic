const Do = () => {
  return (
    <div className="pb-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between p-5 bg-[#272828] items-center overflow-hidden h-auto md:h-[250px] text-white rounded-md">
        <div className="space-y-5 md:space-y-20 text-center md:text-left">
          <h1 className="uppercase text-xs">what we do</h1>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Simplifying IT
            <br className="hidden md:block" /> for a complex world.
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <img
            width={240}
            className="overflow-hidden"
            src="https://helpransomware.com/wp-content/uploads/2024/01/remove-decrypt-ransomware-2024.png"
            alt="IT illustration"
          />
        </div>
      </div>
      <div className="pt-10 flex flex-col md:flex-row justify-between border-b-2 pb-10 space-y-10 md:space-y-0 md:space-x-5">
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <img
            width={50}
            className="mx-auto md:mx-0"
            src="https://www.svgrepo.com/show/438410/cost-round.svg"
            alt="Cost-Effectiveness"
          />
          <h1 className="text-xl font-semibold">Cost-Effectiveness</h1>
          <p className="text-gray-500">
            We offer affordable IT solutions that
            <br className="hidden md:block" /> help you reduce costs and improve
            your
            <br className="hidden md:block" /> bottom line.
          </p>
        </div>
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <img
            className="mx-auto md:mx-0"
            width={50}
            src="https://www.svgrepo.com/show/438629/idea.svg"
            alt="Innovative Technology"
          />
          <h1 className="text-xl font-semibold">Innovative Technology</h1>
          <p className="text-gray-500">
            We stay up-to-date with the latest
            <br className="hidden md:block" /> technology trends and offer
            innovative
            <br className="hidden md:block" /> solutions that help you stay
            ahead of
            <br className="hidden md:block" /> the competition.
          </p>
        </div>
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <img
            className="mx-auto md:mx-0"
            width={50}
            src="https://www.svgrepo.com/show/533524/industry-windows.svg"
            alt="Industry Expertise"
          />
          <h1 className="text-xl font-semibold">Industry Expertise</h1>
          <p className="text-gray-500">
            We specialize in serving specific
            <br className="hidden md:block" /> industries such as healthcare,
            finance,
            <br className="hidden md:block" /> or manufacturing, and offer
            tailored
            <br className="hidden md:block" /> solutions that meet your unique
            needs.
          </p>
        </div>
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <img
            className="mx-auto md:mx-0"
            width={50}
            src="https://www.svgrepo.com/show/529184/scale.svg"
            alt="Scalability"
          />
          <h1 className="text-xl font-semibold">Scalability</h1>
          <p className="text-gray-500">
            Our solutions are scalable and can grow
            <br className="hidden md:block" /> with your business, ensuring that
            you
            <br className="hidden md:block" /> get the most value out of your
            <br className="hidden md:block" />
            investment.
          </p>
        </div>
      </div>
      <div className="pt-10 text-center md:text-left">
        <button className="text-sm text-blue-700 font-semibold underline">
          About Tecnologia
        </button>
      </div>
    </div>
  );
};

export default Do;
