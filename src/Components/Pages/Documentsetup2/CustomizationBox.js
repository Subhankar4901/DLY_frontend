import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Date from "./Date";
import arrow from "../../Image/right_arrow.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import CreateDocument from "../FileDashboard/Modal/CreatedocumentColor";

const CustomizationBox = () => {
  const [age, setAge] = useState(1);
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const menuProps = {
    PaperProps: {
      sx: {
        paddingLeft: "30px",
      },
    },
  };
  const colorList = [
    {
      id: 1,
      number: 1,
      colors: [
        { color: "#000000" },
        { color: "#ED1C24" },
        { color: "#00A2E8" },
        { color: "#22B14C" },
        { color: "#A349A4" },
        { color: "#8AEBB1" },
      ],
    },
    {
      id: 2,
      number: 2,
      colors: [
        { color: "#8085AB" },
        { color: "rgba(237, 28, 36, 0.37)" },
        { color: "#00A2E8" },
        { color: "#75AF86" },
        { color: "#D5AFD6" },
        { color: "#A3A990" },
      ],
    },
    {
      id: 3,
      number: 3,
      colors: [
        { color: "#000000" },
        { color: "#6FBDD6" },
        { color: "#692D8A" },
        { color: "#4DE47A" },
        { color: "#A9B186" },
        { color: "#CDB2AC" },
      ],
    },
    {
      id: 4,
      number: 4,
      colors: [
        { color: "#90A8CC" },
        { color: "#B63BB9" },
        { color: "#C6B28C" },
        { color: "#6A6A51" },
        { color: "#5360D8" },
        { color: "#955E8C" },
      ],
    },
    {
      id: 5,
      number: 5,
      colors: [
        { color: "#000000" },
        { color: "#ED1C24" },
        { color: "#00A2E8" },
        { color: "#22B14C" },
        { color: "#A349A4" },
        { color: "#B5E61D" },
      ],
    },
  ];
  if (colorList.length > 0) {
    let firstElement = colorList[0];
    console.log(firstElement, firstElement.colors);
  }
  return (
    <>
      <div className=" d-flex justify-content-between gap-3 mx-auto">
        <div className="customization-box p-3 w-50">
          <div className="presntation mt-3 mb-3 w-50">Presentation Format</div>
          <div className="middle-part mb-4">
            <div className="left-middle-part text-center">
              <input
                type="text"
                className="p-2 text-background w-100"
                placeholder="heading-01"
              />
              <div className="cabin-part d-flex mt-1 gap-1">
                {/* <div className="cabin "> */}
                <input
                  type="text"
                  className="p-2 w-75 text-background"
                  placeholder="Cabin"
                />
                {/* </div> */}

                <input
                  type="text"
                  className="p-2 w-25 cabin-no text-background"
                  placeholder="24"
                />
              </div>
            </div>
            <div className="right-middle-part">
              <div className="left-middle-part text-center">
                <input
                  type="text"
                  className="p-2 text-background w-100"
                  placeholder="heading-01"
                />
                <div className="cabin-part d-flex mt-1 gap-1">
                  {/* <div className="cabin "> */}
                  <input
                    type="text"
                    className="p-2 w-75 text-background"
                    placeholder="Cabin"
                  />
                  {/* </div> */}

                  <input
                    type="text"
                    className="p-2 w-25 cabin-no text-background"
                    placeholder="24"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-part-presentation mb-5">
            <div className="left-middle-part text-center">
              <input
                type="text"
                className="p-2 text-background w-100"
                placeholder="Cabin"
              />

              <div className="cabin-part d-flex gap-1 mt-1">
                {/* <div className="cabin w-75"> */}
                <input
                  type="text"
                  className="p-2 w-75 text-background"
                  placeholder="Cabin"
                />
                {/* </div> */}
                <input
                  type="text"
                  className="p-2 w-25 cabin-no text-background"
                  placeholder="14"
                />
              </div>
            </div>
            <div className="left-middle-part">
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ height: "43px" }}
              >
                <div className="choose-color-palette">Choose your palette</div>
                <div className="create-new-color pointer" onClick={handleOpen}>
                  Create New
                </div>
              </div>

              {/* <div className="cabin w-75"> */}
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label"></InputLabel>
                <Select
                  // labelId="demo-multiple-name-label"
                  value={age}
                  label
                  onChange={handleChange}
                  MenuProps={menuProps}
                  defaultValue={1}
                >
                  {/* <MenuItem value={1}>Select color palette</MenuItem> */}
                  {colorList.map((list) => (
                    <MenuItem value={list.id}>
                      <div className="d-flex gap-2">
                        <div>{list.number} -</div>
                        <div className="d-flex gap-2">
                          {list.colors.map((colors) => (
                            <div
                              style={{
                                backgroundColor: colors.color,
                                padding: "10px",
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <CirclePicker /> */}

              {/* <div className="color-grid">
              <div className="color cursor"></div>
              <div className="color1 cursor"></div>
              <div className="color2 cursor"></div>
              <div className="color3 cursor"></div>
              <div className="color4 cursor"></div>
              <div className="color5 cursor"></div>
              <div className="color6 cursor"></div>
              <div className="color7 cursor"></div>
              <div className="color8 cursor"></div>
              <div className="color9 cursor"></div>
            </div> */}
            </div>
          </div>
          <div className="button-part text-center d-flex justify-content-center">
            <button type="button" class="btn btn-primary mt-5 px-5 me-2">
              Preview
            </button>
            <button type="button" class="btn btn-outline-primary mt-5 px-5">
              Reset
            </button>
          </div>
        </div>
        <div className="customization-box p-3 w-50">
          <div className="presntation mt-3 mb-2 w-50">Data Referancing</div>

          <div className="d-flex justify-content-center mb-3 mt-4 flex-column">
            <div className="company">Company</div>
            <select
              class="form-select border form-select-lg  w-100 p-2 mt-1"
              aria-label=".form-select-lg example"
            >
              <option selected>Name of the Company</option>
              <option value="1">Name of the Company</option>
              <option value="2">Name of the Company</option>
              <option value="3"> Name of the Company</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-2 mt-2">
            <div className="company">Date</div>
            <Date />
          </div>
          <div className="d-flex flex-column mt-2">
            <div className="company mt-2">Peers</div>
            <select
              class="form-select border form-select-lg mb-3 w-100 p-2 mt-1"
              aria-label=".form-select-lg example"
            >
              <option selected>Name of the Company</option>
              <option value="1">Name of the Company</option>
              <option value="2">Name of the Company</option>
              <option value="3"> Name of the Company</option>
            </select>
          </div>

          <div className="button-part text-center">
            <Link to="/sidebar">
              <button type="button" class="btn btn-primary mt-5 px-5 me-2">
                Set
              </button>
            </Link>
            <button type="button" class="btn btn-outline-primary mt-5 px-5">
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
        <Link to="/semanticsdashboard" style={{ textDecoration: "none" }}>
          <div className="pagination-start cursor">Start</div>
        </Link>
        <div>
          <img src={arrow} />
        </div>
      </div>
      <CreateDocument open={open} onClose={handleClose} />
    </>
  );
};

export default CustomizationBox;
