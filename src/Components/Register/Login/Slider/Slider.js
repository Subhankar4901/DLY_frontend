import React from "react";
import login from "../../../Image/FolderDashboard/Group.svg";
import icon from "../../../Image/FolderDashboard/Group 222.svg";
import "./Slider.css";
const Slider = () => {
	return (
		<div
			id="carouselExampleDark"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div class="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div class="carousel-inner">
				<div
					class="carousel-item active"
					style={{ height: "550px", backgroundColor: "#e2ebfc" }}
				>
					<img src={login} class="d-block w-100 img-fluid" alt="..." />
					<div class="carousel-caption  d-md-block">
						<img
							src={icon}
							height="40px"
							className="mb-2"
							width="40px"
							alt=""
						/>
						<h4 className="title-carousoul">Dynamic Dataset</h4>
						<div className="line-carousol"></div>
						<p className="paragrah-title mt-3 mb-5">
							Dynamic dataset is a way of narrowing the number of choices a user
							can make on a form field
						</p>
					</div>
				</div>
				<div
					class="carousel-item"
					style={{ height: "550px", backgroundColor: "#e2ebfc" }}
				>
					<img src={login} class="d-block w-100 img-fluid" alt="..." />
					<div class="carousel-caption  d-md-block">
						<img
							src={icon}
							height="40px"
							className="mb-2"
							width="40px"
							alt=""
						/>
						<h4 className="title-carousoul">Dynamic Dataset</h4>
						<div className="line-carousol"></div>
						<p className="paragrah-title mt-3 mb-5">
							Dynamic dataset is a way of narrowing the number of choices a user
							can make on a form field
						</p>
					</div>
				</div>
				<div
					class="carousel-item"
					style={{ height: "550px", backgroundColor: "#e2ebfc" }}
				>
					<img src={login} class="d-block w-100 img-fluid" alt="..." />
					<div class="carousel-caption d-md-block">
						<img
							src={icon}
							height="40px"
							className="mb-2"
							width="40px"
							alt=""
						/>
						<h4 className="title-carousoul">Dynamic Dataset</h4>
						<div className="line-carousol"></div>
						<p className="paragrah-title mt-3 mb-5">
							Dynamic dataset is a way of narrowing the number of choices a user
							can make on a form field
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
