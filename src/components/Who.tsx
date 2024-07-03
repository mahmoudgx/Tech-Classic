const Who = () => {
  return (
    <div className="flex justify-center pt-10 pb-10">
      <div className="max-w-7xl space-y-10 px-5">
        <h1 className="uppercase text-xs font-semibold bg-black inline-block p-2 rounded-md text-white">
          How we do
        </h1>
        <h1 className="md:text-5xl text-3xl font-semibold">
          Solving IT challenges in every<br></br> industry, every day.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <img
              className="w-[64px] h-[64px] object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1682148581886-947b5e12f613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Industry & Manufacturing"
            />
            <h1 className="text-lg">Industry & Manufacturing</h1>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <img
              className="w-[64px] h-[64px] object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1661884747279-f27b1574932a?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Transportation & Logistics"
            />
            <h1 className="text-lg">Transportation & Logistics</h1>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <img
              className="w-[64px] h-[64px] object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthcare"
            />
            <h1 className="text-lg">Healthcare</h1>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <img
              className="w-[64px] h-[64px] object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1672423156257-9a2bc5e1f480?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banks & Insurance"
            />
            <h1 className="text-lg">Banks & Insurance</h1>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <img
              className="w-[64px] h-[64px] object-cover rounded-full"
              src="https://images.unsplash.com/photo-1576089235406-0612d7bb033e?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Consulting Providers"
            />
            <h1 className="text-lg">Consulting Providers</h1>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <img
              className="w-[64px] h-[64px] object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1681493795338-e797a16e8934?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Non-Profit"
            />
            <h1 className="text-lg">Non-Profit</h1>
          </div>
        </div>
        <div className="text-sm text-blue-700">
          <button className="underline font-semibold">
            View All Industries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Who;
