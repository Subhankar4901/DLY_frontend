import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  border: "none",
};

export default function Popup({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="popup">
        <div className="mark bgcolor px-4 py-2" onClick={onClose}>
          Mark as complete
        </div>
        <div className="mark px-4 py-2" onClick={onClose}>
          Archive project
        </div>
        <div className="mark px-4 py-2" onClick={onClose}>
          Delete project
        </div>
      </div>
    </Modal>
  );
}
