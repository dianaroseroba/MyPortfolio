import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_d8yunjk', 'template_sfghhl3', formData, 'aT3K1-OPw8LDetakL')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensaje enviado con éxito');
            }, (error) => {
                console.error('FAILED...', error);
                alert('Error al enviar el mensaje');
            });
    }

    return (
        <section className="grid md:grid-cols-2">
            <section className="md:flex md:flex-col">
                <h1 className="text-colorLetter text-center mt-10 text-3xl font-bold">{t('contactTitle')}</h1>
                <p className="text-colorText m-4 text-xxl text-center">{t('contacText')}</p>
                <section className="bg-personalBlue-150 rounded-xl text-colorText mx-12">
                    <div className="flex gap-3 m-4 mx-8 items-center">
                        <FaEnvelope />
                        <h1>diana.caro11@hotmail.com</h1>
                    </div>
                    <div className="flex gap-3 m-4 mx-8 items-center">
                        <FaPhone />
                        <h1>+57 317 857 79 90</h1>
                    </div>
                    <div className="flex gap-3 m-4 mx-8 items-center">
                        <FaLocationDot />
                        <p>Pasto - Nariño - Colombia</p>
                    </div>
                </section>
            </section>

            <section className="md:w-full md:max-w-md md:mt-4">
                <form className="bg-personalBlue-50 rounded-3xl px-8 mb-2" onSubmit={handleSubmit}>
                    <h1 className="text-colorLetter text-center text-3xl font-bold">{t('contacMessageForm')}</h1>
                    <section className="mb-2 mt-2">
                        <input
                            className="rounded-2xl w-full py-2 px-3 bg-personalBlue-50 focus:outline-none focus:shadow-outline border border-colorLetter"
                            id="name"
                            name="name"
                            type="text"
                            placeholder={t('contacFormName')}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </section>
                    <section className="mb-2">
                        <input
                            className="rounded-2xl w-full py-2 px-3 bg-personalBlue-50 focus:outline-none focus:shadow-outline border border-colorLetter"
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t('contacFormEmail')}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </section>
                    <section className="mb-4">
                        <textarea
                            className="h-44 rounded-2xl w-full py-2 px-3 bg-personalBlue-50 focus:outline-none border border-colorLetter"
                            id="message"
                            name="message"
                            placeholder={t('contacFormMessage')}
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </section>
                    <section className="flex items-center justify-center">
                        <button
                            className="bg-colorLetter mb-4 hover:bg-colorLetter text-personalBlue-100 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            {t('contacButton')}
                        </button>
                    </section>
                </form>
            </section>
        </section>
    )
}

export default ContactMe;
