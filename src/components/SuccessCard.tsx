import { TiTickOutline } from "react-icons/ti";

interface Props {
  img: string;
  category: string;
  title: string;
  description: string;
}

const SuccessCard = ({ img, category, title, description }: Props) => {
  return (
    <div className="w-full sm:w-[400px] space-y-2 border-2 p-5 rounded-md">
      <img
        className="rounded-md w-full h-[200px] object-cover"
        src={img}
        alt="Success story"
      />
      <h1 className="text-xs uppercase text-gray-500">{category}</h1>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <div>
        <div className="flex space-x-1 items-center">
          <TiTickOutline size={15} />
          <h1 className="text-gray-500">Modern Infrastructure</h1>
        </div>
        <div className="flex space-x-1 items-center">
          <TiTickOutline size={15} />
          <h1 className="text-gray-500">Consulting Services</h1>
        </div>
      </div>
      <button className="text-xs font-bold">Learn More</button>
    </div>
  );
};

export default SuccessCard;
