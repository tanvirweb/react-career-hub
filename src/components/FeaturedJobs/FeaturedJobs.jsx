import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loadData, setLoadData] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <section className="py-10">
            <h2 className="text-center text-4xl font-semibold mb-2">Featured Jobs</h2>
            <p className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugiat.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, loadData).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center pt-4 ${loadData === jobs.length && 'hidden'}`}>
                <button onClick={() => setLoadData(jobs.length)} className="btn btn-primary mx-auto">Show All Jobs</button>
            </div>
        </section>
    );
};

export default FeaturedJobs;