import { MdOutlineSort } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="border flex items-center py-3 antialiased lg:justify-around">
      <div className="hidden -mr-10 ml-4 cursor-pointer max-lg:block">
        <MdOutlineSort className="size-8 text-[#0d7a5f]"/>
      </div>
      <div className="max-lg:mx-auto">
        <NavLink to={"/"}><p className="font-bold text-[#2b4c32] text-2xl">HazloPorMi</p></NavLink>
      </div>
      <ul className="hidden gap-4 items-center font-semibold lg:flex">
        <li className="cursor-pointer hover:underline"><NavLink to={"/services"}>Servicios</NavLink></li>
        <li className="cursor-pointer hover:underline"><NavLink to={"/login"}>Registrarse / Iniciar sesion</NavLink></li>
        <li>
          <button className="border border-[#0d7a5f] text-[#0d7a5f] px-4 py-2 rounded-lg hover:border-[#2b4c32] hover:text-[#2b4c32] hover:font-bold">
            Trabaja con nosotros
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
