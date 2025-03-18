import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="p-4 grow">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
