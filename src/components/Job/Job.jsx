import PropTypes from 'prop-types';

const Job = ({ job }) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="p-4 rounded-md border space-y-3 shadow">
            <img className="w-20 h-10 object-contain object-left" src={logo} alt="" />
            <h3 className="text-2xl font-bold">{job_title}</h3>
            <p className="text-gray-500 font-semibold">{company_name}</p>
            <ul className="flex gap-3">
                <li className="px-4 py-1 border border-emerald-700 text-emerald-700 rounded">{remote_or_onsite}</li>
                <li className="px-4 py-1 border border-emerald-700 text-emerald-700 rounded">{job_type}</li>
            </ul>
            <p>Location: {location}</p>
            <p>Salary: {salary}</p>
            <button className='btn btn-primary'>View Details</button>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.array.isRequired
}

export default Job;