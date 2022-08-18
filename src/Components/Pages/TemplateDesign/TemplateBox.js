import React from "react";
import { Link } from "react-router-dom";
import image from "../../Image/FolderDashboard/image 4.png";
import img1 from "../../Image/image 13.png";
import img2 from "../../Image/image 14.png";
import img3 from "../../Image/image 15.png";
import icon from "../../Image/Vector (1).png";
const TemplateBox = () => {
  return (
    <div className="row template mx-auto mt-5">
      <div className="box-template shadow">
        <div className="image-template text-center p-2">
          <img src={img1} alt="" className="center-img-part" height="200px" />
          <Link to="/tpopup">
            <button
              type="button"
              class="btn select btn-success"
              style={{ backgroundColor: "#2ecc71", border: "none" }}
            >
              Select
            </button>
          </Link>
        </div>
        <div className="template-bottom p-3">
          <div className="template-bottom-top d-flex mb-4 justify-content-between align-items-center">
            <div className="bottom-template-title">Private profile</div>
            <div className="bottom-template-icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="bottom-template-description mb-4">
            For companies that are not publically listed in any of the exchanges
            (Eg - NYSE, NSE).
          </div>
          <Link to="/tpopup">
            <button type="button" class="btn w-100 btn-primary">
              Preview
            </button>
          </Link>
        </div>
      </div>
      <div className="box-template shadow">
        <div className="image-template text-center p-2">
          <img src={img2} alt="" height="200px" />
          <Link to="/tpopup">
            <button
              type="button"
              class="btn select btn-success"
              style={{ backgroundColor: "#2ecc71", border: "none" }}
            >
              Select
            </button>
          </Link>
        </div>
        <div className="template-bottom p-3">
          <div className="template-bottom-top d-flex mb-4 justify-content-between align-items-center">
            <div className="bottom-template-title">Public profile</div>
            <div className="bottom-template-icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="bottom-template-description mb-4">
            For companies that are not publically listed in any of the exchanges
            (Eg - NYSE, NSE).
          </div>
          <Link to="/tpopup">
            <button type="button" class="btn w-100 btn-primary">
              Preview
            </button>
          </Link>
        </div>
      </div>
      <div className="box-template shadow">
        <div className="image-template text-center p-2">
          <img src={img3} alt="" height="200px" />
          <Link to="/tpopup">
            <button
              type="button"
              class="btn select btn-success"
              style={{ backgroundColor: "#2ecc71", border: "none" }}
            >
              Select
            </button>
          </Link>
        </div>
        <div className="template-bottom p-3">
          <div className="template-bottom-top d-flex mb-4 justify-content-between align-items-center">
            <div className="bottom-template-title">Short Profile</div>
            <div className="bottom-template-icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="bottom-template-description mb-4">
            For creating a tracker of multiple companies with in an industry or
            sector.
          </div>
          <Link to="/tpopup">
            <button type="button" class="btn w-100 btn-primary">
              Preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateBox;
