import React from "react";
import { Link } from "react-router-dom";
import TemplateBox from "./TemplateBox";

const Template = () => {
  return (
    <div className="mx-auto mb-3 mt-5" style={{ width: "90%" }}>
      {/* selectbox */}
      <div className="flext-part d-flex justify-content-between align-items-center mb-3">
        <div className="select-box mb-3">
          <div selected style={{ fontSize: "18px" }}>
            Document Setup
          </div>

          <div className="bottom-text-document">
            Choose and setup your document here
          </div>
        </div>
        {/* icon-group-part */}

        <div className="new-project">
          <Link to="/filedashboard">
            <button type="button" class="btn new-project-btn py-2 btn-danger">
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <TemplateBox />
    </div>
  );
};

export default Template;
