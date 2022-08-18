import React from "react";
import Card from "../../Shared/Card";
import { graph, chart } from "../../Image/Layouts";

const Layout4 = () => {
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
            segments: automative and energy generation and storage. In addition,
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
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>Total Gross Profit</td>
                <td>2.2B</td>
              </tr>
              <tr>
                <td>Tesla Net Income</td>
                <td>496M</td>
              </tr>
              <tr>
                <td>Tesla Cash, 31-Dec-2020</td>
                <td>19.4</td>
              </tr>
              <tr>
                <td>Tesla Gross Profit Margin</td>
                <td>21.3%</td>
              </tr>
              <tr>
                <td>Tesla EBIT</td>
                <td>594M</td>
              </tr>
              <tr>
                <td>EPS</td>
                <td>Rs. 3.53</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <div style={{ width: "55%" }}>
        <Card
          title={"Share Price Performance"}
          button_title={"View More"}
          style={{ minHeight: "100%" }}
        >
          <div>
            <img src={chart} height="100%" width="100%" alt="chart" />
          </div>
        </Card>
      </div>
      <div style={{ width: "40%" }}>
        <Card
          title={"Key Ration"}
          button_title={"View More"}
          style={{ minHeight: "100%" }}
        >
          <div>
            <img src={chart} height="100%" width="100%" alt="chart" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout4;
