import { useState } from "react";
import { useTranslation } from "react-i18next";
import keysafe from "./../assets/Images/keysafe.png";
import portfolio from "./../assets/Images/portafolio.png";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const { t } = useTranslation();

    const projectData = [
        {
            title: t('firstTitleProj'),
            description: t('firstDescProj'),
            githubLink: 'https://github.com/dianaroseroba/PortfolioDianaRosero',
            demoLink: 'https://tu-demo.com',
            imageSrc: portfolio
        },
        {
            title: t('secondTitleProj'),
            description: t('secondDescProj'),
            githubLink: 'https://github.com/dianaroseroba/CajaSeguridad',
            demoLink: 'https://tu-demo.com',
            imageSrc: keysafe
        },
    ];

    const nextProject = () => {
        setCurrentProject((prevProject) => (prevProject + 1) % projectData.length);
    };

    const prevProject = () => {
        setCurrentProject((prevProject) => (prevProject - 1 + projectData.length) % projectData.length);
    };

    return (
        <section className="grid grid-rows-[auto_1fr_15px] gap-4">
            <h1 className="text-colorLetter text-center mt-4 text-3xl font-bold">{t('projectTitle')}</h1>
            <section className="row-span-2 m-2 gap-3 grid md:grid-cols-[20px_1fr_20px] justify-items-center items-center">
                <FaChevronLeft
                    className={`md:col-span-1 text-colorText md:w-7 md:h-7 cursor-pointer ${currentProject === 0 ? 'invisible' : 'visible'}`}
                    onClick={prevProject}
                />
                <section className="bg-gradient-to-b from-personalBlue-50 to-personalBlue-150 rounded-xl flex md:flex-row flex-col items-center">
                    <img src={projectData[currentProject].imageSrc} className="px-3 w-90 h-72 rounded-2xl self-center mx-auto" alt="" />
                    <section className="md:px-6 px-0 flex flex-col h-auto m-auto">
                        <section className="font-bold m-4 text-justify">
                            <h1 className="text-colorLetter text-center mb-3 text-2xl">{projectData[currentProject].title}</h1>
                            <p className="text-colorText text-base">{projectData[currentProject].description}</p>
                        </section>

                        <section className="flex flex-col gap-3 mx-auto py-8">
                            <a href={projectData[currentProject].githubLink} target="_blank" rel="noopener noreferrer">
                                <button className="items-center gap-2 justify-center flex flex-row bg-colorText hover:text-personalBlue-100 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    <FaGithub className="w-6 h-6" />
                                    {t('Respository')}
                                </button>
                            </a>
                        </section>
                    </section>
                </section>
                <FaChevronRight
                    className={`md:col-span-1 text-colorText md:w-7 md:h-7 cursor-pointer ${currentProject === projectData.length - 1 ? 'invisible' : 'visible'}`}
                    onClick={nextProject}
                />
            </section>
        </section>
    );
};

export default Projects;
