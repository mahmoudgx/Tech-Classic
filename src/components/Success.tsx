import SuccessCard from "./SuccessCard";

const Success = () => {
  return (
    <div className="pb-10">
      <div className="max-w-7xl mx-auto px-5 pt-20">
        <div className="space-y-5 sm:space-y-10">
          <h1 className="text-sm bg-gray-100 inline-block p-2 rounded-md font-semibold">
            How We use
          </h1>
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Success Stories
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between pt-10 space-y-5 sm:space-y-0 sm:space-x-5">
          <SuccessCard
            description="The company needed to complete a complex migration on a tight deadline
        to avoid millions of dollars in post-contract fees and fines."
            title="Major Insurance Provider Saves $750k per month with big data migration"
            category="Cloud Hosting"
            img="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <SuccessCard
            description="The company needed to complete a complex migration on a tight deadline
        to avoid millions of dollars in post-contract fees and fines."
            title="Maximizing Efficiency with proper technology implementation - coffee success story"
            category="it consulting"
            img="https://images.unsplash.com/photo-1612810806546-ebbf22b53496?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <SuccessCard
            description="Travel confidently around london with maps and live travel updates. Our reliable journey planner will map a safe route."
            title="Strategic move to an AI-supported application for public safety travel app in london"
            category="mobile development"
            img="https://images.unsplash.com/photo-1617992477211-dfab5866182b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
