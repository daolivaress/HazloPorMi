import { VscTools } from "react-icons/vsc";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiBroom } from "react-icons/pi";
import { IoHammerOutline } from "react-icons/io5";
import { GiPaintRoller } from "react-icons/gi";
import { SiFireship } from "react-icons/si";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ServicesTypesList = [
  {
    name: "Ensamblaje",
    icon: <VscTools className="size-7 md:size-12" />,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    services: [
      "Montaje de muebles en general",
      "Montaje de cuna",
      "Montaje de escritorio",
      "Montaje de estantería",
    ],
    imageURL: "https://images.ctfassets.net/vwt5n1ljn95x/2zLfFEV2MrXbcska0MocE7/32575342bd9f30397d58ccb663c71744/Homepage_Assembly.png?w=1080&q=75&fm=webp"
  },
  {
    name: "Mudanzas",
    icon: <HiOutlineTruck className="size-7 md:size-12" />,
    color: "bg-green-100",
    textColor: "text-green-500",
    services: [
      "Mudanzas de viviendas",
      "Mudanzas de oficinas",
      "Mudanzas de empresas",
    ],
    imageURL: "https://images.ctfassets.net/vwt5n1ljn95x/4nhTqbg73bmmQtEZ5N5iFW/c4462f111348efc7d29ca073cb8b7a74/Homepage_Mounting.png?w=1080&q=75&fm=webp"
  },
  {
    name: "Limpieza",
    icon: <PiBroom className="size-7 md:size-12" />,
    color: "bg-lime-100",
    textColor: "text-lime-500",
    services: [
      "Limpieza de hogar",
      "Limpieza de oficinas",
      "Limpieza de garajes",
      "Limpieza profunda",
    ],
    imageURL: "https://images.ctfassets.net/vwt5n1ljn95x/3jKP7rZEeOMh285VMG9zVJ/13156819447cd03822bf9fb32d213a16/Homepage_Cleaning.png?w=1080&q=75&fm=webp"
  },
  {
    name: "Reparaciones del hogar",
    icon: <IoHammerOutline className="size-7 md:size-12" />,
    color: "bg-purple-100",
    textColor: "text-purple-500",
    services: [
      "Reparación de muebles",
      "Reparación de grifos",
      "Reparación electrica",
      "Instalacion y reparacion",
    ],
    imageURL: "https://images.ctfassets.net/vwt5n1ljn95x/8L8MtLm9f5ekgXZDFka2x/8aeb415fd8bb9bae25afe99b7e09de97/Homepage_HomeRepairs.png?w=1080&q=75&fm=webp"
  },
  {
    name: "Pintura",
    icon: <GiPaintRoller className="size-7 md:size-12" />,
    color: "bg-blue-100",
    textColor: "text-blue-500",
    services: [
      "Pintura de interiores",
      "Pintura de exteriores",
      "Pintura de fachadas",
      "Pintura de techos",
    ],
    imageURL: "https://images.ctfassets.net/vwt5n1ljn95x/1ffizWelPGVCWiCGWSivD7/8df4f3957d6a9d478e517c40f7d14e62/Homepage_Painting.png?w=1080&q=75&fm=webp"
  },
  {
    name: "Tendencias",
    icon: <SiFireship className="size-7 md:size-12" />,
    color: "bg-orange-100",
    textColor: "text-orange-500",
    services: [
      "Montaje de muebles en general",
      "Instalación de televisores",
      "Ayuda para mudanza",
      "Limpieza",
    ],
    imageURL: "https://images.ctfassets.net/vwt5n1ljn95x/2nfa2ouVwN7lG7FREVwmB0/ae3f6acd5b31680e9d998a24c1da851e/HomeRepair_3_950x491.jpg?w=1080&q=75&fm=webp"
  },
];

const ServicesTypes = () => {
  const [selectedServiceType, setSelectedServiceType] = useState("Ensamblaje");
  const navigate = useNavigate();
  return (
    <div className="w-fit mx-auto mt-12">
      <div className="flex w-fit mx-auto overflow-x-auto border-b pb-5 gap-4 md:gap-20">
        {ServicesTypesList.map((serviceType, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center rounded-lg gap-2 text-center cursor-pointer ${
              selectedServiceType === serviceType.name
                ? serviceType.textColor // Color único para el servicio seleccionado
                : "text-neutral-500 hover:text-neutral-400"
            }`}
            onClick={() => setSelectedServiceType(serviceType.name)}
          >
            <div
              className={`p-2 rounded-lg ${
                selectedServiceType === serviceType.name
                  ? serviceType.color
                  : "bg-inherit"
              }`}
            >
              {serviceType.icon}
            </div>
            <p className="font-medium text-xs md:text-sm">{serviceType.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-4 max-md:w-fit max-md:mx-auto">
        {
          // Mostrar los servicios del tipo seleccionado
          ServicesTypesList.find(
            (serviceType) => serviceType.name === selectedServiceType
          )?.services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 mt-2 mx-2">
              <button className="font-medium border border-black rounded-full py-2 px-4 text-sm transition-all hover:bg-[#daeee9] hover:border-[#0d7a5f] hover:text-[#2b4c32] md:text-base " onClick={() => navigate("/create-task/details")}>
                {service}
              </button>
            </div>
          ))
        }
      </div>
      <div>
      {
        ServicesTypesList.filter(
          (serviceType) => serviceType.name === selectedServiceType
        ).map((serviceType, index) => (
          <div key={index} className={`flex flex-row-reverse flex-shrink relative items-center mt-12 py-8 px-7 rounded-2xl ${
            selectedServiceType === serviceType.name
              ? serviceType.color
              : "bg-inherit"
          }`}>
            <img
              src={serviceType.imageURL}
              alt={serviceType.name}
              className="rounded-lg md:h-[400px]"
            />
            <p className="font-medium mt-2 text-sm absolute left-4 bg-white rounded-lg p-4 text-center md:text-lg max-md:max-w-32">{serviceType.name}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default ServicesTypes;
