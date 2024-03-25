import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const Layouts = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layouts;
