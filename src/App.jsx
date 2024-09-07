import './sass/App.scss'
import { useTranslation } from 'react-i18next';
import MaintenanceImg from './assets/imgs/maintenance.png'
import Header from './components/Header'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import InputField from './components/forms/InputField'
import { useState } from 'react'
import TextareaField from './components/forms/TextareaField'
import MaintenanceRow from './assets/maintenance-row.svg'
import './i18n'
function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <Header />
      <div className='maintenance-content'>
        {/* First section */}
        <div className="maintenance-content__first-section">
          <p className='maintenance-content__first-section__title'>{t('Nous serons bientôt de retour')}</p>
          <p className='maintenance-content__first-section__under-title'>{t("Nous effectuons des travaux de maintenance pour améliorer votre expérience.")}</p>
          <img src={MaintenanceImg} alt="Maintenance" />
          <p className='maintenance-content__first-section__text-after'>{t('En attendant, vous pouvez nous laisser un message via le formulaire ci-dessous.')}</p>
          <p className="maintenance-content__first-section__thanks-text"> {t('Merci pour votre patience !')}</p>
          <img src={MaintenanceRow} className='maintenance-content__first-section__maintenance-row'/>
        </div>

        {/* Second section */}
        <div className='maintenance-content__second-section'>
          <form onSubmit={handleSubmit}>
            {/* Name and subname */}
            <InputField label="Nom et Prénoms" type="text" name="name" value={form.name} onChange={handleChange} />

            {/* Phone & Email */}
            <div className="flex-field">
              <InputField label="Téléphone" type="tel" name="phone" value={form.phone} onChange={handleChange} pattern="[0-9]*" inputMode="numeric"/>
              <InputField label="Email" type="email" name="email" value={form.email || ''} onChange={handleChange} />
            </div>

            {/* Objet */}
            <InputField label="Objet" type="text" name="subject" value={form.subject || ''} onChange={handleChange} />

            {/* Message */}
            <TextareaField label="Message" name="message" value={form.message} onChange={handleChange}/>
            {/* Submit button */}
            <div className='submit-section-btn'>
              <button type="submit" className='submit-btn'>{t('Envoyer')}</button>
            </div>
          </form>
        </div>

        {/* Social links */}
        <div className="social-block">
        <div className="maintenance-content__social">
                    <a href="" className='single-icon'>
                        <FaFacebookF color='494646' />
                    </a>
                    <a href="" className='single-icon'>
                        <AiFillInstagram color='494646' />
                    </a>
                    <a href="" className='single-icon'>
                        <FaTwitter color='494646' />
                    </a>
                    <a href="" className='single-icon'>
                        <FaYoutube color='494646' />
                    </a>
                </div>
                </div>
      </div>
    </div>
  )
}

export default App
