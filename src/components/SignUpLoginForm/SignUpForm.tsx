const SignUpForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-4 my-4 w-[300px]">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            id="name"
            className="border border-neutral-300 rounded-md px-4 py-2 text-neutral-700"
            placeholder="Nombre Completo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            id="email"
            className="border border-neutral-300 rounded-md px-4 py-2 text-neutral-700"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="flex gap-2 items-center">
          <div className="border border-neutral-300 rounded-md px-3 py-2 flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png"
              alt="col"
              className="w-6 h-4"
            />
            <p className="text-neutral-700">+57</p>
          </div>
          <input
            type="tel"
            maxLength={10}
            id="tel"
            className="border border-neutral-300 rounded-md py-2 px-3 text-neutral-700"
            placeholder="Celular"
            inputMode="tel"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="password"
            id="password"
            className="border border-neutral-300 rounded-md px-4 py-2 text-neutral-700"
            placeholder="Contraseña"
          />
        </div>
        <p className="text-center text-sm text-neutral-500 mt-2">Al hacer clic a continuación y crear una cuenta, acepto los <span className="text-[#0d7a5f] font-semibold cursor-pointer hover:text-[#1d4138]">Términos de servicio</span> y la <span className="text-[#0d7a5f] cursor-pointer font-semibold hover:text-[#1d4138]">Política de privacidad</span> de HazloPorMi.</p>
        <button className="bg-[#0d7a5f] text-white mt-2 rounded-full py-2 transition-all font-semibold antialiased hover:bg-[#164d3f]">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
