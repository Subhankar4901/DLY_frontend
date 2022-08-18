import React from "react";
import "./Datasource.css";
import logo from "../../../Image/FolderDashboard/Group 45.svg";
import bell from "../../../Image/FolderDashboard/bell.svg";
import collect from "../../../Image/FolderDashboard/Vector (7).svg";
import icon2 from "../../../Image/FolderDashboard/Vector (8).svg";
import icon3 from "../../../Image/FolderDashboard/clarity_list-solid-badged.svg";
import user from "../../../Image/FolderDashboard/Ellipse 1.png";
import image from "../../../Image/FolderDashboard/download (1) 1.png";
const Datasource = () => {
	return (
		<div className="filedashboard" style={{ backgroundColor: "#E2EBFC" }}>
			<div className="container-fluid">
				<div className="row file-grid-source px-5">
					<div className="sidebar-flex-source d-flex flex-column align-items-center justify-content-between p-3">
						{/* top part */}
						<div className="sidebar p-3 mx-auto">
							<div className="sidebar-logo text-center mb-5">
								<img src={logo} className="img-fluid" alt="" />
							</div>
							{/* sidebar title */}
							<div className="sidebar-title d-flex align-items-center mb-3">
								<div className="sidebar-icon me-3 shadow">
									<i class="fas fa-file-medical"></i>
								</div>
								<div className="side-bar-text">Documents</div>
							</div>
							{/* sidebar title */}
							<div className="sidebar-title d-flex align-items-center mb-3">
								<div className="sidebar-icon me-3 shadow">
									<i class="fas fa-columns"></i>
								</div>
								<div className="side-bar-text">Templates</div>
							</div>
							{/* sidebar title */}
							<div className="sidebar-title d-flex align-items-center mb-3">
								<div className="sidebar-icon shadow me-3">
									<i class="fas fa-file-medical"></i>
								</div>
								<div className="side-bar-text">Internal Data Source</div>
							</div>
							{/* sidebar title */}
							<div className="sidebar-title d-flex align-items-center mb-3">
								<div className="sidebar-icon shadow me-3">
									<i class="fas fa-file-medical"></i>
								</div>
								<div className="side-bar-text">Internal Data Source</div>
							</div>
						</div>
						{/* bottom part  */}
						<div className="bottom-part  p-3">
							<span className="setting-icon mb-3 shadow">
								<i class="fas fa-cog"></i>
							</span>
							<div className="bottom-title mt-4">Data Sources</div>
							<div className="bottom-deatails mb-3">
								Coustmize your data sources
							</div>
							<button type="button" class="bottom-btn w-100 btn btn-light">
								Data Source Settings
							</button>
						</div>
					</div>
					{/* left part  */}
					<div className="sidebar p-3 mx-auto">
						<div className="flex-part-full mb-3 p-3 d-flex align-items-center justify-content-between">
							<div className="right-part">
								<div className="right-part-title">Existing Data Source</div>
								<div className="right-part-details">
									From here you can see all the existing data sources
								</div>
							</div>
							<div className="left-part d-flex align-items-center">
								{/* bell button */}
								<div className="bell me-5">
									<img src={bell} className="bell-icon" alt="" />
									<div className="number">
										<p className="number-center">3</p>
									</div>
								</div>
								{/* photo image */}
								<div className="user">
									<img
										src={user}
										className="user-icon"
										width="50px"
										height="50px"
										alt=""
									/>
								</div>
							</div>
						</div>
						{/* slection part  */}

						{/* div part  */}
						<div className="grid-datasource">
							<div className="box-filedashboard p-4">
								<div className="text-back mb-3">back</div>
								<div className="image-filedasboard p-4">
									<img src={image} alt="" className="img-fluid" />
								</div>
								<div className="datasource-title text-center">Bloomberg</div>
								<div className="datasource-details mb-3 text-center">
									Rs. 45k/month
								</div>
								<button type="button" className="btn btn-primary w-100">
									Connect
								</button>
							</div>
							<div className="box-filedashboard p-4">
								<div className="text-back mb-3">back</div>
								<div className="image-filedasboard p-4">
									<img src={image} alt="" className="img-fluid" />
								</div>
								<div className="datasource-title text-center">Bloomberg</div>
								<div className="datasource-details mb-3 text-center">
									Rs. 45k/month
								</div>
								<button type="button" className="btn btn-primary w-100">
									Connect
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Datasource;
