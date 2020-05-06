import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/jobCard.component';

export default function Home() {
	const [ jobs, setJobs ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			(async () => {
				try {
					const jobs = await axios.get('https://bddevjobs.herokuapp.com/');
					setJobs(jobs.data.response);
					setLoading(false);
				} catch (error) {
					alert(error);
				}
			})();
		},
		[ loading ]
	);

	if (loading) {
		return <progress className="progress is-large is-primary" max="100">60%</progress>;
	}

	return (
		<div className="container box has-background-white-ter" style={{ marginTop: '2rem', maxWidth: '1080px' }}>
			{jobs.map((job) => <JobCard key={job._id} jobData={job} />)}
		</div>
	);
}
