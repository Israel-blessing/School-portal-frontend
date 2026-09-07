import "./style.css";
import Displaylevel from "./componenets/display-level";
import Addlevel from "./componenets/add-level";
import { useState } from "react";
// import { getLevels } from "../../api/level.api";

function Adminlevels() {
  const [openModal, setOpenModal] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const handleLevelAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <div className="school-admin-content">
        <div className="school-admin-body">
          <div className="school-admin-header">
            <h4>Levels</h4>
            <p className="new-modal" onClick={() => setOpenModal(true)}>
              New Level
            </p>
          </div>
          <div className="searchbar">
            <input
              className="list-search"
              type="text"
              placeholder="Search this list"
            />
            <button> Search</button>
          </div>

          <Displaylevel refresh={refresh} />
          {openModal && (
            <Addlevel
              closeModal={() => setOpenModal(false)}
              onSuccess={handleLevelAdded}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Adminlevels;
