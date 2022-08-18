import React from "react";
import Fheader from "../FolderDashbord/Fheader";
import Template from "./Template";
import "./TemplateDesign.css";
const TemplateDesign = () => {
	return (
		<div>
			<Fheader header={"documentsetup"} />
			<Template />
		</div>
	);
};

export default TemplateDesign;
