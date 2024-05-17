
import PropTypes from "prop-types";

const Project = ({ title, description, image, githubRepo, demoUrl }) => {
    return (
        <div className="bg-personalBlue-150 p8 rounden-lg">
            <img src={image} alt={title} className="max-h-64 max-w-full rounded-lg mb-4 object-cover"/>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-personalBlue-100  mb-4">{description}</p>
            <div className="flex space-x-4">
                <a
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-slate-600 transition duration-300 ease-in"
                >
                    Repo
                </a>
                <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in"

                >
                    Demo
                </a>
            </div>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    githubRepo: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired
};

export default Project;
