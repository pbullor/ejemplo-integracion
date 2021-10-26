import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState();
	const [password, setPassword] = useState();
	const [auth, setAuth] = useState(false);

	const onSubmit = e => {
		e.preventDefault();
		actions.login(user, password);
		actions.getPlanets();
		if (localStorage.getItem("token") != "") setAuth(true);
	};

	return (
		<div className="text-center mt-5">
			{auth ? (
				<Redirect to="/demo" />
			) : (
				<form onSubmit={onSubmit}>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							user
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onChange={e => setUser(e.target.value)}
							value={user}
						/>
						<div id="emailHelp" className="form-text">
							Well never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							onChange={e => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			)}
		</div>
	);
};
