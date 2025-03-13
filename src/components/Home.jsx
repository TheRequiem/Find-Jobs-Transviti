import Aside from "./Aside";
import MainApp from "./MainApp";

const Navbar = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:px-16 items-center lg:items-start">
      <Aside />
      <MainApp />
    </main>
  );
};

export default Navbar;
