import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../Image/FolderDashboard/ri_file-mark-fill.svg";
import icon2 from "../../Image/ri_delete-bin-fill.png";
import icon3 from "../../Image/mdi_checkbox-marked.png";
const Single = ({ carddata }) => {
  const { title, file, description } = carddata;
  console.log(carddata);
  return (
    <div className="p-4 border rounded design">
      <div
        className="box"
        style={{
          position: "relative",
          bottom: "0",
          height: "100%",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="left-part mb-3 ">
            <div className="title-project">{title}</div>
            <div className="details-project">{description}</div>
          </div>
          <Link to="filedashboard">
            <button type="button" className="btn-files mb-3">
              {file} files
            </button>
          </Link>
        </div>
        <div
          className=" d-flex flex-column justify-content-end"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <div className="icon-project-grid d-flex  justify-content-between ">
            <Link to="/">
              <img src={icon2} width="30px" alt="" />
            </Link>
            <Link to="/">
              <img src={icon1} width="30px" alt="" />
            </Link>
            <Link to="/">
              <img src={icon3} width="30px" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
