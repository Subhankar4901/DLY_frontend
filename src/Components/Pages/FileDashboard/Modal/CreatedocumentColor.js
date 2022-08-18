import React, { useState } from "react";
import reactCSS from "reactcss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../../Image/Group 228.png";
import img2 from "../../../Image/Group 234.png";
import column from "../../../Image/Group 231.png";
import Modal from "@mui/material/Modal";
import "./Popupdocument.css";
import { Link } from "react-router-dom";
import ColorPicker from "../../../Shared/ColorPicker";
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
  const [color1, setColor1] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const [color2, setColor2] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const [color3, setColor3] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const [color4, setColor4] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const [color5, setColor5] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const handleChangeComplete1 = (color) => {
    setColor1(color.rgb);
  };
  const handleChangeComplete2 = (color) => {
    setColor2(color.rgb);
  };
  const handleChangeComplete3 = (color) => {
    setColor3(color.rgb);
  };
  const handleChangeComplete4 = (color) => {
    setColor4(color.rgb);
  };
  const handleChangeComplete5 = (color) => {
    setColor5(color.rgb);
  };
  const [state, setState] = useState({
    displayColorPicker1: false,
    displayColorPicker2: false,
    displayColorPicker3: false,
    displayColorPicker4: false,
    displayColorPicker5: false,
  });
  const handleClick = (colorName) => {
    setState({ ...state, [colorName]: !state[colorName] });
  };
  // const handleClose = () => {
  //   setDisplayColorPicker(false);
  // };
  const handleClose = (colorName) => {
    setState({ ...state, [colorName]: false });
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="container">
          <div className="row grid-center d-flex color-modal-header">
            select 6 colors from the color picker and create your custom palette
          </div>
          <hr />
          <div className="d-flex flex-column gap-4 mt-4">
            <div className="d-flex flex-column gap-3">
              <div className="color-texbox-label">
                Give your color palette a number
              </div>
              <input type="text" placeholder="Number goes here" />
            </div>
            <div className="d-flex gap-3">
              <ColorPicker
                color={color1}
                click={() => handleClick("displayColorPicker1")}
                close={() => handleClose("displayColorPicker1")}
                showPicker={state.displayColorPicker1}
                complete={handleChangeComplete1}
              />
              <ColorPicker
                color={color2}
                click={() => handleClick("displayColorPicker2")}
                close={() => handleClose("displayColorPicker2")}
                showPicker={state.displayColorPicker2}
                complete={handleChangeComplete2}
              />
              <ColorPicker
                color={color3}
                click={() => handleClick("displayColorPicker3")}
                close={() => handleClose("displayColorPicker3")}
                showPicker={state.displayColorPicker3}
                complete={handleChangeComplete3}
              />
              <ColorPicker
                color={color4}
                click={() => handleClick("displayColorPicker4")}
                close={() => handleClose("displayColorPicker4")}
                showPicker={state.displayColorPicker4}
                complete={handleChangeComplete4}
              />
              <ColorPicker
                color={color5}
                click={() => handleClick("displayColorPicker5")}
                close={() => handleClose("displayColorPicker5")}
                showPicker={state.displayColorPicker5}
                complete={handleChangeComplete5}
              />
            </div>
          </div>
          <div className="button-part text-center d-flex justify-content-end gap-2">
            <button
              type="button"
              class="btn btn-outline-primary mt-5 px-5"
              style={{ border: "none" }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary mt-5 px-5 me-2"
              onClick={onClose}
            >
              Create
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
