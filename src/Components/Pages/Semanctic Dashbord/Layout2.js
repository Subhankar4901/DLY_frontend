import React from "react";
import Card from "../../Shared/Card";
import { chart } from "../../Image/Layouts";
import "./Sdashboard.css";
const Layout2 = () => {
  return (
    <div
      className="d-flex justify-content-center gap-3 align-self-stretch  flex-wrap layout-container mx-auto"
      style={{ width: "100%" }}
    >
      <div className="d-flex flex-column gap-3" style={{ width: "40%" }}>
        <Card
          title={"Overview"}
          button_title={"Suggest Edit"}
          pencil_show={true}
          style={{ height: "30%" }}
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
        <Card
          title={"Key News"}
          button_title={"View More"}
          style={{ height: "70%" }}
        >
          <div className="l2-c3-body-box d-flex flex-column gap-3  overflow-auto mt-3 w-100">
            <div classNAme="d-flex flex-column gap-3">
              <div className="l2-c3-body-box-title d-flex justify-content-between">
                <div>BEIJING REVIEW</div>
                <div>30 Jan 2021</div>
              </div>
              <div>
                Chinese battery giant extends supply agreement with Tesla.
              </div>
            </div>
          </div>
          <div className="l2-c3-body-box d-flex flex-column gap-3  overflow-auto mt-3 w-100">
            <div className="d-flex flex-column gap-3">
              <div className="l2-c3-body-box-title d-flex justify-content-between">
                <div>BEIJING REVIEW</div>
                <div>30 Jan 2021</div>
              </div>
              <div>
                Chinese battery giant extends supply agreement with Tesla.
              </div>
            </div>
          </div>
          <div className="l2-c3-body-box d-flex flex-column gap-3  overflow-auto mt-3 w-100">
            <div className="d-flex flex-column gap-3">
              <div className="l2-c3-body-box-title d-flex justify-content-between">
                <div>BEIJING REVIEW</div>
                <div>30 Jan 2021</div>
              </div>
              <div>
                Chinese battery giant extends supply agreement with Tesla.
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="d-flex flex-column gap-3" style={{ width: "55%" }}>
        <Card title={"Financial Profile"} button_title={"View More"}>
          <div>
            <img src={chart} height="100%" width="100%" alt="chart" />
          </div>
        </Card>
        <Card title={"Market Metrics"} button_title={"View More"}>
          <div className="d-flex gap-2">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Market Cap</td>
                  <td>Rs. 39,670 Cr.</td>
                </tr>
                <tr>
                  <td>Stock P/E</td>
                  <td>59.9</td>
                </tr>
                <tr>
                  <td>ROCE</td>
                  <td>7.36%</td>
                </tr>
                <tr>
                  <td>Sales Growth (5yrs)</td>
                  <td>1.94%</td>
                </tr>
                <tr>
                  <td>ROCE</td>
                  <td>7.36%</td>
                </tr>
                <tr>
                  <td>EPS</td>
                  <td>Rs. 3.53</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Market Cap</td>
                  <td>Rs. 39,670 Cr.</td>
                </tr>
                <tr>
                  <td>Stock P/E</td>
                  <td>59.9</td>
                </tr>
                <tr>
                  <td>ROCE</td>
                  <td>7.36%</td>
                </tr>
                <tr>
                  <td>Sales Growth (5yrs)</td>
                  <td>1.94%</td>
                </tr>
                <tr>
                  <td>ROCE</td>
                  <td>7.36%</td>
                </tr>
                <tr>
                  <td>EPS</td>
                  <td>Rs. 3.53</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Market Cap</td>
                  <td>Rs. 39,670 Cr.</td>
                </tr>
                <tr>
                  <td>Stock P/E</td>
                  <td>59.9</td>
                </tr>
                <tr>
                  <td>ROCE</td>
                  <td>7.36%</td>
                </tr>
                <tr>
                  <td>Sales Growth (5yrs)</td>
                  <td>1.94%</td>
                </tr>
                <tr>
                  <td>ROCE</td>
                  <td>7.36%</td>
                </tr>
                <tr>
                  <td>EPS</td>
                  <td>Rs. 3.53</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout2;
