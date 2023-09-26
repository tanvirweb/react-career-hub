import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/local-storage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const currentId = useParams();
    const currentJob = jobs.find(job => job.id === parseInt(currentId.id));
    const {job_title, job_description, job_responsibility, salary} = currentJob;

    const handleToast = () => {
        saveJobApplication(parseInt(currentId.id));
        toast("Application submitted!");
    }

    return (
        <article className="grid grid-cols-4  gap-5 py-10 px-4">
            <div className="col-span-3">
                <h2 className="text-3xl">{job_title}</h2>
                <p>{job_description}</p>
                <p>{job_responsibility}</p>
            </div>
            <div className="col-span-1">
                <p>{salary}</p>
                <button onClick={handleToast} className="btn btn-primary">Apply Now</button>
            </div>
            <ToastContainer />
        </article>
    );
};

export default JobDetails;