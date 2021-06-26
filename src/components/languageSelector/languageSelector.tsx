import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import './languageSelector.css'

function LanguageSelector() {
    const { i18n } = useTranslation();
    
    function changeLang(lang: string) {
        i18n.changeLanguage(lang);
    }
    
    return (
        <div className="languageSelector">
            <div>
                <span onClick={() => { changeLang("es") }}>ES</span>
                <span onClick={() => { changeLang("en") }}>EN</span>
            </div>
        </div>
    )
}

export default LanguageSelector;
