import React, { useEffect, useState } from "react";
import logo from "../../Image/FolderDashboard/Group 45.svg";
import semantic from "../../Image/FolderDashboard/semantics.svg";
import { Link, NavLink } from "react-router-dom";
import Group from "../../Image/Group.png";
import Delete from "../../Image/delete.png";
import Page from "../../Image/page.png";
import Print from "../../Assets/icons/print.png";
import Share from "../../Assets/icons/share.png";
import Download from "../../Assets/icons/download.png";
import Presentation from "../../Assets/icons/presentation.png";
import Analytics from "../../Assets/icons/analytics.png";
import visualization from "../../Assets/icons/visualisation.png";
import Report from "../../Assets/icons/report.png";
import Chatbot from "../../Assets/icons/chatbot.png";
const Sidebar = () => {
  const path = window.location.pathname;
  console.log({ path });
  const folderDashboard = [
    {
      id: 1,
      name: "Folder Dashboard",
      link: "/filedashboard",
      src: Page,
    },
    {
      id: 2,
      name: "Template library",
      link: "/filedashboard",
      src: Group,
    },
    {
      id: 3,
      name: "Component builderd",
      link: "/filedashboard",
      src: Delete,
    },
  ];
  const fileDashboard = [
    {
      id: 1,
      name: "Documents",
      link: "/filedashboard",
      src: Page,
    },
    {
      id: 2,
      name: "Templates",
      link: "/filedashboard",
      src: Group,
    },
    {
      id: 3,
      name: "Recently Deleted",
      link: "/filedashboard",
      src: Delete,
    },
  ];

  const semanticDashboard = [
    {
      id: 1,
      name: "Semantics",
      link: "#",
      src: Page,
    },
    {
      id: 2,
      name: "Presentation",
      link: "#",
      src: Presentation,
    },
    {
      id: 3,
      name: "Analytics",
      link: "#",
      src: Analytics,
    },
    {
      id: 4,
      name: "visualization",
      link: "#",
      src: visualization,
    },
    {
      id: 5,
      name: "Report",
      link: "#",
      src: Report,
    },
    {
      id: 6,
      name: "Chatbot",
      link: "#",
      src: Chatbot,
    },
    {
      id: 7,
      title: true,
      name: "Page Tools",
    },
    {
      id: 8,
      name: "Download",
      link: "#",
      src: Print,
    },
    {
      id: 9,
      name: "Share",
      link: "#",
      src: Share,
    },
    {
      id: 10,
      name: "Print",
      link: "#",
      src: Download,
    },
  ];

  const [color, setColor] = useState(1);
  const [sideBar, setSideBar] = useState();
  useEffect(() => {
    console.log({ path });
    if (path === "/folderdashboard") {
      setSideBar(folderDashboard);
    } else if (path === "/filedashboard") {
      setSideBar(fileDashboard);
    } else if (path === "/semanticsdashboard") {
      setSideBar(semanticDashboard);
    }
  }, [path]);

  const handleSideLinks = (id) => {
    setColor(id);
  };
  return (
    <>
      {
        (path === "/filedashboard" ||
          path === "/folderdashboard" ||
          path === "/semanticsdashboard") && (
          <>
            <div
              className={`${
                path === "/semanticsdashboard"
                  ? "sidebar-flex-responsive"
                  : "sidebar-flex"
              } d-flex flex-column align-items-center justify-content-between p-3`}
              style={{ backgroundColor: "#F5F9FF" }}
            >
              {/* top part */}
              <div
                className="sidebar p-3 mx-auto"
                style={{ backgroundColor: "#F5F9FF", height: "auto" }}
              >
                <div className="sidebar-logo text-center mb-5">
                  <img src={logo} className="img-fluid" alt="" />
                </div>
                {/* sidebar title */}
                {sideBar?.map((links) => {
                  return !links?.title ? (
                    <NavLink
                      to={links.link}
                      className="main-nav"
                      activeClassName="main-nav-active"
                    >
                      <div
                        className="sidebar-title d-flex align-items-center mb-3"
                        style={{ width: "max-content" }}
                        onClick={() => handleSideLinks(links.id)}
                      >
                        <div
                          className={`sidebar-icon me-3 p-3 ${
                            color === links.id ? "set-background-icon" : ""
                          }`}
                          style={{ backgroundColor: "#e9ecef" }}
                        >
                          <img
                            src={links.src}
                            alt="icon"
                            className={
                              color === links.id ? "set-foreground-icon" : ""
                            }
                          />
                        </div>
                        <div
                          className={`side-bar-text ${
                            color === links.id ? "side-bar-text-bold" : ""
                          }`}
                        >
                          {links.name}
                        </div>
                      </div>
                    </NavLink>
                  ) : (
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        margin: "10px 0px",
                      }}
                    >
                      {links?.name}
                    </div>
                  );
                })}
              </div>
              {/* bottom part  */}
              <div className="bottom-part  p-3">
                <span className="setting-icon mb-3 shadow">
                  <i class="fas fa-cog"></i>
                </span>
                <div className="bottom-title mt-4">Data Sources</div>
                <div className="bottom-deatails mb-3">
                  Coustmize your data sources
                </div>
                <Link to="documentsetup2">
                  <button type="button" class="bottom-btn w-100 btn btn-light">
                    Data Source Settings
                  </button>
                </Link>
              </div>
            </div>
          </>
        )
        // : (
        //   <div className="sidebar">
        //     <div
        //       className="col-lg-2  text-center"
        //       style={{
        //         backgroundColor: "#F5F9FF",
        //       }}
        //     >
        //       <div className="logo mb-5">
        //         <img src={logo} height="80px" width="80px" alt="" />
        //       </div>
        //       {/* sidebar menu start  */}
        //       <div className="sidebar-menu mt-5">
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="text">PAGE TOOLS</div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //         <div className="semantic d-flex mb-2">
        //           <div className="img-semantic">
        //             <img src={semantic} alt="" />
        //           </div>
        //           <div className="text-semantic">Semantic</div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // )
      }
    </>
  );
};

export default Sidebar;
