import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobsCategory from "../JobsCategory/JobsCategory";

const Home = () => {
    return (
        <main className="px-4">
            <JobsCategory></JobsCategory>
            <FeaturedJobs></FeaturedJobs>
        </main>
    );
};

export default Home;