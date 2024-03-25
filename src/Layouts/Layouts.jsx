import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const Layouts = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto ">
        <div>
          <Header></Header>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layouts;
