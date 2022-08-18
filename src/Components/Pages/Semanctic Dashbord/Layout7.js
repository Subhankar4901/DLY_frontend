import React from "react";
import Card from "../../Shared/Card";
import { graph, chart } from "../../Image/Layouts";

const Layout7 = () => {
  return (
    <div className="d-flex justify-content-center gap-3 align-self-stretch  flex-wrap layout-container mx-auto">
      <div className="align-items-stretch" style={{ width: "40%" }}>
        <Card
          title={"Overview"}
          button_title={"Suggest Edit"}
          pencil_show={true}
          style={{ minHeight: "100%" }}
        >
          <div className="l2-c1-body mt-3">
            Tesla is a company that designs, develops, manufactures, and sells
            electric vehicles and energy storage systems. It operates in two
            segments: automatize and energy generation and storage. In addition,
            Tesla provides electric vehicle powertrain components and systems to
            other manufactures and installs, operates, and maintains solar and
            energy storage products. Read More
          </div>
        </Card>
      </div>
      <div style={{ width: "55%" }}>
        <Card
          title={"Key Finance "}
          button_title={"View More"}
          style={{ minHeight: "100%" }}
        >
          <div
            className="d-flex justify-content-center mt-4"
            style={{ height: "100%", width: "100%" }}
          >
            <img src={graph} height="30%" width="30%" alt="graph" />
          </div>
        </Card>
      </div>
      <div style={{ width: "96%" }}>
        <Card
          title={"Share Price Performance"}
          button_title={"View More"}
          style={{ minHeight: "100%", minWidth: "100%" }}
        >
          <div className="d-flex justify-content-between gap-5 p-3">
            <div
              className="l2-c3-body-box d-flex flex-column gap-3  overflow-auto mt-3"
              style={{ width: "30%" }}
            >
              <div>Generation Segment (~37% of Revenues):</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
                aliquet justo, sed auctor dolor. In tristique lacus augue, ac
                aliquet leo sollicitudin vel. Phasellus quis est non nisl
                venenatis pretium. venenatis pretium. venenatis pretium.{" "}
                venenatis pretium.{" "}
              </div>
            </div>
            <div style={{ width: "30%" }}>
              <div className="d-flex flex-column mt-3 gap-2 w-100">
                <div>Generation Segment (~37% of Revenues):</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  in aliquet justo, sed auctor dolor. In tristique lacus augue,
                  ac aliquet leo sollicitudin vel. Phasellus quis est non nisl
                  venenatis pretium.{" "}
                </div>
              </div>
            </div>
            <div style={{ width: "30%" }}>
              <div className="d-flex flex-column gap-2">
                <div className="l2-c3-body-box d-flex flex-column gap-3  overflow-auto mt-3">
                  <div>Generation Segment (~37% of Revenues):</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis in aliquet justo, sed auctor dolor. In tristique lacus
                    augue, ac aliquet leo sollicitudin vel. Phasellus quis est
                    non nisl venenatis pretium. non nisl venenatis pretium. non
                    nisl venenatis pretium. non nisl venenatis pretium. non nisl
                    venenatis pretium. non nisl venenatis pretium. non nisl
                    venenatis pretium.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout7;
