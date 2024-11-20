import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <NavBar/>
      <main className="antialiased">{children}</main>
      <Footer/>
    </>
  );
};

export default BaseLayout;
