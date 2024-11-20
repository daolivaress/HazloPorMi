const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-4 my-4 w-[300px]">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-sm">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="border border-neutral-300 rounded-md px-4 py-2"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold text-sm">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="border border-neutral-300 rounded-md px-4 py-2"
            placeholder="Contraseña"
          />
          <p className="text-[#0d7a5f] font-semibold cursor-pointer hover:text-[#1d4138]">¿Olvidaste tu contraseña?</p>
        </div>
        <button className="bg-[#0d7a5f] text-white mt-5 rounded-full py-2 transition-all font-semibold antialiased hover:bg-[#164d3f]">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
