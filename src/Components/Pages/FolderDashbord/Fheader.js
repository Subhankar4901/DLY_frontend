import React from "react";
import Projects from "./Projects";
import logo from "../../Image/FolderDashboard/Group 45.svg";
import setting from "../../Image/FolderDashboard/Shape.svg";
import bell from "../../Image/FolderDashboard/bell.svg";
import user from "../../Image/FolderDashboard/Ellipse 1.png";
import "./Floder.css";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Header from "../../Shared/Header";
import { Link } from "react-router-dom";
import collect from "../../Image/FolderDashboard/Vector (7).svg";
import icon2 from "../../Image/FolderDashboard/Vector (8).svg";
import icon3 from "../../Image/FolderDashboard/clarity_list-solid-badged.svg";
import SingleList from "./SingleList";
import CreateDocument from "../FileDashboard/Modal/Createdocument";
const Fheader = ({ header }) => {
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
    <>
      {header === "documentsetup" || header === "documentsetup2" ? (
        // <div className="container-fluid mb-3">
        //   <div className="row border border-bottom-2">
        //     <div className="col-12 mx-auto p-3">
        //       <div className="flex d-flex align-items-center justify-content-around">
        //         <div className="folder-header-logo">
        //           <img
        //             src={logo}
        //             width="60px"
        //             height="60px"
        //             className="img-fluid logo"
        //             alt=""
        //           />
        //         </div>
        //         {/* scearch-box */}

        //         <div className="scearch-box">
        //           <form class="form-inline search-from my-2 w-100 my-lg-0">
        //             <input
        //               className="form-control search-input px-5 mr-sm-2"
        //               type="search"
        //               placeholder="Search Projects"
        //               aria-label="Search"
        //             />
        //             <i class="fas fa-search"></i>
        //           </form>
        //         </div>
        //         {/* setting button */}
        //         <div className="left-part d-flex align-items-center">
        //           <div className="setting me-4">
        //             <img src={setting} className="setting-icon" alt="" />
        //           </div>
        //           {/* bell button */}
        //           <div className="bell me-5">
        //             <img src={bell} className="bell-icon" alt="" />
        //             <div className="number">
        //               <p className="number-center">3</p>
        //             </div>
        //           </div>
        //           {/* photo image */}
        //           <div className="user">
        //             <img
        //               src={user}
        //               className="user-icon"
        //               width="50px"
        //               height="50px"
        //               alt=""
        //             />
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <>
          <div style={{ paddingInline: "5%" }}>
            <Header isViewMore={false} isLayoutButton={false} />
          </div>
          <hr />
        </>
      ) : (
        <div className="filedashboard ">
          <div className="">
            <div className="file-grid row px-5">
              <Sidebar path={"fileDashboard"} />
              {/* left part  */}
              <div className="sidebar p-3 mx-auto">
                <Header
                  isLogo={false}
                  isViewMore={false}
                  isLayoutButton={false}
                  isSettings={false}
                />
                <hr />
                <div
                  className="mx-auto center-part mb-3"
                  style={{ width: "95%" }}
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
                      <div className="bottom-text">
                        View your recent projects here
                      </div>
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
                {/* slection part  */}
                {/* selectbox */}
                <Projects view={view} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fheader;
