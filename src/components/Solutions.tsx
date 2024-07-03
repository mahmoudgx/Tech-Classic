import SolutionCard from "./SolutionCard";

const Solutions = () => {
  return (
    <div className="bg-gradient-to-r from-stone-500 to-stone-700 pb-10">
      <div className="max-w-7xl mx-auto px-5 pt-20 text-white">
        <div className="space-y-10">
          <h1 className="text-sm bg-black inline-block p-2 rounded-md font-semibold">
            How We Do
          </h1>
          <h1 className="text-5xl font-semibold">Solutions</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:px-0 px-5 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto pt-5 md:pt-10">
        <SolutionCard
          title="Managed Services"
          icon="https://www.svgrepo.com/show/474984/services.svg"
          description="Free up your internal resources to focus on the business by letting us handle day to day support Services, management, and monitoring of your IT."
        />
        <SolutionCard
          title="IT Consulting & Advisory"
          icon="https://www.svgrepo.com/show/499808/information.svg"
          description="The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth."
        />
        <SolutionCard
          title="Cyber Security"
          icon="https://www.svgrepo.com/show/485059/security-shield.svg"
          description="Our experts can identify vulnerability, assess risks, and implement robust security measures to safeguard your systems and data."
        />
        <SolutionCard
          title="Web Development"
          icon="https://www.svgrepo.com/show/261945/web-development.svg"
          description="Our web development services can help you establish an impactful online presence and reach your target audience effectively"
        />
        <SolutionCard
          title="Mobile Development"
          icon="https://www.svgrepo.com/show/289916/technology-iphone.svg"
          description="We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms."
        />
        <SolutionCard
          title="Cloud Services"
          icon="https://www.svgrepo.com/show/375362/cloud-generic.svg"
          description="With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals"
        />
      </div>
      <div className="flex justify-center pt-10">
        <button className="text-white bg-blue-700 py-3 px-5 rounded-md font-semibold">
          View All Solutions
        </button>
      </div>
    </div>
  );
};

export default Solutions;
