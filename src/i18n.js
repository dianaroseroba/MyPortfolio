import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
},
resources: {
    en: {
    translation: {
        aboutMeTitle: 'About me',
        ExperienciesTitle:'Achievements and experience',
        skillsTitle:'Skills',
        projectTitle:'Projects',
        contactTitle:'Contact',

        career: 'Software engineer',
        aboutMe: 'I am a software engineer with a passion for technology and innovation. My academic training includes studies in industrial engineering where I discovered my interest in the world of metalworking; I have enjoyed exploring complexities and looking for creative solciones for technical challenges. In addition, I have a passion for outdoor sport, my greatest joy is skating and when it comes to moving I do it efficiently and sustainably, my faithful bike is my first choice.',
        
        firstExpAca:'Software engineer',
        firstExpUni:'firstExpUni',
        secondExpAca: 'Industrial engineer',
        thirdExpAca:'Flutter + dart',
        quarterExpAca:'Programming with javaScript',
        fifthExpAca:'Human resources management',
        sixthExpAca:'Occupational safety and health management system',
        seventhExpAca:'Manager for safe work area managers at heights',
        eighthExpAca:'Financial analysis',
        ninthExpAca:'Inventory management and control',
        tenthExpAca:'ISO 9001:2008 foundation of a quality management system',
        eleventhExpAca:'Evaluation and improvement of a quality management system NTC ISO 9001',
        twelfthExpAca:'NTC ISO 9001 internal quality audit',
        firstExpWork:'Industrial engineer',
        secondExpWork:'Supervisor',
        thirdExpWork:'Quality Assistant',
        expTitleAca:'MY STUDIES',
        expTitleWork: 'MY ACHIEVEMENTS AND EXPERIENCE',

        // projectTitle:'Projects',
        repository:'Repository',
        demo:'Demo',
        firstTitleProj:'My Portfolio',
        firstDescProj:'My portfolio is a web application developed with React and Vite that highlights my professional profile in an organized way. Each section, such as About Me, Experiences, Skills, Projects and Contact, has its own component for smooth navigation. Visitors can easily explore my personal information, work experience, technical skills, featured projects and contact me directly. This platform allows me to effectively showcase my career and relevant projects in an attractive and easy-to-navigate way. ',
        secondTitleProj:'Keysafe safe',
        secondDescProj:'Keysafe Security App. Stores confidential information creating passwords of the highest security. Access and organize your information within the websites of the app, you can save your bank cards, IDs, secrets, generate and store your passwords. ',

        // contacTitle:'Contact me',
        contacText:'Do you have any questions or suggestions, or just want to say hello? Go ahead and contact me by sending the following form',
        contacMessageForm:'Send Message',
        contacFormName:'Name',
        contacFormEmail:'Email',
        contacFormMessage:'Write your message here',
        contacButton:'Send',

        descSkill:'With this tool I have developed',

        homeTitle:'Hello, I\'m Diana Rosero Bastidas',
        homeDesc:'SOFTWARE ENGINEER AND INDUSTRIAL ENGINEER',
        homeAboutMe:'Learn more about me',

    },
    },
    es: {
    translation: {

        aboutMeTitle: 'Sobre mi',
        ExperienciesTitle:'Logros y experiencia',
        skillsTitle:'Mis Habilidades',
        projectTitle:'Proyectos',
        contactTitle:'Contacto',

        career: 'Ingeniera de software',
        aboutMe:'Soy ingeniera de software con una gran pasión sobre la tecnología y la innovación. Mi formación académica incluye estudios en ingeniería industrial donde descubrí mi interés por el mundo de la metalmecánica; he disfrutado explorando complejidades y buscando soluciones creativas para desafíos técnicos. además, tengo una pasión por el deporte al aire libre, mi mayor alegría es patinar y cuando de desplazarse se trata lo hago de manera eficiente y sostenible, mi fiel bicicleta es mi primera opción.',
        
        firstExpAca:'Ingeniera de software',
        firstExpUni:'firstExpUni',
        secondExpAca: 'Ingeniera industrial',
        thirdExpAca:'Flutter + dart',
        quarterExpAca:'Programación con javaScript',
        fifthExpAca:'Administración de recursos humanos',
        sixthExpAca:'Sistema de gestión de la seguridad y salud en el trabajo SG-SST',
        seventhExpAca:'Administrativo para jefes de área trabajo seguro en alturas',
        eighthExpAca:'Análisis financiero',
        ninthExpAca:'Administración y control de inventarios',
        tenthExpAca:'ISO 9001:2008 fundamentación de un sistema de gestión de calidad',
        eleventhExpAca:'Evaluación y mejora de un sistema de gestión de calidad NTC ISO 9001',
        twelfthExpAca:'Auditoría interna de calidad NTC ISO 9001',
        firstExpWork:'Ingeniera industrial',
        secondExpWork:'Supervisora',
        thirdExpWork:'Auxiliar de calidades',
        expTitleAca:'Mis estudios',
        expTitleWork:'Mis logros y experiencias',

        // projectTitle:'Proyectos',
        repository:'Repositorio',
        demo:'Demo',
        firstTitleProj:'Mi Portafolio',
        firstDescProj:'Mi portafolio es una aplicación web desarrollada con React y Vite que destaca mi perfil profesional de manera organizada. Cada sección, como Acerca de mí, Experiencias, Habilidades, Proyectos y Contacto, cuenta con su propio componente para una navegación fluida. Los visitantes pueden explorar fácilmente mi información personal, experiencia laboral, habilidades técnicas, proyectos destacados y contactarme directamente. Esta plataforma me permite mostrar de manera efectiva mi trayectoria profesional y proyectos relevantes de una manera atractiva y fácil de navegar.',
        secondTitleProj:'Caja de seguridad Keysafe',
        secondDescProj:'Keysafe App de seguridad. Almacena informacion confidencial creando contraseñas de la màs alta seguridad. Accede y organiza tu informaciòn dentro de los sitios web od esde la app, podrás guardar tus tarjetas bancarias, identificaciones, secretos, generar y almacenar tus contraseñas.',

        // contacTitle:'Contactame',
        contacText:'¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar? Adelante contactame o enviando el siguiente formulario',
        contacMessageForm:'Escríbeme',
        contacFormName:'Nombre',
        contacFormEmail:'Email',
        contacFormMessage:'Escriba aqui su mensaje',
        contacButton:'Enviar',

        descSkill:'Con esta herramienta he desarrollado',

        homeTitle:'Hola, soy Diana Rosero Bastidas',
        homeDesc:'INGENIERA DE SOFTWARE E INGENIERA INDUSTRIAL',
        homeAboutMe:'Conozca mas sobre mi',

    },
    },
},
});

export default i18n;
