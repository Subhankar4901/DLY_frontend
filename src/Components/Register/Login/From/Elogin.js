import { Link } from "@mui/material";
import React, { useState } from "react";

const Elogin = () => {
	const [login1, setLogin] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
	};

	///get value
	const [login, loginData] = useState({});
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newloginData = { ...login };
		newloginData[field] = value;
		loginData(newloginData);
	};
	return (
		<form onSubmit={handleClick}>
			<div class="mb-3">
				<label for="exampleInputEmail1" className="form-label">
					Username/Login Code
				</label>
				<input
					type="email"
					class="form-control"
					onBlur={handleOnChange}
					name="email"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
			</div>

			<div class="mb-3">
				<label for="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					type="password"
					name="password"
					onBlur={handleOnChange}
					class="form-control"
					id="exampleInputPassword1"
				/>
			</div>
			<Link to="folderdashboard">
				<button type="submit" className="btn mt-1 mb-4 w-100 btn-primary">
					Log In
				</button>
			</Link>
			<div className="details mb-5">
				By continuing, you agree to the{" "}
				<span className="link-carousoul">Datalytics</span> or other agreement
				for Datalytics Services, and the{" "}
				<span className="link-carousoul">Privacy Notice</span>. This ste uses
				essential cookies. See our{" "}
				<span className="link-carousoul">Cookie Notice </span>
				for more Information.
			</div>
			<div className="new-data w-100 mb-2">
				<div className="line"></div>
				<span className="new-data-text text-center">New to Datalytics?</span>
				<div className="line"></div>
			</div>
			<Link to="register">
				<button type="button" class="btn w-100 btn-outline-primary">
					Create Account
				</button>
			</Link>
		</form>
	);
};

export default Elogin;
