const Where = () => {
  return (
    <div className="pb-10">
      <div className="max-w-7xl mx-auto px-5 pt-20 flex flex-col-reverse sm:flex-row justify-between items-center">
        <div className="space-y-5 sm:space-y-10 mt-5 sm:mt-0">
          <h1 className="text-sm bg-gray-100 inline-block p-2 rounded-md font-semibold">
            Where we do
          </h1>
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Recognized by the best
          </h1>
          <p className="text-base sm:text-lg">
            The company needed to complete a complex
            <br /> migration on a tight deadline to avoid millions of
            <br /> dollars in post-contract fees and fines.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <img
            className="w-full sm:w-[500px]"
            src="https://logos-world.net/wp-content/uploads/2023/09/Tech-logos-The-most-famous-technology-company-logos-and-names.png"
            alt="Recognized Tech Logos"
          />
        </div>
      </div>
    </div>
  );
};

export default Where;
