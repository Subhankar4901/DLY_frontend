import React, { useState } from "react";
import { Link } from "react-router-dom";

const Exaccount = () => {
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
			<div class="mb-2">
				<label for="exampleInputEmail1" className="form-label">
					Email
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

			<div class="mb-2">
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
			<div class="mb-3">
				<label for="exampleInputPassword1" className="form-label">
					Confrim Password
				</label>
				<input
					type="password"
					name="password"
					onBlur={handleOnChange}
					class="form-control"
					id="exampleInputPassword1"
				/>
			</div>

			<button type="submit" className="btn  mb-3 w-100 btn-primary">
				Create Account
			</button>
			<div className="details mb-3">
				By continuing, you agree to the{" "}
				<span className="link-carousoul">Datalytics</span> or other agreement
				for Datalytics Services, and the{" "}
				<span className="link-carousoul">Privacy Notice</span>. This ste uses
				essential cookies. See our{" "}
				<span className="link-carousoul">Cookie Notice </span>
				for more Information.
			</div>
			<div className="new-data1 w-100 mb-2">
				<div className="line-register"></div>
				<span className="new-data-text text-center">Already have account?</span>
				<div className="line-register"></div>
			</div>
			<Link to="/">
				<button type="button" class="btn w-100 btn-outline-primary">
					Log In
				</button>
			</Link>
		</form>
	);
};

export default Exaccount;
