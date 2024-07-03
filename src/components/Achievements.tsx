import Clutch from "../assets/Clutch.svg";

const Achievements = () => {
  return (
    <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between pb-10 mx-auto space-y-6 md:space-y-0 md:space-x-6">
      <div>
        <img width={150} src={Clutch} alt="Clutch" />
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-semibold">
          <span className="text-2xl">20</span> Years
        </h1>
        <p>Proven Track Record</p>
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-semibold">
          <span className="text-2xl">98</span>%
        </h1>
        <p>Customer Satisfaction</p>
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-semibold">
          <span className="text-2xl">1,500</span> Projects
        </h1>
        <p>We Have Completed</p>
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-semibold">
          <span className="text-2xl">3</span> Mins
        </h1>
        <p>Average Answer Time</p>
      </div>
    </div>
  );
};

export default Achievements;
