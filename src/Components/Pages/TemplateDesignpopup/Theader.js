import React from "react";
import logo from "../../Image/FolderDashboard/Group 45.svg";
import setting from "../../Image/FolderDashboard/Shape.svg";
import bell from "../../Image/FolderDashboard/bell.svg";
import user from "../../Image/FolderDashboard/Ellipse 1.png";
import { Link } from "react-router-dom";
const Theader = () => {
  return (
    <div className="mb-3">
      <div className="row ">
        <div className="col-12 mx-auto p-3" style={{ width: "1300px" }}>
          <div className="flex d-flex align-items-center justify-content-between">
            <div className="folder-header-logo">
              <Link to="/folderdashboard">
                <img
                  src={logo}
                  width="60px"
                  height="60px"
                  className="img-fluid logo"
                  alt=""
                />
              </Link>
            </div>
            {/* scearch-box */}

            {/* setting button */}
            <div className="left-part d-flex align-items-center">
              <div className="setting me-4">
                <img src={setting} className="setting-icon" alt="" />
              </div>
              {/* bell button */}
              <div className="bell me-5">
                <img src={bell} className="bell-icon" alt="" />
                <div className="number">
                  <p className="number-center">3</p>
                </div>
              </div>
              {/* photo image */}
              <div className="user">
                <img
                  src={user}
                  className="user-icon"
                  width="50px"
                  height="50px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theader;
