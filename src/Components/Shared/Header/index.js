import React from "react";
import logo from "../../Image/FolderDashboard/Group 45.svg";
import setting from "../../Image/FolderDashboard/Shape.svg";
import bell from "../../Image/FolderDashboard/bell.svg";
import user from "../../Image/FolderDashboard/Ellipse 1.png";
import "./Header.css";
const index = ({
  searchStyle,
  value,
  handleClick,
  isLayoutButton = true,
  isViewMore = true,
  isLogo = true,
  isSettings = true,
  isSearch = true,
}) => {
  return (
    <>
      <div className="container-fluid mb-3">
        <div className="row border-bottom-2">
          <div
            className="col-12 mx-auto pt-3 pb-3"
            style={{ paddingInline: "0px" }}
          >
            <div className="flex d-flex align-items-center justify-content-between">
              {isLogo && (
                <div className="folder-header-logo">
                  <img
                    src={logo}
                    width="60px"
                    height="60px"
                    className="img-fluid logo"
                    alt=""
                  />
                </div>
              )}

              {/* scearch-box */}

              <div className="scearch-box d-flex gap-3">
                {isSearch && (
                  <form className="form-inline search-from my-2 w-100 my-lg-0">
                    <input
                      className="form-control search-input px-5 mr-sm-2"
                      type="search"
                      placeholder="Search Projects"
                      aria-label="Search"
                      style={searchStyle}
                    />
                    <i class="fas fa-search"></i>
                  </form>
                )}

                {isLayoutButton ? (
                  <button
                    onClick={handleClick}
                    className="btn btn-primary text-nowrap layout-button"
                  >
                    {`Layouts ${value}`}
                  </button>
                ) : (
                  ""
                )}
              </div>
              {/* setting button */}
              <div className="left-part d-flex align-items-center gap-4">
                {isViewMore ? (
                  <button
                    onClick={handleClick}
                    className="btn btn-primary text-nowrap"
                  >
                    View More
                  </button>
                ) : (
                  ""
                )}
                {isSettings && (
                  <div className="setting">
                    <img src={setting} className="setting-icon" alt="" />
                  </div>
                )}

                {/* bell button */}
                <div className="bell ">
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
    </>
  );
};

export default index;
