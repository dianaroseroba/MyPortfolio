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
        firstTitleProj:'Keysafe safe',
        firstDescProj:'Keysafe Security App. Stores confidential information creating passwords of the highest security. Access and organize your information within the websites of the app, you can save your bank cards, IDs, secrets, generate and store your passwords. ',
        secondTitleProj:'My Portfolio',
        secondDescProj:'My portfolio is a web application developed with React and Vite that highlights my professional profile in an organized way. Each section, such as About Me, Experiences, Skills, Projects and Contact, has its own component for smooth navigation. Visitors can easily explore my personal information, work experience, technical skills, featured projects and contact me directly. This platform allows me to effectively showcase my career and relevant projects in an attractive and easy-to-navigate way. ',
        thirdTitleProj:'MercedarioApp',
        thirdDescProj:'Mercedario App is a console application designed for recipe management in restaurants, allowing users to interact through a dynamic menu. Administrators can add, edit, and delete recipes, while regular users have access only to view them. This differentiated functionality optimizes recipe management, facilitating the updating and consultation of the same within a controlled and efficient environment.',
        quarterTitleProj:'Suppliers Database',
        quarterDescProj:'This project features an application developed in Java with a graphical interface that facilitates easy querying of a MySQL database. The application supports 13 different types of queries, allowing users to effectively interact and perform specific searches, modifications, and data analysis. The graphical interface simplifies the querying process, making it accessible even to users without advanced SQL knowledge. Ideal for data management in business or educational settings, this system combines the power of MySQL with the versatility of Java for robust and efficient data management.',
        fifthTitleProj:'Steel calculator',
        fifthDescProj:'The "Metal Calculator" project is a mobile application developed using Flutter and Dart, aimed at facilitating the calculation of steel shaft prices based on their weight, diameter, and length. This tool is designed to enhance accessibility and efficiency in estimating metal material costs for users in the industry. The application features a dynamic login system and authentication via phone number, ensuring secure and personalized access for each user. Its intuitive interface and the implementation of mobile technologies allow users to perform accurate and quick calculations anytime and anywhere, optimizing quoting and planning processes in the metallurgical sector.',

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
        firstTitleProj:'Caja de seguridad Keysafe',
        firstDescProj:'Keysafe App de seguridad. Almacena informacion confidencial creando contraseñas de la màs alta seguridad. Accede y organiza tu informaciòn dentro de los sitios web od esde la app, podrás guardar tus tarjetas bancarias, identificaciones, secretos, generar y almacenar tus contraseñas.',
        secondTitleProj:'Mi Portafolio',
        secondDescProj:'Mi portafolio es una aplicación web desarrollada con React y Vite que destaca mi perfil profesional de manera organizada. Cada sección, como Acerca de mí, Experiencias, Habilidades, Proyectos y Contacto, cuenta con su propio componente para una navegación fluida. Los visitantes pueden explorar fácilmente mi información personal, experiencia laboral, habilidades técnicas, proyectos destacados y contactarme directamente. Esta plataforma me permite mostrar de manera efectiva mi trayectoria profesional y proyectos relevantes de una manera atractiva y fácil de navegar.',
        thirdTitleProj:'MercedarioApp',
        thirdDescProj:'Mercedario App es una aplicación de consola diseñada para la gestión de recetas en restaurantes, que permite a los usuarios interactuar a través de un menú dinámico. Los administradores pueden agregar, editar y eliminar recetas, mientras que los usuarios regulares tienen acceso únicamente para visualizarlas. Esta funcionalidad diferenciada optimiza la administración de recetas, facilitando la actualización y consulta de la misma dentro de un entorno controlado y eficiente.',
        quarterTitleProj:'Proveedores - base de datos',
        quarterDescProj:'Este proyecto consiste en una aplicación desarrollada en Java con una interfaz gráfica que facilita la realización de consultas a una base de datos MySQL. La aplicación soporta 13 tipos diferentes de consultas, lo que permite a los usuarios interactuar de manera efectiva y realizar búsquedas específicas, modificaciones y análisis de datos. La interfaz gráfica simplifica el proceso de consulta, haciendo que sea accesible incluso para usuarios sin conocimientos avanzados en SQL. Ideal para gestión de datos en entornos empresariales o educativos, este sistema combina la potencia de MySQL con la versatilidad de Java para una gestión de datos robusta y eficiente.',
        fifthTitleProj:'Calculadora de aceros',
        fifthDescProj:'El proyecto "Calculadora de Metales" es una aplicación móvil desarrollada con Flutter y Dart, destinada a facilitar el cálculo de precios de ejes de acero basado en su peso, diámetro y longitud. Esta herramienta está diseñada para mejorar la accesibilidad y eficiencia en la estimación de costos de materiales metálicos para los usuarios en la industria. La aplicación incluye un sistema de login dinámico y autenticación mediante número telefónico, asegurando un acceso seguro y personalizado para cada usuario. Su interfaz intuitiva y la implementación de tecnologías móviles permiten a los usuarios realizar cálculos precisos y rápidos en cualquier momento y lugar, optimizando así los procesos de cotización y planificación en el sector metalúrgico.',

        // contacTitle:'Contactame',
        contacText:'¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar? Adelante contactame o enviame el siguiente formulario',
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
