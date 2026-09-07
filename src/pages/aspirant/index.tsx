import { Outlet } from "react-router-dom";
import Aspirantsidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import "./style.css";

function Aspiranthomepage() {
  return (
    <>
      <div className="aspirant-layout">
        <Aspirantsidebar />

        <div className="aspirant-maincontent-layout">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Aspiranthomepage;
