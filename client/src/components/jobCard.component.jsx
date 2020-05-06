import React, { useState } from 'react';
import moment from 'moment';

export default function JobCard({ jobData }) {
	const [ showDetails, setShowDetails ] = useState(false);

	const modelDisplay = showDetails ? 'block' : 'none';
	const {
		title,
		description,
		min_salary,
		max_salary,
		company_name,
		job_location,
		technologies,
		last_date_to_submit,
		contact_email,
		starting_date
	} = jobData;

	function createMarkup() {
		return {__html: description};
	}
	return (
		<div className="card is-shadowless" style={{ marginBottom: '1.5rem', position: 'relative', height: 200 }}>
			<div className="card-content">
				<h4 className="title is-4">{title}</h4>
				<h6 className="subtitle is-6">
					at <strong>{company_name}</strong> - {job_location}
				</h6>

				<button
					onClick={() => setShowDetails(!showDetails)}
					className="button is-small is-warning"
					style={{ position: 'absolute', right: '1rem', top: '1rem' }}
				>
					show details
				</button>

				<div className="details">
					<h5 className="subtitle is-5 is-marginless">Job Desc: </h5>
					<div className="ml-1rem overflow-dot" style={{height: '40px', overflow: 'hidden'}} dangerouslySetInnerHTML={createMarkup()}/>
				</div>
			</div>

			<div className="modal" style={{ display: modelDisplay }}>
				<div className="modal-background" />
				<div className="modal-card" style={{ marginTop: '5vh' }}>
					<header className="modal-card-head">
						<p className="modal-card-title" style={{width: '80%'}}>{title}</p>
						<button onClick={() => setShowDetails(!showDetails)} className="button is-danger">
							Close
						</button>
					</header>
					<section className="modal-card-body">
						<div className="details">
							<div className="mb-1rem is-flex">
								<span className="subtitle is-5 is-marginless">Company Name: </span>
								<p className="ml-1rem">{company_name}</p>
							</div>
							<div className="mb-1rem is-flex">
								<span className="subtitle is-5 is-marginless">Job Location: </span>
								<p className="ml-1rem">{job_location}</p>
							</div>
							{technologies && (
								<div className="mb-1rem is-flex">
									<span className="subtitle is-5 is-marginless">Technologies: </span>
									<span className="ml-1rem">
										<div className="tags">
											{technologies.map((t) => (
												<span key={t} className="tag is-success">
													{t}
												</span>
											))}
										</div>
									</span>
								</div>
							)}
							<div className="mb-1rem is-flex">
								<span className="subtitle is-5 is-marginless">Salary: </span>
								<p className="ml-1rem">
									{min_salary} - {max_salary ? max_salary : 'Negotiable'} TK
								</p>
							</div>
							<div className="mb-1rem is-flex">
								<span className="subtitle is-5 is-marginless">Last Date Of Submit: </span>
								<p className="ml-1rem">{moment(last_date_to_submit).format('Do MMMM YYYY')}</p>
							</div>
							{starting_date && (
								<div className="mb-1rem is-flex">
									<span className="subtitle is-5 is-marginless">Starting Date: </span>
									<p className="ml-1rem">{moment(starting_date).format('Do MMMM YYYY')}</p>
								</div>
							)}

							<div className="mb-1rem">
								<span className="subtitle is-5 is-marginless" >Job Desc: </span>
								<div className="ml-1rem" dangerouslySetInnerHTML={createMarkup()}/>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
