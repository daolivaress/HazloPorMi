import BaseLayout from "../../layout/BaseLayout";
import { IoIosSearch } from "react-icons/io";
import ServicesTypes from "../../components/ServicesTypes/ServicesTypes";
import CardService from "../../components/CardService/CardService";

const popularServices = [
  {
    name: "Ensamblaje de muebles",
    imageURL:
      "https://images.ctfassets.net/vwt5n1ljn95x/2zLfFEV2MrXbcska0MocE7/32575342bd9f30397d58ccb663c71744/Homepage_Assembly.png?w=1080&q=75&fm=webp",
    price: "50",
  },
  {
    name: "Mudanzas",
    imageURL:
      "https://images.ctfassets.net/vwt5n1ljn95x/5RdOpgNLV7GFgjHegMSn4S/4da60b993bc3b03fcef4d19645c38e59/Help_Moving.jpg?w=384&q=75&fm=webp",
    price: "100",
  },
  {
    name: "Montaje de television",
    imageURL:
      "https://images.ctfassets.net/vwt5n1ljn95x/3yZJxfcMurN3fYgm2VIw3v/1f0aee924e621fd5e2684f01f92ca7b2/Mount_TV.jpg?w=384&q=75&fm=webp",
    price: "30",
  },
  {
    name: "Limpieza de hogar",
    imageURL:
      "https://images.ctfassets.net/vwt5n1ljn95x/3jKP7rZEeOMh285VMG9zVJ/13156819447cd03822bf9fb32d213a16/Homepage_Cleaning.png?w=1080&q=75&fm=webp",
    price: "30",
  },
  {
    name: "Reparacion de grifos y tuberias",
    imageURL:
      "https://images.ctfassets.net/vwt5n1ljn95x/2vw8Ct7BWBT12032WBzVyf/1b38538e7d8f28fcf03dc2a8a4a31554/Plumbing_Help.jpeg?w=384&q=75&fm=webp",
    price: "69",
  },
  {
    name: "Ayuda electrica",
    imageURL:
      "https://images.ctfassets.net/vwt5n1ljn95x/BUqnE9Sgc6YHLGISWe04H/31c63bdb1bc70d72161e4327594c6629/Electrical_Help.jpg?w=384&q=75&fm=webp",
    price: "55",
  },
];

const HomePage = () => {
  return (
    <>
      <BaseLayout>
        <section>
          <div className="flex flex-col justify-center items-center gap-16 mt-20">
            <img src="../../src/assets/asset2.png" alt="asset2" className="absolute left-0 top-[100px] hidden xl:block"/>
            <img src="../../src/assets/asset1.png" alt="asset1" className="absolute right-0 top-[68px] hidden xl:block"/>
            <p className="text-[#2b4c32] font-bold antialiased text-5xl text-center w-[450px] lg:w-[650px]">
              Confianos tu hogar, nosotros lo cuidamos por ti.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="En que necesitas ayuda?"
                className="border rounded-full w-[450px] py-4 pl-12 pr-28 lg:w-[600px]"
              />
              <div className="absolute top-0 right-0 bg-[#0d7a5f] text-white w-20 h-full rounded-r-full flex items-center justify-center cursor-pointer">
                <IoIosSearch className="size-6" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <ServicesTypes></ServicesTypes>
        </section>
        <section className="mt-24 ">
          <h2 className="text-[#152519] font-bold antialiased text-3xl ml-8 xl:ml-44">
            Servicios populares
          </h2>
          <div className="flex flex-wrap gap-12 mt-8 justify-center max-md:gap-4">
            {popularServices.map((service, index) => (
              <CardService
                key={index}
                name={service.name}
                price={service.price}
                imageURL={service.imageURL}
              />
            ))}
          </div>
        </section>
        <section className="my-24">
          <div className="bg-yellow-50 flex flex-col md:flex-row-reverse justify-center py-8 relative">
            <img
              src="https://images.ctfassets.net/vwt5n1ljn95x/68OY5vAHQdG6blVvXM1WT7/5f45c9eda06d29820a9836a11232ef16/how_it_works_pic_updated.jpg?w=1920&q=75&fm=webp"
              alt="steps"
              className="md:px-12"
            />
            <div className=" bg-white p-8 rounded-lg items-center md:w-[340px] md:absolute md:left-0 md:top-20 2xl:left-72  xl:top-32">
              <div className="mb-6">
                <h2 className="text-[#152519] font-bold antialiased text-2xl">
                  Como funciona?
                </h2>
                <p className="text-neutral-500 text-sm">
                  Descubre como funciona HazloPorMi
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4 text-[#2b4c32] antialiased font-medium">
                <span className="bg-blue-100 text-blue-950 px-4 py-2 font-bold rounded-full">
                  1
                </span>
                <p>Elija un trabajador/a por precio, habilidades y reseñas.</p>
              </div>
              <div className="flex items-center gap-2 mb-4 text-[#2b4c32] antialiased font-medium">
                <span className="bg-green-100 text-green-950 px-4 py-2 font-bold rounded-full">
                  2
                </span>
                <p>Programe una tarea hoy mismo.</p>
              </div>
              <div className="flex items-center gap-2 text-[#2b4c32] antialiased font-medium">
                <span className="bg-purple-100 text-purple-950 px-4 py-2 font-bold rounded-full">
                  3
                </span>
                <p>Chatea, paga, da propinas y opina, todo en un solo lugar.</p>
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default HomePage;
