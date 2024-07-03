interface Props {
  icon: string;
  title: string;
  description: string;
}
const SolutionCard = ({ icon, title, description }: Props) => {
  return (
    <div className="bg-white p-5 space-y-5 rounded-md shadow-xl border-b-2">
      <img width={50} src={icon} alt={title} />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
      <hr />
      <div>
        <button className="text-sm underline text-blue-700 font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
