import { Swiper, SwiperSlide } from "swiper/react";
import  Pagination  from 'swiper/core';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

SwiperCore.use([Pagination]);

const slider = ({ projects }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true}}
            autoplay={{delay: 2500, disableOnInteraction: false}}
        >
            {projects.map((project)=>(
                <SwiperSlide key={project.id}>
                    <div className="bg-personalBlue-150 p-8 rounded-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-h-64 max-w-full rounded-lg mb-4 object-cover"
                        />
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-personalBlue-50 mb-4">{project.description}</p>
                        <div className="flex space-x-4">
                            <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in"
                            >
                                Repo
                            </a>
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default slider;
