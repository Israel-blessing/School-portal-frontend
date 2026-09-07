// import Adminsidebar from "./admin-sidebar";
import Topbar from "./components/topbar";
import Studentsidebar from "./components/student-sidebar";

import { Outlet } from "react-router-dom";

function Studenthomepage() {
  return (
    <>
      <div className="Admin-layout">
        <Studentsidebar />

        <div className="maincontent-layout">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Studenthomepage;
