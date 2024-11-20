import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const SignUpLoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className={`bg-white w-[460px] py-16 rounded-3xl`}>
      <h1 className="text-[#2b4c32] text-4xl font-bold text-center my-8">
        HazloPorMi
      </h1>
      <div
        className={`flex-col items-center justify-center gap-4 ${
          currentPath == "/login" ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4 my-4 w-[300px]">
          <button
            className="bg-[#0d7a5f] text-white rounded-full py-2 transition-all font-semibold antialiased hover:bg-[#164d3f]"
            onClick={() => {
              navigate("/login/email");
            }}
          >
            Iniciar sesion
          </button>
          <button
            className="border border-[#0d7a5f] text-[#0d7a5f] rounded-full font-semibold antialiased py-2 hover:text-[#164d3f] hover:border-[#164d3f]"
            onClick={() => {
              navigate("/signup/password");
            }}
          >
            Registrarse
          </button>
        </div>
        <p className="text-neutral-500 w-[300px] text-center">
          Al registrarte aceptas nuestros{" "}
          <span className="text-[#0d7a5f] font-semibold">Términos de uso</span>{" "}
          y{" "}
          <span className="text-[#0d7a5f] font-semibold">
            Política de privacidad
          </span>
          .
        </p>
      </div>
      <div
        className={`flex-col items-center justify-center gap-4 ${
          currentPath == "/login/email" ? "flex" : "hidden"
        }`}
      >
        <LoginForm />
      </div>
      <div className={`flex-col items-center justify-center gap-4 ${
          currentPath == "/signup/password" ? "flex" : "hidden"
        }`}>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default SignUpLoginForm;
