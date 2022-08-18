import React from "react";
import Dbox from "./Dbox";
import "./Document.css";
const Document = () => {
  return (
    <div
      className="container mx-auto center-part-document"
      style={{ width: "1500px" }}
    >
      {/* selectbox */}
      <div
        className="mx-auto flext-part d-flex justify-content-between align-items-center mb-2"
        style={{ maxWidth: "84%" }}
      >
        <div className="select-box mb-3">
          <div selected style={{ fontSize: "18px" }}>
            Document setup
          </div>

          <div className="bottom-text-document">
            Choose and setup document here
          </div>
        </div>
        {/* icon-group-part */}

        <div className="new-project">
          <button type="button" class="btn new-project-btn py-2 btn-danger">
            Cancel
          </button>
        </div>
      </div>
      <Dbox />
      <div className="center-button text-center mt-4 mb-4">
        <button type="button" class="btn btn-outline-primary px-5 me-4">
          Previus page
        </button>
        <button type="button" class="btn btn-primary px-5">
          Next page
        </button>
      </div>
    </div>
  );
};

export default Document;
