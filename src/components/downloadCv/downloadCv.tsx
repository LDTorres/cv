import { useTranslation } from 'react-i18next'
import './downloadCv.css'

function DownloadCv() {
    const [t] = useTranslation();

    return (
        <div className="downloadCv">
            <a target="_new" href={t('cvUrl')}>
                <img alt="Download PDF" src="/img/pdf-icon.png" width="25px" />
            </a>
        </div>
    )
}

export default DownloadCv;
