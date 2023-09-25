import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-8xl font-bold mb-5">404</h2>
            <Link className="font-bold text-lg text-red-600" to="/">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;