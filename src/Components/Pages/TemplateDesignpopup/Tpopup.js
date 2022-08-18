import React, { useState } from "react";
import Theader from "./Theader";
import TSlider from "./TSlider";
import image from "../../Image/image 7.png";
import "./Tpoppup.css";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header";
const Tpopup = () => {
  const [id, setId] = useState(1);
  const handleChecked = (id) => {
    setId(id);
  };
  const overView = [
    { id: 1, title: "Company overview" },
    { id: 2, title: "Business Overview" },
    { id: 3, title: "Share Price Performance" },
    { id: 4, title: "Financial Overview" },
    { id: 5, title: "Key Management" },
  ];
  return (
    <div className="">
      <div className="row">
        <div style={{ paddingInline: "5%" }}>
          <Header isLayoutButton={false} isSearch={false} isViewMore={false} />
        </div>
        <hr />
        <div className="mx-auto" style={{ width: "90%" }}>
          <div className="row mx-auto">
            <div className="col-md-7">
              <div
                id="carouselExampleIndicators"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={image}
                      class="d-block img-fluid w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={image}
                      class="d-block img-fluid w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={image}
                      class="d-block img-fluid w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
                <div className="row mt-5">
                  <div
                    className="col-md-4 active"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                  <div
                    className="col-md-4"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                  <div
                    className="col-md-4"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mx-auto  p-5 right-part">
              <div className="left-part-topup p-5">
                <div className="template">TEMPLATE</div>
                <div className="template-title">Private Profile</div>
                <div className="template-deatails mb-3">
                  For companies that are not publically listed in any of the
                  exchanges (Eg - NYSE, NSE).
                </div>
                <div className="middle-part-template p-3 mb-3">
                  {overView.map((list) => (
                    <div
                      className={
                        id === list.id
                          ? "company-overview1"
                          : "company-overview"
                      }
                      onClick={() => handleChecked(list.id)}
                    >
                      {list.title}
                    </div>
                  ))}
                  {/* <div className="company-overview1">Company overview</div>
                  <div className="company-overview">Business Overview</div>
                  <div className="company-overview">
                    Share Price Performance
                  </div>
                  <div className="company-overview">Financial Overview</div>
                  <div className="company-overview">Key Management</div> */}
                </div>
                <Link to="/documentsetup2">
                  <button type="button" class="btn w-100 btn-primary">
                    Get Started Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tpopup;
