import { useTranslation } from 'react-i18next';
import { FaArrowRightToBracket, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import photo from './../assets/Images/diana.png'

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-blue-10 min-h-screen rounded-2xl grid md:grid-cols-[65%_35%]'>
      <section className='flex flex-col justify-center items-center m-4 mx-10 md:order-1 order-2 md:text-left text-center'>
        <h1 className='text-colorLetter md:text-8x1 text-6xl font-extrabold'>
          {t('homeTitle')}
        </h1>
        <p className='text-colorText font-bold text-xl md:mr-44 mx-10 md:mx-0'>
          {t('homeDesc')}
        </p>
        <section className='flex text-personalBlue-50 gap-5 items-center md:mx-3 mt-9 m-4'>
          <NavLink to='/AboutMe '>
            <FaArrowRightToBracket className='w-14 h-14 animate-bounce' />
          </NavLink>
          <h4 className='text-2xl font-extrabold'>{t('homeAboutMe')}</h4>
        </section>
        <ul className='flex gap-3 justify-center py-5 text-colorText md:hidden'>
          <a
            href='https://github.com/dianaroseroba'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='w-7 h-7 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300' />
          </a>
          <a
            href='https://www.linkedin.com/in/diana-carolina-rosero-bastidas-433060105/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn className='w-7 h-7 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300' />
          </a>
        </ul>
      </section>
      <section className='md:order-1 flex justify-center items-center'>
        <img
          src={photo}
          className='w-80 h-90 rounded-2xl contrast-100 shadow-personalBlue-100'
          alt='Diana Rosero Bastidas'
        />
      </section>
    </section>
  );
};

export default Home;
