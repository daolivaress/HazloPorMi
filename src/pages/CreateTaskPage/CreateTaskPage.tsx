import BaseLayout from "../../layout/BaseLayout";
import { useState } from "react";
import { ServicesTypesList } from "../../components/ServicesTypes/ServicesTypes";

const CreateTaskPage = () => {
  const [step, setStep] = useState(1);
  const [selectedServiceType, setSelectedServiceType] = useState("Ensamblaje");
  return (
    <BaseLayout>
      <section className="h-[100vh] bg-[#f5f7f6] py-8">
        <h1 className="font-semibold text-3xl ml-10 mb-6 lg:ml-28">
          Crear tarea
        </h1>
        <div className="flex flex-col justify-center items-center px-8 gap-8 lg:px-24">
          <div className="bg-white border border-neutral-300 flex flex-col w-full p-4 gap-4 rounded-xl">
            <h1 className="font-semibold text-xl">
              La localizacion de tu tarea
            </h1>
            <input
              type="text"
              placeholder="Direccion"
              className="border rounded-md py-2 px-4"
            />
            <input
              type="text"
              placeholder="# apt"
              className="border rounded-md py-2 px-4"
            />
            <button
              className="bg-[#0d7a5f] text-white w-fit mx-auto px-8 rounded-full mt-4 py-2 transition-all font-semibold antialiased hover:bg-[#164d3f]"
              onClick={() => setStep(step + 1)}
            >
              Continuar
            </button>
          </div>
          <div
            className={`bg-white border border-neutral-300 flex-col w-full p-4 rounded-xl ${
              step > 1 ? "flex" : "hidden"
            }`}
          >
            <h1 className="font-semibold text-xl">
              Cuentanos los detalles de tu tarea
            </h1>
            <p className="text-neutral-500">
              Esto nos ayuda a mostrarte solo personas calificadas y disponibles
              para el trabajo. No te preocupes, puedes editar esto más tarde.
            </p>
            <div className="mt-4">
              <label htmlFor="serviceType" className="text-sm">
                Selecciona el tipo de servicio:
              </label>
              <select
                id="serviceType"
                className="w-full border rounded-md py-2 px-4 mb-4"
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
              >
                {ServicesTypesList.map((serviceType, index) => (
                  <option value={serviceType.name} key={index}>
                    {serviceType.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="service" className="text-sm">
                Selecciona el servicio:
              </label>
              <select
                id="service"
                className="w-full border rounded-md py-2 px-4 mb-2"
              >
                {ServicesTypesList.find(
                  (serviceType) => serviceType.name === selectedServiceType
                )?.services.map((service, index) => (
                  <option value={service} key={index}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Brindanos un resumen de lo que necesitas. Asegurate de incluir detalles como el tamaño de tu espacio, equipamiento necesario y como entrar"
              className="my-4 border p-4 rounded-md"
            ></textarea>
            <button className="bg-[#0d7a5f] text-white w-fit mx-auto px-8 rounded-full mt-4 py-2 transition-all font-semibold antialiased hover:bg-[#164d3f]">
              Confirmar
            </button>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default CreateTaskPage;
