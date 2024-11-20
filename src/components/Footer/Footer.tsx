const Footer = () => {
  return (
    <footer className="bg-[#67727e] text-white font-semibold py-12">
      <div className="flex justify-evenly">
        <ul>
          <li>
            <h3 className="text-[#aab9c3] font-normal">Descubre</h3>
          </li>
          <li className="hover:underline">Trabaja con nosotros</li>
          <li className="hover:underline">Sevicios cercanos</li>
          <li className="hover:underline">Todos los servicios</li>
          <li className="hover:underline">Ayuda</li>
        </ul>
        <ul>
          <li>
            <h3 className="text-[#aab9c3] font-normal">Compañia</h3>
          </li>
          <li className="hover:underline">Sobre nosotros</li>
          <li className="hover:underline">Terminos & Condiciones</li>
          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Ayuda</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
