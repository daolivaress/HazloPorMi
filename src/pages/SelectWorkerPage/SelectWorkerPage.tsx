import WorkerCard from "../../components/WorkerCard/WorkerCard";
import BaseLayout from "../../layout/BaseLayout";
import { TbUsers } from "react-icons/tb";

const WorkerList = [
  {
    name: "Giovanny T",
    imageURL:
      "https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_204,w_204/v1700588365/p4vpnhedhlhnodjlirc7.jpg",
  },
  {
    name: "Ryan H",
    imageURL:
      "https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_204,w_204/v1719262525/zlbzght5wliw5pbhwy7y.jpg",
  },
  {
    name: "Aian C",
    imageURL:
      "https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_204,w_204/v1721442649/wos1ylyvji8onfrnnltq.jpg",
  },
  {
    name: "Anton T",
    imageURL:
      "https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_204,w_204/v1732059192/zyaxonrmjaragwndb9i4.jpg",
  },
];

const SelectWorkerPage = () => {
  return (
    <BaseLayout>
      <section className=" bg-[#f5f7f6] pb-24">
        <div className="bg-white border border-b border-neutral-300 py-6 text-neutral-700 flex justify-center items-center gap-3">
          <TbUsers className="size-6 max-md:ml-6" />
          <p className="w-[600px] flex-shrink max-md:text-sm">
            Filtra y ordena para encontrar a tu trabajador. Luego, consulta su
            disponibilidad para solicitar tu fecha y hora.
          </p>
        </div>
        <div className="">
          <div className="w-fit mx-auto pt-12">
            <div className="flex justify-end items-center mb-4 gap-3">
              <label htmlFor="order" className="text-neutral-700 font-semibold">Ordendo por: </label>
              <select id="order" className="p-2 rounded-full border border-neutral-700">
                <option value="price">Recomendado</option>
                <option value="rating">Precio (Menor a mayor)</option>
                <option value="rating">Precio (Mayor a menor)</option>
                <option value="popularity">Reseñas positivas</option>
                <option value="taskscomplete"># de Tareas completadas</option>
              </select>
            </div>
            <div className="flex flex-col gap-6">
              {WorkerList.map((worker, index) => (
                <WorkerCard
                  key={index}
                  name={worker.name}
                  imageURL={worker.imageURL}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default SelectWorkerPage;
