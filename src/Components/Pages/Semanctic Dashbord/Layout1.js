import React from "react";
import Card from "../../Shared/Card";
import { laptop, graph } from "../../Image/Layouts";

const Layout1 = () => {
  return (
    <div className="d-flex justify-content-center gap-3 align-self-stretch  flex-wrap layout-container mx-auto">
      <div className="align-items-stretch" style={{ width: "48%" }}>
        <Card
          title={"Fill Summary"}
          button_title={"View More"}
          style={{ minHeight: "100%" }}
        >
          <div className="mt-3">Focus Questions</div>
          <ul className=" ">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              velit arcu, feugiat vel pulvinar sed, mollis sit amet velit.
              Suspendisse.{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              velit arcu, feugiat vel pulvinar sed, mollis sit amet velit.
              Suspendisse.{" "}
            </li>
          </ul>
        </Card>
      </div>
      <div style={{ width: "48%" }}>
        <Card
          button_title={"View More"}
          title={"Product Summary"}
          subtitle={"8% more in stratrgic plan dashboard"}
          style={{ minHeight: "100%" }}
        >
          <div className="d-flex justify-content-center p-4">
            <img src={laptop} heigh="50%" width="50%" alt="laptop" />
          </div>
        </Card>
      </div>
      <div style={{ width: "48%" }}>
        <Card
          title={"Financial Summary"}
          button_title={"View More"}
          style={{ minHeight: "100%" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SERVICES</th>
                <th scope="col">Status</th>
                <th scope="col">Cumulative Utilization (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Presentation</td>
                <td>Profit</td>
                <td>
                  20%
                  <div className="progress">
                    <div
                      className="progress-bar w-25"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>Profit</td>
                <td>
                  20%
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Visualization</td>
                <td>Loss</td>
                <td>
                  20%
                  <div className="progress">
                    <div
                      className="progress-bar w-25"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Report</td>
                <td>Profit</td>
                <td>
                  20%
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Chatbot</td>
                <td>Profit</td>
                <td>
                  20%
                  <div className="progress" style={{ height: "%" }}>
                    <div
                      className="progress-bar w-100"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <div style={{ width: "48%" }}>
        <Card
          button_title={"View More"}
          title={"Ownership"}
          subtitle={"8% more in 2021"}
          style={{ minHeight: "100%" }}
        >
          <div className="d-flex justify-content-center align-items-center p-3">
            <img src={graph} heigh="40%" width="40%" alt="graph" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout1;
