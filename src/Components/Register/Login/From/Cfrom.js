import React, { useState } from "react";
import { Link } from "react-router-dom";
import line from "../../../Image/Line.svg";
import Ctopbutton from "../../../Shared/Ctopbutton";
import Exaccount from "./Exaccount";
const Cfrom = () => {
	const [login1, setLogin] = useState(false);

	return (
		<div className="login">
			{/* top button  */}
			<Ctopbutton />
			{/* from input  */}
			<Exaccount />
		</div>
	);
};

export default Cfrom;
