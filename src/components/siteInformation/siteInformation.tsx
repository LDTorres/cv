
import { useTranslation } from 'react-i18next'
import { Helmet } from "react-helmet";

function SiteInformation() {
    const [t] = useTranslation("siteInformation");

    return (
        <div>
            <Helmet>
                <title>{t('title')}</title>
                <meta name="description" content={t('description')} />
                <meta property="og:title" content={t('title')} />
                <meta property="og:url" content={t('url')} />
                <meta property="og:image" content={t('image')} />
                <meta property="og:description" content={t('description')} />
                <meta property="og:site_name" content={t('title')} />
                <meta property="article:tag" content={t('tags')} />
            </Helmet>
        </div>
    )
}

export default SiteInformation
