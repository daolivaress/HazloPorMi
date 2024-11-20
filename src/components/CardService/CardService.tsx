import { Link } from "react-router-dom";

type CardServiceProps = {
  name: string;
  price: string;
  imageURL: string;
};

const CardService = ({ name, price, imageURL }: CardServiceProps) => {
  return (
    <Link to={"/create-task"}>
      <div className="container cursor-pointer bg-[#e1eeea] h-[250px] w-[220px] rounded-xl shadow-lg transition-all hover:scale-105">
        <div>
          <img
            src={imageURL}
            alt={name}
            className="h-[165px] w-full object-cover rounded-t-xl"
          />
        </div>
        <div className="text-center p-4">
          <p className="text-[#1d3322] font-semibold truncate">{name}</p>
          <p className="text-[#2c4e34] text-sm">Disponible desde ${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardService;
