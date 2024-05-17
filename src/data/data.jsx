import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

import {
    FaGraduationCap,
} from 'react-icons/fa6';
import { GiBrain } from 'react-icons/gi';
import { MdContactPhone, MdLockPerson } from 'react-icons/md';

export const dataNavbar = (navItem) => ({
    nav: [
    {
        id: 1,
        title: 'aboutMeTitle', 
        icon: <MdLockPerson className={navItem == 1 ? 'text-personalBlue-50 md:w-8 w-5 h-8 md:mr-8 md:border-b-0 border-b-4 border-personalBlue-50' : ' text-personalBlue-50 md:w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/aboutMe',
    },
    {
        id: 2,
        title: 'ExperienciesTitle',
        icon: <FaGraduationCap className={navItem == 2 ? 'text-personalBlue-50 md:w-8 w-6 h-8 md:mr-8 md:border-b-0 border-b-4 border-personalBlue-50' : 'text-personalBlue-50 md:w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/experiences',
    },
    {
        id: 3,
        title: 'skillsTitle',
        icon: <GiBrain className={navItem == 3 ? 'text-personalBlue-50 md:w-8 w-6 h-8 md:mr-8 md:border-b-0 border-b-4 border-personalBlue-50' : 'text-personalBlue-50 md:w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/skills',
    },
    {
        id: 4,
        title: 'projectTitle',
        icon: <AiOutlineFundProjectionScreen  className={navItem == 4 ? 'text-personalBlue-50 md:w-8 w-5 h-8 md:mr-8 md:border-b-0 border-b-4 border-personalBlue-50' : 'text-personalBlue-50 md:w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/projects',
    },
    {
        id: 5,
        title: 'contactTitle',
        icon: <MdContactPhone className={navItem == 5 ? 'text-personalBlue-50 md:w-8 w-5 h-8 md:mr-8 md:border-b-0 border-b-4 border-personalBlue-50' : 'text-personalBlue-50 md:w-7 h-7 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'} />,
        to: '/contactMe',
    },
    ],
});

export const languageData = () => [
    { label: 'English', code: 'en' },
    { label: 'Español', code: 'es' },
];
