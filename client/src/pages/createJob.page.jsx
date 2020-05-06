import React from 'react';
import CreateJobForm from '../components/createJobForm.component';

export default function CreateJob() {
	return (
		<div className="container">
			<h1 className="title is-h1 has-text-danger has-text-centered">Create Job Page</h1>
			<div className="box has-background-white-ter" style={{maxWidth: 880, margin: '1rem auto'}}>
				<CreateJobForm />
			</div>
		</div>
	);
}
