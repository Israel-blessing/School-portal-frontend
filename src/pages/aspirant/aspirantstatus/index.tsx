import { Outlet } from "react-router-dom";
import Statuscard from "./components/Statuscard";
import Informationcard from "./components/informationcard";
import { useState } from "react";
// import { getCurrentEnrollment } from "../../api/enrollment.api";

function AspirantStatus() {
    const [stepsDone , _ ] = useState(0);
  return (
    <>
      <div className="Aspirantstatus-background">
        <div className="Aspirantstatus-body">
          <p className="Your-application">Your Application</p>
          <Statuscard stepsDone={stepsDone} />
          <Outlet />
          <Informationcard />
        </div>
      </div>
    </>
  );
}

export default AspirantStatus;
