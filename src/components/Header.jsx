import '../sass/header.scss'
import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
const Header = () => {
    const { t, i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const currentLanguage = i18n.language;
    return (
        <div className="header">
            <div className="header__logo">
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <div>
                <div className="header__social">
                    <a href="https://www.facebook.com/groupelecomplexe/" className='single-icon' target="_blank">
                        <FaFacebookF color='494646' />
                    </a>
                    <a href="https://www.instagram.com/groupe_empire/" className='single-icon' target="_blank">
                        <AiFillInstagram color='494646' />
                    </a>
                    <a href="https://twitter.com/groupe_empire" className='single-icon' target="_blank">
                        <FaTwitter color='494646' />
                    </a>
                    <a href="https://www.youtube.com/@groupeempire7861" className='single-icon' target="_blank">
                        <FaYoutube color='494646' />
                    </a>
                </div>
                <div className='translate-layout'>
                <div className='header__translate' onClick={() => setIsVisible(!isVisible)}>
                    <TfiWorld color='fff' size='22px' />
                    <p>{currentLanguage === 'fr' ? 'Fr' : 'En'}</p>
                </div>
                {isVisible && (
                        <div className={`translate_box ${isVisible ? 'show' : ''}`}>
                        <p onClick={() => i18n.changeLanguage('fr')}>Français</p>
                        <p onClick={() => i18n.changeLanguage('en')}>Anglais</p>
                      </div>
                    )}
                </div>
                
            </div>

        </div>
    )
}
export default Header