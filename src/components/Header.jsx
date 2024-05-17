import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { languageData } from '../data/data'; 
import { useTranslation } from 'react-i18next';
import logo from './../assets/Images/logoDiana.png';

const Header = () => {
    const { i18n } = useTranslation();

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <header className="bg-personalBlue-150 md:grid md:grid-cols-[15%_1fr_auto] flex">
            <section className="md:ml-14 md:mt-6 ml-6 mt-4">
                <a href="/"><img src={logo} className="" alt="" /></a>
            </section>
            <ul className="flex gap-3 md:justify-end md:px-5 md:py-5 md:text-personalBlue-50">
                <li>
                    <a href="https://github.com/dianaroseroba" target="_blank" rel="noopener noreferrer"><FaGithub className="w-7 h-7 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300"/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/diana-carolina-rosero-bastidas-433060105/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-7 h-7 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300"/></a>
                </li>
                <li>
                    <select
                        defaultValue={i18n.language}
                        onChange={onChangeLang}
                        className="block px-4 py-2 text-colorText bg-colorLetter rounded-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                        {/* Muestra primero el español y luego el inglés */}
                        {languageData().map(({ code, label}) => (
                            <option key={code} value={code}>
                                {label}
                            </option>
                        ))}
                    </select>
                </li>
            </ul>
        </header>
    )
}

export default Header;
