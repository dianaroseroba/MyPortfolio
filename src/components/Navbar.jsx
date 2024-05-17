import { NavLink } from 'react-router-dom';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
    const { t } = useTranslation();
    
    return (
        <nav className="flex flex-col min-w-[100px] bg-personalBlue-150 fixed pb-3 bottom-2 md:static md:block">
            <ul className="flex md:flex-col flex-row items-center md:gap-y-20 gap-x-14 mx-10  pt-4 md:pb-5">
                {dataNavbar(navbarItemActive).nav.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        className="flex flex-row items-center text-personalBlue-150"
                        onClick={() => selectedItemNavbar(item.id)}
                    >
                        <span className={`md:mr-10  md:text-${item.id === navbarItemActive ? 'xl' : 'personalBlue-50'} hidden md:block ${item.id === navbarItemActive ? 'md:font-extrabold md:text-personalBlue-50 md:border-personalBlue-50' : ''}`}>
                            {t(item.title)}
                        </span>
                        {item.icon}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
