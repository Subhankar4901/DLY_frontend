import React from "react";
import Cfrom from "../Login/From/Cfrom";
import Slider from "../Login/Slider/Slider";

const Register = () => {
	return (
		<div className="container  center-part-login">
			{/* carosoul slider  */}
			<div className="row gx-5">
				<div className="col-lg-6 slider mb-5 mb-lg-0 col-11 mx-auto">
					<Slider />
				</div>
				<div className="col-lg-5 left-part-from mb-5 mt-5 mt-lg-0 mb-lg-0 shadow col-11 mx-auto">
					<Cfrom />
				</div>
			</div>
		</div>
	);
};

export default Register;
