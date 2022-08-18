import React, { useEffect, useState } from "react";
import logo from "../../Image/FolderDashboard/Group 45.svg";
import bell from "../../Image/FolderDashboard/bell.svg";
import collect from "../../Image/FolderDashboard/Vector (7).svg";
import icon2 from "../../Image/FolderDashboard/Vector (8).svg";
import icon3 from "../../Image/FolderDashboard/clarity_list-solid-badged.svg";
import user from "../../Image/FolderDashboard/Ellipse 1.png";
import image from "../../Image/FolderDashboard/image 4.png";
import arrow from "../../Image/ls_next.png";
import "./filedashboard.css";
import { Link, NavLink } from "react-router-dom";
import Filebox from "./Filebox";
import FileboxList from "./FileboxList";
import CreateDocumentFile from "./Modal/CreatedocumentFile";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Header from "../../Shared/Header";
const FIledashboard = () => {
  const [value, getData] = useState([]);
  useEffect(() => {
    fetch("../../../../file.json")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);

  const [open, setOpen] = React.useState(false);
  const [grid, setGrid] = React.useState(true);
  const [list, setList] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGrid = () => {
    setGrid(true);
    setList(false);
  };
  const handleList = () => {
    setList(true);
    setGrid(false);
  };
  const view = list ? "List" : "Grid";

  return (
    <div className="filedashboard ">
      <div>
        <div className="file-grid row px-5">
          <Sidebar path={"fileDashboard"} />
          {/* left part  */}
          <div className="sidebar p-3 mx-auto">
            <div className="mx-auto">
              <Header
                isLogo={false}
                isViewMore={false}
                isLayoutButton={false}
                isSettings={false}
              />
            </div>
            <hr />
            {/* slection part  */}
            {/* selectbox */}
            <div
              className=" middle-part-center mx-auto"
              style={{ width: "95%" }}
            >
              <div className="flext-part mb-3 d-flex justify-content-between align-items-center center-part">
                <div className="select-box d-flex mb-3">
                  {/* <div className="project-flex d-flex align-items-center justify-content-center">
                    <div className="project-title">Project Dashboard</div>
                    <div className="img-icon ms-2">
                      <img src={arrow} alt="" />
                    </div>
                  </div> */}
                  <select
                    className="form-select selection"
                    aria-label="Default select example"
                  >
                    <option selected style={{ fontSize: "12px" }}>
                      Recent Projects
                    </option>
                    <option value="1">Archived Projects</option>
                    <option value="5">Completed Projects/Files</option>
                    <option value="2">Deleted Projects/Files</option>
                    <option value="3">Last 1 month Projects</option>
                    <option value="4">Archived Projects</option>
                    <option value="6">All the Projects</option>
                  </select>
                </div>
                {/* icon-group-part */}
                <div className="icon-group-part d-flex align-items-center mb-3">
                  <div className="icon-part-box d-flex align-items-center justify-content-center gap-4 me-4">
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
                  </div>
                  <div className="new-project">
                    <button
                      type="button"
                      class="btn new-project-btn py-2 btn-primary"
                      onClick={handleOpen}
                    >
                      + New Document
                    </button>
                  </div>
                </div>
              </div>
              <CreateDocumentFile open={open} onClose={handleClose} />

              {/* div part  */}
              {view === "List" ? (
                <div className="list-filedashboard">
                  {value.map((filedata) => (
                    <FileboxList
                      alldata={filedata}
                      key={filedata.id}
                    ></FileboxList>
                  ))}
                </div>
              ) : (
                <div className="grid-filedashboard">
                  {value.map((filedata) => (
                    <Filebox alldata={filedata} key={filedata.id}></Filebox>
                  ))}
                </div>
              )}
              {/* <div className="grid-filedashboard">
                {value.map((filedata) => (
                  <Filebox alldata={filedata} key={filedata.id}></Filebox>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIledashboard;
