import React from "react";
import image from "../../Image/FolderDashboard/image 4.png";
import "./dbox.css";
const Dbox = () => {
  return (
    <div
      className="row d-flex justify-content-center"
      style={{ maxWidth: "1500px" }}
    >
      <div className="box-filedashboard1">
        <div className="image-filedasboard text-center p-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="filedashboard-bottom  p-2">
          <div className="filedasboard-title text-center">Pitchbook</div>
        </div>
      </div>
      <div className="box-filedashboard1">
        <div className="image-filedasboard text-center p-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="filedashboard-bottom  p-2">
          <div className="filedasboard-title text-center">Memo</div>
        </div>
      </div>
      <div className="box-filedashboard1">
        <div className="image-filedasboard text-center p-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="filedashboard-bottom  p-2">
          <div className="filedasboard-title text-center">Financial model</div>
        </div>
      </div>
      <div className="box-filedashboard1">
        <div className="image-filedasboard text-center p-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="filedashboard-bottom  p-2">
          <div className="filedasboard-title text-center">Build charts</div>
        </div>
      </div>
      <div className="box-filedashboard1">
        <div className="image-filedasboard text-center p-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="filedashboard-bottom  p-2">
          <div className="filedasboard-title text-center">Sheet Templates</div>
        </div>
      </div>
      <div className="box-filedashboard1">
        <div className="image-filedasboard text-center p-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="filedashboard-bottom  p-2">
          <div className="filedasboard-title text-center">Blank Slide</div>
        </div>
      </div>
    </div>
  );
};

export default Dbox;
