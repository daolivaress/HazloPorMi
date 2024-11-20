import { FaStar } from "react-icons/fa";

type WorkerCardProps = {
  imageURL: string;
  name: string;
};

const WorkerCard = ({ imageURL, name }: WorkerCardProps) => {
  return (
    <div className="bg-white flex gap-4 w-[400px] border border-neutral-300 rounded-xl py-4 md:w-[900px] max-md:flex-col">
      <div className="py-4 ml-6">
        <img src={imageURL} alt={name} className="rounded-full mx-auto"/>
      </div>
      <div className="py-2 px-4 flex flex-col gap-2">
        <div className="flex justify-between font-semibold text-3xl md:w-[700px]">
          <h2>{name}.</h2>
          <p>$44.39/hr</p>
        </div>
        <div className="text-[#0d7a5f] bg-[#ccfff2] w-fit rounded px-2 font-semibold">
          <span>GREAT VALUE</span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar className="size-4"/>
          <p>5.0 (1232 reseñas)</p>
        </div>
        <div>
          <button className="bg-[#0d7a5f] w-full text-white mt-2 rounded-full py-2 transition-all font-semibold antialiased hover:bg-[#164d3f]">Seleccionar & Continuar</button>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
