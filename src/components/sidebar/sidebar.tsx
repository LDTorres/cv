import { useTranslation } from 'react-i18next';

function Sidebar() {
    const [t] = useTranslation("common");

    return (
        <>
            <div className="md-sticky">
                <header className="py-3">
                    <figure>
                        <img src="/img/profile.jpeg" style={{ width: "90%", maxWidth: "200px" }} alt="Luis Torres" className="mx-auto d-block profile-image" />
                    </figure>

                    <h1 className="text-center animated bounce text-white">Luis Torres</h1>
                    <h5 className="text-center animated bounce mb-0 text-white">
                        {t('jobTitle')}
                    </h5>
                </header>

                <ul className="nav justify-content-center mb-1">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="mailto:luisdaniel.programador@gmail.com" target="_new"><i
                            className="far fa-envelope"></i></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.linkedin.com/in/ldtorresdev/" target="_new"><i
                            className="fab fa-linkedin"></i></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://github.com/LDTorres" target="_new"><i
                            className="fab fa-github"></i></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://gitlab.com/LDTorres" target="_new"><i
                            className="fab fa-gitlab"></i></a>
                    </li>
                </ul>

                <nav className="py-2">
                    <ul className="nav justify-content-center flex-column">
                        <li className="nav-item">
                            <a className="nav-link active text-white h4" href="#acerca-de-mi">{t('aboutMe')}</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white h4" href="#estudios">{t('studies')}</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white h4" href="#experiencia">
                                {t('experience')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white h4" href="#proyectos">
                                {t('projects')}
                            </a>
                        </li>
                    </ul>
                </nav>

                <footer>
                    <ul className="nav justify-content-center ">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://www.behance.net/LuisTorresC" target="_new"><i
                                className="fab fa-behance"></i> LuisTorresC</a>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Sidebar
