import React, { useState } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { FileUploader } from "react-drag-drop-files";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import img1 from "../../../Image/Group 228.png";
import img2 from "../../../Image/Group 234.png";
import column from "../../../Image/Group 231.png";
import {
  aws,
  google_cloud,
  ibm,
  oracle,
  salesforce,
} from "../../../Image/FileDashboard/index";
import Modal from "@mui/material/Modal";
import "./Popupdocument.css";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  // backgroundColor: "white",
  boxShadow: 24,
  p: 4,
};

const styleUpload = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "60%",
  minHeight: "75%",
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
};

export default function CreateDocument({ open, onClose }) {
  const [modalState, setModalState] = React.useState({
    openTextModal: false,
  });
  const [value, setValue] = React.useState("1");
  const handleModal = (modalName) => {
    setModalState({ ...modalState, [modalName]: !modalState[modalName] });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const handleFile = (file) => {
    setFile(file);
  };
  const quick_access = [
    {
      id: 1,
      value: "IBM",
      src: ibm,
    },
    {
      id: 2,
      value: "Salesforce",
      src: salesforce,
    },
    {
      id: 3,
      value: "AWS",
      src: aws,
    },
    {
      id: 4,
      value: "Oracle",
      src: oracle,
    },
    {
      id: 5,
      value: "Google",
      src: google_cloud,
    },
    {
      id: 6,
      value: "Google",
      src: google_cloud,
    },
  ];
  const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#80BFFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
  };

  const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: #7c7c7c;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      color: #fff;
      border-radius: 3px;
      outline: 2px solid ${blue[200]};
      outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: #3b7ded;
      color: white;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;

  const TabsList = styled(TabsListUnstyled)`
    min-width: max-content;
    background-color: rgba(59, 125, 237, 0.24);
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div className="row grid-center">
              <div className="document-box cursor">
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
                  <div className="bottombox-text ms-2">
                    Create Blank Document
                  </div>
                </div>
              </div>
              <div className="document-box cursor">
                <div className="plus-icon">
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
                </div>
              </div>
              <div className="document-box cursor">
                <div
                  className="plus-icon"
                  onClick={() => handleModal("openTextModal")}
                >
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
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={modalState.openTextModal}
        onClose={() => handleModal("openTextModal")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleUpload}>
          <div className="container">
            <div className="row grid-center d-flex">
              <TabsUnstyled defaultValue={0}>
                {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
                <TabsList
                  className="w-25"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab className="text-nowrap">upload document</Tab>
                  <Tab className="text-nowrap">connect to cloud</Tab>
                </TabsList>
                {/* </Box> */}
                <TabPanel value={0}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "40vh" }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <FileUploader
                        handleChange={handleFile}
                        name="file"
                        types={fileTypes}
                      />
                    </div>
                  </div>
                  <div className="button-part text-center d-flex justify-content-end gap-2 fix-position-button">
                    <button
                      type="button"
                      class="btn  btn-outline-primary mt-5 px-5"
                      onClick={() => handleModal("openTextModal")}
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary mt-5 px-5 me-2"
                      onClick={() => handleModal("openTextModal")}
                    >
                      Continue
                    </button>
                  </div>
                </TabPanel>
                <TabPanel value={1}>
                  <div className="d-flex flex-column gap-2">
                    <div className="company">Peers</div>
                    <input
                      type="text"
                      className="p-1"
                      placeholder="Subheading"
                    />
                  </div>
                  <div className="d-flex flex-column mt-3 gap-2">
                    <div className="company">Quick Access</div>
                    <div className="d-flex justify-content-center">
                      {quick_access.map(({ value, src }) => {
                        return (
                          <>
                            <div className="d-flex flex-column align-items-center gap-2">
                              <img src={src} />
                              <div>{value}</div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="button-part text-center d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      class="btn btn-outline-primary mt-5 px-5"
                      onClick={() => handleModal("openTextModal")}
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary mt-5 px-5 me-2"
                      onClick={() => handleModal("openTextModal")}
                    >
                      Continue
                    </button>
                  </div>
                </TabPanel>
              </TabsUnstyled>

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
              {/* <div className="document-box d-flex flex-column align-items-center justify-content-center gap-3">
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              /> */}
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
              {/* </div> */}
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
    </>
  );
}
