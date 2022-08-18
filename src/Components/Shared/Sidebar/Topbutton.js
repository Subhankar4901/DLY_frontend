import React from "react";
import { Link, NavLink } from "react-router-dom";

const Topbutton = () => {
	return (
		<div className="button mb-4 text-center">
			<div
				className="btn-group w-100"
				role="group"
				aria-label="Basic radio toggle button group"
			>
				<input
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio1"
					autocomplete="off"
					checked
				/>

				<label className="btn btn-outline-primary" for="btnradio1">
					Explorer Login
				</label>

				<input
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio2"
					autocomplete="off"
				/>

				<label className="btn btn-outline-primary" for="btnradio2">
					Enterprise Login
				</label>
			</div>
		</div>
	);
};

export default Topbutton;
