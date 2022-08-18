import React from "react";
import collect from "../../Image/FolderDashboard/Vector (7).svg";
import icon2 from "../../Image/FolderDashboard/Vector (8).svg";
import icon3 from "../../Image/FolderDashboard/clarity_list-solid-badged.svg";
import Projects from "./Projects";
import SingleList from "./SingleList";
import { Link } from "react-router-dom";
import CreateDocument from "../FileDashboard/Modal/Createdocument";
const Recent = () => {
  const [open, setOpen] = React.useState(false);
  const [grid, setGrid] = React.useState(true);
  const [list, setList] = React.useState(false);
  const [card, setCard] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGrid = () => {
    setGrid(true);
    setList(false);
    setCard(false);
  };
  const handleList = () => {
    setList(true);
    setCard(false);
    setGrid(false);
  };
  const handleCard = () => {
    setCard(true);
    setList(false);
    setGrid(false);
  };
  const view = list ? "List" : card ? "Card" : "Grid";
  return (
    <div
      className="container mx-atuo center-part mb-3"
      // style={{ maxWidth: "1500px" }}
    >
      {/* selectbox */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="select-box mb-4">
          <select
            className="form-select selection"
            aria-label="Default select example"
          >
            <option selected>Recent Projects</option>
            <option value="1">Archived Projects</option>
            <option value="2">Deleted Projects/Files</option>
            <option value="3">Last 1 month Projects</option>
            <option value="4">Archived Projects</option>
          </select>
          <div className="bottom-text">View your recent projects here</div>
        </div>
        {/* icon-group-part */}
        <div className="icon-group-part mb-4 d-flex align-items-center">
          <div className="icon-part-box d-flex align-items-center justify-content-between me-4">
            <img
              src={collect}
              width="25px"
              onClick={handleGrid}
              className={`collect ${grid ? "active-view" : ""}`}
              alt=""
            />

            <img
              src={icon2}
              width="25px"
              style={{ fill: "blue" }}
              onClick={handleList}
              className={`icon2 ${list ? "active-view" : ""}`}
              alt=""
            />

            <img
              src={icon3}
              width="25px"
              onClick={handleCard}
              className={`icon3 ${card ? "active-view" : ""}`}
              alt=""
            />
          </div>
          <div className="new-project">
            <button
              type="button"
              class="btn new-project-btn py-2 btn-primary"
              onClick={handleOpen}
            >
              + New Project
            </button>
          </div>
          <CreateDocument open={open} onClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Recent;
