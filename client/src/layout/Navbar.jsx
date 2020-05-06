import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const [ expand, setExpand ] = useState(false);

	const mobileNav = expand ? 'is-active' : '';
	return (
		<nav className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						<h3 className="subtitle is-3">BdDevJobs</h3>
					</Link>

					<a
						onClick={() => setExpand(!expand)}
						role="button"
						className="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>

				<div id="navbarBasicExample" className={'navbar-menu ' + mobileNav}>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<Link to="/" className="button is-primary">
									Jobs
								</Link>
								<Link to="/job/create" className="button is-danger">
									Create Job
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
