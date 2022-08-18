import React from "react";
import { Link } from "react-router-dom";
import CustomizationBox from "./CustomizationBox";

const Customization = () => {
  return (
    <div className="mx-auto documentsetup2 mb-3" style={{ width: "84%" }}>
      {/* selectbox */}
      <div className="flext-part d-flex justify-content-between align-items-center mb-3">
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
          <Link to="/tpopup">
            <button type="button" class="btn new-project-btn py-2 btn-danger">
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <CustomizationBox />
    </div>
  );
};

export default Customization;
