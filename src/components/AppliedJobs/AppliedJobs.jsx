import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/local-storage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [applyJobs, setApplyJobs] = useState([])

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setApplyJobs(jobsApplied)
        }
    }, [])
    return (
        <div>
             total jobs {applyJobs.length}
        </div>
    );
};

export default AppliedJobs;