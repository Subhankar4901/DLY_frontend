import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import logo from "../../Image/FolderDashboard/Group 45.svg";
import bell from "../../Image/FolderDashboard/bell.svg";
import user from "../../Image/FolderDashboard/Ellipse 1.png";
import Header from "../../Shared/Header";
import {
  Layout1,
  Layout2,
  Layout3,
  Layout4,
  Layout5,
  Layout6,
  Layout7,
} from "./LayoutList";
import "./Sdashboard.css";
import Sidebar from "../../Shared/Sidebar/Sidebar";
const Dashboard = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //   width: "80%",
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const handleModal = () => {
    setOpen(true);
  };

  const handleList = (id) => {
    setValue(id);
    setOpen(false);
    console.log(id);
  };
  const options_list = [
    {
      id: 1,
      title: "Layout-1",
      list: [
        {
          id: 1,
          list: "Fill summary",
        },
        {
          id: 2,
          list: "Product summary",
        },
        { id: 3, list: "Financial summary" },
        {
          id: 4,
          list: "Ownership",
        },
      ],
    },
    {
      id: 2,
      title: "Layout-2",
      list: [
        {
          id: 1,
          list: "Overview",
        },
        {
          id: 2,
          list: "Financial Profile",
        },
        { id: 3, list: "Key News" },
        {
          id: 4,
          list: "Market Metrics",
        },
      ],
    },
    {
      id: 3,
      title: "Layout-3",
      list: [
        {
          id: 1,
          list: "Overview",
        },
        {
          id: 2,
          list: "Financial Profile",
        },
        { id: 3, list: "Share Price Performance" },
        {
          id: 4,
          list: "Vehicle Production",
        },
      ],
    },
    {
      id: 4,
      title: "Layout-4",
      list: [
        {
          id: 1,
          list: "Overview",
        },
        {
          id: 2,
          list: "Key Financial",
        },
        { id: 3, list: "Share Price Performance" },
        {
          id: 4,
          list: "Key Ratio",
        },
      ],
    },
    {
      id: 5,
      title: "Layout-5",
      list: [
        {
          id: 1,
          list: "Overview",
        },
        {
          id: 2,
          list: "Financial Profile",
        },
        { id: 3, list: "Share Price Performance" },
        {
          id: 4,
          list: "Revenue Breakdown by Service Line",
        },
      ],
    },
    {
      id: 6,
      title: "Layout-6",
      list: [
        {
          id: 1,
          list: "Overview",
        },
        {
          id: 2,
          list: "Financial Profile",
        },
        { id: 3, list: "Share Price Performance" },
        {
          id: 4,
          list: "Key News",
        },
      ],
    },
    {
      id: 7,
      title: "Layout-7",
      list: [
        {
          id: 1,
          list: "Overview",
        },
        {
          id: 2,
          list: "Revenue Breakdown by Service Line",
        },
        { id: 3, list: "Segment Overviews" },
      ],
    },
  ];
  return (
    <>
      <div className="symanticdashboard" style={{ backgroundColor: "white" }}>
        <div className=" row symantic-grid">
          <div
            className="sidebar-flex-main d-flex flex-column align-items-center justify-content-between p-3"
            style={{ backgroundColor: "#F5F9FF", minHeight: "100vh" }}
          >
            {/* top part */}
            <Sidebar />
          </div>
          {/* left part  */}
          <div className="symantic-right p-3 mx-auto">
            <Header isLogo={false} value={value} handleClick={handleModal} />

            {/* layout cards */}
            {/* <LayoutList /> */}
            {value === 1 ? (
              <Layout1 />
            ) : value === 2 ? (
              <Layout2 />
            ) : value === 3 ? (
              <Layout3 />
            ) : value === 4 ? (
              <Layout4 />
            ) : value === 5 ? (
              <Layout5 />
            ) : value === 6 ? (
              <Layout6 />
            ) : value === 7 ? (
              <Layout7 />
            ) : (
              <Layout1 />
            )}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div className="row grid-center d-flex">
              <div className="modal-option-container d-flex flex-column gap-3  overflow-auto p-4 w-100">
                {options_list.map((list) => {
                  return (
                    <>
                      <div
                        className="modal-option-main-block p-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleList(list.id)}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="modal-option-block"></div>
                          <div>
                            <div>{list.title}</div>
                            <ul className="list d-flex">
                              {list.list.map((li) => {
                                return (
                                  <>
                                    <li className="text-nowrap">{li.list}</li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Dashboard;
