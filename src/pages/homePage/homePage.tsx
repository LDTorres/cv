import { useTranslation } from 'react-i18next'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../../components/sidebar/sidebar'

import './homePage.css'

import { programmingLanguages, studies, experiences, projects } from './constants'

function HomePage() {
    const [t] = useTranslation("homePage");
    const [common] = useTranslation("common");

    const programmingLanguagesCols = programmingLanguages.map(el => {
        return (
            <Col key={el.title} sm={12} md={6} lg={4} className='mb-3'>
                <p>
                    <b>
                        {el.translationKey ? t(el.translationKey) : el.title}
                    </b>
                    <span className="ml-2">({el.years} {t('years')})</span>
                </p>
                {el.items.map((item, i) => {
                    return <Badge key={i} variant="dark" className='mr-2'>{(
                        (typeof item == "string") ? item : t(item.translationKey)
                    )}</Badge>
                })}
            </Col>
        )
    })

    const studiesCols = studies.map((el, i) => {
        return (
            <Col key={i} sm={12} className='mb-3 px-2'>
                <h5>
                    {t(el.translationKey)}

                    <span className="d-none d-sm-inline">
                        <span className="badge badge-info ml-2">{el.from}</span>
                        <span className="badge badge-dark mx-1">&</span>
                        <span className="badge badge-end">{el.to}</span>
                    </span>

                    {
                        el.description ? 
                        <p className="h6 mt-2">{t('institution')}: {el.description}</p> : 
                        null
                    }
                </h5>
            </Col>
        )
    })

    const experiencesCol = experiences.map((el, i) => {
        return (
            <Col key={i} sm={12} className='mb-3 px-2'>
                <h5>
                    {el.title}
                    <span className="d-none d-sm-inline">
                        <span className="badge badge-info ml-2">{el.from}</span>
                        <span className="badge badge-dark mx-1">&</span>
                        <span className="badge badge-end">{el.to}</span>
                    </span>
                </h5>
                <h6>
                    <a
                        href={el.link} target="_new"
                        className="text-dark text-underline"
                        style={{ textDecoration: "underline" }}
                    >
                        {el.company}</a>
                </h6>
            </Col>
        )
    })

    const projectsCol = projects.map((el, i) => {
        return (
            <Col key={i + 'a'} sm={12} md={6} className='mb-3 px-2'>
                <div className="card">
                    <div className="scroll-y project-img">
                        <img src={el.img} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{el.title}</h5>
                        <a href={el.behance} className="btn btn-outline-info px-2" target="_new">Behance</a>
                        <a href={el.link} className="btn btn-outline-info px-2 ml-2" target="_new">Web</a>
                    </div>
                </div>
            </Col>
        )
    })

    return (
        <Container fluid>
            <Row>
                <Col sm={4} lg={3} className="px-0 bg-info">
                    <Sidebar />
                </Col>
                <Col sm={8} lg={9} className="main-articles pl-md-4">
                    <article className="about-me ">
                        <h2 id="acerca-de-mi" className="py-3">{common('aboutMe')}</h2>
                        <p>{t('meDescription')}</p>

                        <p><b>{t('programmingLanguages')}</b></p>

                        <Row className="px-2">
                            {programmingLanguagesCols}
                        </Row>
                    </article>

                    <article className="information">
                        <h2 id="estudios" className="py-3">{common('studies')}</h2>

                        <Row className="px-2">
                            {studiesCols}
                        </Row>
                    </article>

                    <article className="experience">
                        <h2 id="experiencia" className="py-3">{common('experience')}</h2>

                        <div className="row px-2">
                            {experiencesCol}
                        </div>
                    </article>

                    <article className="projects">
                        <h2 id="proyectos" className="pt-3">{common('projects')}</h2>

                        <h5 className="py-3">{t('websites')}</h5>
                        <div className="row px-2 webs">
                            {projectsCol}

                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/toni-llinas.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Toni llinas</h5>
                                        <p className="card-text">
                                            Vivir la vida en colores
                                        </p>
                                        <a href="https://www.behance.net/gallery/67149221/Pagina-Web-Toni-Llinas" className="btn btn-outline-site"
                                            target="_new"><i className="fas fa-heart"></i></a>
                                        <a href="http://www.tonillinas.com/" className="btn btn-outline-site" target="_new"><i
                                            className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/ultimoo.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">ULtimoo</h5>
                                        <p className="card-text">
                                            Dejá atrás la era del metal
                                        </p>
                                        <a href="https://www.behance.net/gallery/67151447/Pagina-Web-Ultimoo" className="btn btn-outline-site"
                                            target="_new"><i className="fas fa-heart"></i></a>
                                        <a href="https://ultimoo.com/" className="btn btn-outline-site" target="_new"><i
                                            className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/smart-escolar.png" className="card-img-top" alt="Smart Escolar" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Smart Escolar</h5>
                                        <p className="card-text">
                                            Apunta un transporte cómodo y seguro
                                        </p>
                                        <a href="https://www.behance.net/gallery/67149781/Pagina-Web-Smart-Escolar" className="btn btn-outline-site"
                                            target="_new"><i className="fas fa-heart"></i></a>
                                        <a href="http://smartescolar.com/es/" className="btn btn-outline-site" target="_new"><i
                                            className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/gouvee.png" className="card-img-top" alt="Gouvee" />

                                        <img src="/img/projects/gouvee_product_page.png" className="card-img-top" alt="Gouvee Product Page" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Gouvee</h5>
                                        <p className="card-text">
                                            La tienda preferida para tu vista
                                        </p>
                                        <a href="https://gouvee.com" className="btn btn-outline-site" target="_new"><i className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 className="py-3">Apps</h5>
                        <div className="row px-2 apps">
                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/control-suite.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Control Suite</h5>
                                        <p className="card-text">
                                            Pendiente
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/rightnow.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Rightnow</h5>
                                        <p className="card-text">
                                            Vivir la vida en colores
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/gase.png" className="card-img-top" alt="GASE" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">GASE</h5>
                                        <p className="card-text">
                                            Administrador de asistencias universitarias
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/school-control.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">SchoolControl</h5>
                                        <p className="card-text">
                                            Seguridad para tu niño
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 className="py-3">Web apps</h5>
                        <div className="row px-2 web-apps">
                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/logopro.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Disenador de logos</h5>
                                        <p className="card-text">
                                            Crear en segundos un logo que amaras
                                        </p>

                                        <a href="http://test.logo.pro/" className="btn btn-outline-site" target="_new"><i
                                            className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 text-center my-4">
                                <h4>
                                    <a href="https://www.behance.net/LuisTorresC" target="_new">
                                        <i className="fab fa-behance"></i> Behance
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </article>
                </Col>
            </Row>
        </Container >
    )
}

export default HomePage
