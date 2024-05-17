import { useTranslation } from 'react-i18next';
import photo from './../assets/Images/diana.png';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className='grid grid-rows'>
      <section className='grid grid-cols-[2fr] md:grid-cols-[150px_1fr] px-8 pt-8 pb-4'>
        {/* Primera columna: Imagen */}
        <div className='flex items-center'>
          <img
            src={photo}
            className='w-80 h-70 rounded-3xl my-5'
            alt='Diana-Rosero'
          />
        </div>
        
        {/* Segunda columna: Descripción y Sección adicional */}
        <section className='text-colorText text-justify font-roboto md:px-20 pl-4 pr-4 py-5'>
          {/* Nombre y Carrera */}
          <div className='text-colorLetter font-roboto max-w-xs mb-8'> {/* Agregamos margen inferior */}
            <h1 className='text-justify text-2xl font-bold'>Diana Rosero Bastidas</h1>
            <p className='text-justify text-xl'>{t('career')}</p>
          </div>
          
          {/* Descripción */}
          {/* Esta sección es visible solo en dispositivos más pequeños */}
          <div className='md:hidden overflow-y-scroll'>
            <p>{t('aboutMe')}</p>
          </div>
          
          {/* Esta sección es visible solo en dispositivos medianos y grandes */}
          <div className='hidden md:block'>
            <p>{t('aboutMe')}</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutMe;
