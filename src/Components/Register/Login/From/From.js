import React, { useState } from "react";
import { Link } from "react-router-dom";
import line from "../../../Image/Line.svg";
import Topbutton from "../../../Shared/Sidebar/Topbutton";
import "../Login.css";
import Exlogin from "./exlogin";
const From = () => {
	return (
		<div className="login">
			{/* top button  */}
			<Topbutton />
			{/* from input  */}
			<Exlogin />
		</div>
	);
};

export default From;
