import React from "react";
import Popup from "./Modal/Popup";

const Filebox = ({ alldata }) => {
  console.log(alldata[1]);
  const { title, min, img } = alldata;
  const [open1, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="box-filedashboard" style={{ width: "100%" }}>
      {/* <div className="image-filedasboard p-2">
        <img src={img} alt="" className="img-fluid" />
      </div> */}
      <div className="filedashboard-list-bottom d-flex  p-3">
        <div className="filedashboard-flex">
          <div className="filedasboard-title">{title}</div>
          <div className="filedashboard-details">Open {min} days ago</div>
        </div>
        <div onClick={handleOpen}>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <Popup open={open1} onClose={handleClose} />
    </div>
  );
};

export default Filebox;
