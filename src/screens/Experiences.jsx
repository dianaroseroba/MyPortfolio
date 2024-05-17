import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SectionItem = ({ title, subtitle }) => (
  <section className='text-colorText border-b-2 mt-4'>
    <h2 className='text-lg font-semibold'>{title}</h2>
    <h4>{subtitle}</h4>
  </section>
);

SectionItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const Experiences = () => {
  const { t } = useTranslation();

  const academicExperiences = [
    { title: t('firstExpAca'), subtitle: t('Universidad Cooperativa de Colombia') },
    { title: t('secondExpAca'), subtitle: 'Universidad Cooperativa de Colombia' },
    { title: t('thirdExpAca'), subtitle: 'Udemy' },
    { title: t('quarterExpAca'), subtitle: 'Fundacion telefonica Movistar' },
    { title: t('fifthExpAca'), subtitle: 'Sena' },
    { title: t('sixthExpAca'), subtitle: 'Sena' },
    { title: t('seventhExpAca'), subtitle: 'Sena' },
    { title: t('eighthExpAca'), subtitle: 'Sena' },
    { title: t('ninthExpAca'), subtitle: 'Sena' },
    { title: t('tenthExpAca'), subtitle: 'Sena' },
    { title: t('eleventhExpAca'), subtitle: 'Sena' },
    { title: t('twelfthExpAca'), subtitle: 'Sena' },
  ];

  const workExperiences = [
    { title: t('firstExpWork'), subtitle: 'Maquicarmo' },
    { title: t('secondExpWork'), subtitle: 'Carne S.A.S' },
    { title: t('thirdExpWork'), subtitle: 'Almacafe S.A' },
  ];

  const [currentAcademicIndex, setCurrentAcademicIndex] = useState(0);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  const itemsPerPage = 3;

  const nextAcademic = () => {
    setCurrentAcademicIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, academicExperiences.length - itemsPerPage));
  };

  const prevAcademic = () => {
    setCurrentAcademicIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const nextWork = () => {
    setCurrentWorkIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, workExperiences.length - itemsPerPage));
  };

  const prevWork = () => {
    setCurrentWorkIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  return (
    <section className='grid md:grid-cols-2 h-auto grid-rows-1 mb-5'>
      <section className='flex flex-col'>
        <h1 className='text-colorLetter text-center m-2 justify-center text-2xl font-bold'>
          {t('expTitleAca')}
        </h1>
        <section className="flex items-center justify-center">
          <FaChevronLeft
            className={`text-colorText w-7 h-7 cursor-pointer ${currentAcademicIndex === 0 ? 'invisible' : 'visible'}`}
            onClick={prevAcademic}
          />
          <section>
            {academicExperiences.slice(currentAcademicIndex, currentAcademicIndex + itemsPerPage).map((experience, index) => (
              <SectionItem key={index} title={experience.title} subtitle={experience.subtitle} />
            ))}
          </section>
          <FaChevronRight
            className={`text-colorText w-7 h-7 cursor-pointer ${currentAcademicIndex >= academicExperiences.length - itemsPerPage ? 'invisible' : 'visible'}`}
            onClick={nextAcademic}
          />
        </section>
      </section>

      <section className='flex flex-col'>
        <h1 className='text-colorLetter text-center m-2 justify-center text-2xl font-bold'>
          {t('expTitleWork')}
        </h1>
        <section className="flex items-center justify-center">
          <FaChevronLeft
            className={`text-colorText w-7 h-7 cursor-pointer ${currentWorkIndex === 0 ? 'invisible' : 'visible'}`}
            onClick={prevWork}
          />
          <section>
            {workExperiences.slice(currentWorkIndex, currentWorkIndex + itemsPerPage).map((experience, index) => (
              <SectionItem key={index} title={experience.title} subtitle={experience.subtitle} />
            ))}
          </section>
          <FaChevronRight
            className={`text-colorText w-7 h-7 cursor-pointer ${currentWorkIndex >= workExperiences.length - itemsPerPage ? 'invisible' : 'visible'}`}
            onClick={nextWork}
          />
        </section>
      </section>
    </section>
  );
};

export default Experiences;
