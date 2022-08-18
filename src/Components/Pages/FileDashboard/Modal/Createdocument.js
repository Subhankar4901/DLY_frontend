import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../../Image/Group 228.png";
import img2 from "../../../Image/Group 234.png";
import column from "../../../Image/Group 231.png";
import Modal from "@mui/material/Modal";
import "./Popupdocument.css";
import { Link } from "react-router-dom";
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

export default function CreateDocument({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="container">
          <div className="row grid-center d-flex">
            {/* <div className="document-box">
              <div className="plus-icon">
                <div className="absoulte-icon">
                  <Link to="documentsetup2">
                    <i class="fas fa-plus"></i>
                  </Link>
                </div>
              </div>
              <div className="bottom-box d-flex justify-content-center align-items-center p-3">
                <div className="bottom-box-img">
                  <img src={img1} alt="" />
                </div>
                <div className="bottombox-text ms-2">Create Blank Document</div>
              </div>
            </div> */}
            <div className="document-box d-flex flex-column align-items-center justify-content-center gap-3">
              <div className="heading-01">
                <input type="text" className="p-2" placeholder="heading-01" />
              </div>
              <button
                type="button"
                class="btn new-project-btn py-2 btn-primary"
              >
                + New Project
              </button>
              {/* <div className="plus-icon">
                <div className="absoulte-icon">
                  <Link to="templatedesign">
                    <i class="fas fa-plus"></i>
                  </Link>
                </div>
              </div>
              <div className="bottom-box d-flex justify-content-center align-items-center p-3">
                <div className="bottom-box-img">
                  <img src={column} alt="" />
                </div>
                <div className="bottombox-text ms-2">Use a Template</div>
              </div> */}
            </div>
            {/* <div className="document-box">
              <div className="plus-icon">
                <div className="absoulte-icon">
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div className="bottom-box d-flex justify-content-center align-items-center p-3">
                <div className="bottom-box-img">
                  <img src={img2} alt="" />
                </div>
                <div className="bottombox-text ms-2">Upload a Document</div>
              </div>
            </div> */}
          </div>
        </div>
      </Box>
    </Modal>
  );
}
