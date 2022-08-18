import React from "react";
import "./Layout1.css";
const Layout1 = () => {
	return (
		<div className="filedashboard" style={{ backgroundColor: "#E2EBFC" }}>
			<div className="row file-grid px-5">
				<div className="sidebar-flex d-flex flex-column align-items-center justify-content-between p-3">
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
							<div className="side-bar-text">Documents</div>
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
						<div className="scearch-box">
							<form class="form-inline search-from mx-auto w-100 my-lg-0">
								<input
									className="form-control search-input px-5 mr-sm-2"
									type="search"
									placeholder="Search Projects"
									aria-label="Search"
								/>
								<i class="fas fa-search"></i>
							</form>
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
					{/* selectbox */}
					<div className="flext-part mb-3 d-flex justify-content-between align-items-center">
						<div className="select-box mb-3">
							<select
								className="form-select selection"
								aria-label="Default select example"
							>
								<option selected style={{ fontSize: "18px" }}>
									Recent Projects
								</option>
								<option value="1">Archived Projects</option>
								<option value="2">Deleted Projects/Files</option>
								<option value="3">Last 1 month Projects</option>
								<option value="4">Archived Projects</option>
							</select>
							<div className="bottom-text">View your recent projects here</div>
						</div>
						{/* icon-group-part */}
						<div className="icon-group-part d-flex align-items-center">
							<div className="icon-part-box d-flex align-items-center justify-content-around me-4">
								<img src={collect} width="25px" className="collect" alt="" />
								<img src={icon2} width="25px" className="icon2" alt="" />
								<img src={icon3} width="25px" className="icon3" alt="" />
							</div>
							<div className="new-project">
								<button
									type="button"
									class="btn new-project-btn py-2 btn-primary"
								>
									+ New Project
								</button>
							</div>
						</div>
					</div>

					{/* div part  */}
					<div className="grid-filedashboard">
						<div className="box-filedashboard">
							<div className="image-filedasboard p-3">
								<img src={image} alt="" className="img-fluid" />
							</div>
							<div className="filedashboard-bottom d-flex justify-content-between align-items-center p-3">
								<div className="filedashboard-flex">
									<div className="filedasboard-title">
										Dizen Quartely Report
									</div>
									<div className="filedashboard-details">Open 02 days ago</div>
								</div>
								<div className="icon-dashboard">
									<i class="fas fa-ellipsis-v"></i>
								</div>
							</div>
						</div>
						<div className="box-filedashboard">
							<div className="image-filedasboard p-3">
								<img src={image} alt="" className="img-fluid" />
							</div>
							<div className="filedashboard-bottom d-flex justify-content-between align-items-center p-3">
								<div className="filedashboard-flex">
									<div className="filedasboard-title">
										Dizen Quartely Report
									</div>
									<div className="filedashboard-details">Open 02 days ago</div>
								</div>
								<div className="icon-dashboard">
									<i class="fas fa-ellipsis-v"></i>
								</div>
							</div>
						</div>
						<div className="box-filedashboard">
							<div className="image-filedasboard p-3">
								<img src={image} alt="" className="img-fluid" />
							</div>
							<div className="filedashboard-bottom d-flex justify-content-between align-items-center p-3">
								<div className="filedashboard-flex">
									<div className="filedasboard-title">
										Dizen Quartely Report
									</div>
									<div className="filedashboard-details">Open 02 days ago</div>
								</div>
								<div className="icon-dashboard">
									<i class="fas fa-ellipsis-v"></i>
								</div>
							</div>
						</div>
						<div className="box-filedashboard">
							<div className="image-filedasboard p-3">
								<img src={image} alt="" className="img-fluid" />
							</div>
							<div className="filedashboard-bottom d-flex justify-content-between align-items-center p-3">
								<div className="filedashboard-flex">
									<div className="filedasboard-title">
										Dizen Quartely Report
									</div>
									<div className="filedashboard-details">Open 02 days ago</div>
								</div>
								<div className="icon-dashboard">
									<i class="fas fa-ellipsis-v"></i>
								</div>
							</div>
						</div>
						<div className="box-filedashboard">
							<div className="image-filedasboard p-3">
								<img src={image} alt="" className="img-fluid" />
							</div>
							<div className="filedashboard-bottom d-flex justify-content-between align-items-center p-3">
								<div className="filedashboard-flex">
									<div className="filedasboard-title">
										Dizen Quartely Report
									</div>
									<div className="filedashboard-details">Open 02 days ago</div>
								</div>
								<div className="icon-dashboard">
									<i class="fas fa-ellipsis-v"></i>
								</div>
							</div>
						</div>
						<div className="box-filedashboard">
							<div className="image-filedasboard p-3">
								<img src={image} alt="" className="img-fluid" />
							</div>
							<div className="filedashboard-bottom d-flex justify-content-between align-items-center p-3">
								<div className="filedashboard-flex">
									<div className="filedasboard-title">
										Dizen Quartely Report
									</div>
									<div className="filedashboard-details">Open 02 days ago</div>
								</div>
								<div className="icon-dashboard">
									<i class="fas fa-ellipsis-v"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout1;
