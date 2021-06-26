//import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../../components/sidebar/sidebar'

import './homePage.css'

function HomePage() {
    //const [t] = useTranslation(["common", "homePage"]);

    return (
        <Container fluid>
            <Row>
                <Col sm={4} lg={3} className="px-0 bg-info">
                    <Sidebar />
                </Col>
                <Col sm={8} lg={9} className="main-articles pl-md-4">
                    <article className="about-me ">
                        <h2 id="acerca-de-mi" className="py-3">Acerca de mi</h2>
                        <p>
                            Programador con experiencia en Backend y Frontend. Manejo de bases de datos relacionales y no relacionales.
                            Siguiendo
                            los estándares de programación, seguridad y eficiencia de código. Experiencia usando sistemas de control de
                            versiones.
                            Habilidad para trabajar en cualquier tipo de ambiente, comodo con metodologías ágiles, proactivo y con alta
                            iniciativa.
                        </p>

                        <p><b>Lenuajes de programación:</b></p>
                        <div>
                            <div className="row px-2">
                                <div className="col-sm-12 col-md-6 col-lg-4 px-2 mb-3">
                                    <p>JavaScript (+5 years)
                                        ● TypeScript
                                        ● Angular
                                        ● Ionic
                                        ● VueJs
                                        ● React
                                        ● AdonisJs
                                        ● NuxtJs
                                        ● Jest
                                    </p>
                                    <p>Maquetado y estilos (+5 years)
                                        ● HTML
                                        ● CSS
                                        ● SASS
                                        ● Bootstrap
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 px-2 mb-3">
                                    <p>Golang (+3 years)
                                        ● Beego
                                        ● Fiber
                                        ● Unit Testing
                                    </p>
                                    <p>Base de datos (+5 years)
                                        ● Mysql
                                        ● Oracle
                                        ● Postgre
                                        ● MongoDB
                                        ● Elasticsearch
                                        ● Redist
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 px-2 mb-3">
                                    <p>PHP (+5 years)
                                        ● Laravel
                                        ● Codeigniter
                                        ● Slim
                                    </p>
                                    <p>Manejo de servidores
                                        ● Despliegue a producción
                                        ● Apache
                                        ● Nginx
                                        ● Cronjobs
                                        ● Shell script
                                    </p>
                                    <p>CI/CD Integración continua (+2 years)
                                        ● Gitlab runner
                                        ● Pipelines
                                        ● Docker
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="information">
                        <h2 id="estudios" className="py-3">Estudios</h2>

                        <div className="row px-2">
                            <div className="col-sm-12 px-2 mb-3">
                                <h5>
                                    Título de bachiller en ciencias
                                    <span className="d-none d-sm-inline">
                                        <span className="badge badge-info">2008</span>
                                        <span className="badge badge-dark">&</span>
                                        <span className="badge badge-end">2014</span>
                                    </span>
                                </h5>
                                <h6>Institución: UECA Cristo Rey</h6>
                            </div>

                            <div className="col-sm-12 px-2 mb-3">
                                <h5>
                                    Curso de servicio ténico a computadores
                                    <span className="d-none d-sm-inline">
                                        <span className="badge badge-info">2014</span>
                                        <span className="badge badge-dark">&</span>
                                        <span className="badge badge-end">2015</span>
                                    </span>
                                </h5>
                            </div>

                            <div className="col-sm-12 px-2 mb-3">
                                <h5>
                                    Técnico Superior Universitario
                                    <span className="d-none d-sm-inline">
                                        <span className="badge badge-info">2014</span>
                                        <span className="badge badge-dark">&</span>
                                        <span className="badge badge-end">2017</span>
                                    </span>
                                </h5>
                                <h6>
                                    Institución: IUTEB Instituto Universitario de Tecnología del
                                    Estado Bolívar
                                </h6>
                            </div>
                        </div>
                    </article>

                    <article className="experience">
                        <h2 id="experiencia" className="py-3">Experiencia laboral</h2>

                        <div className="row px-2">
                            <div className="col-sm-12 px-2 mb-3">
                                <h5>
                                    Desarrollador Backend
                                    <span className="d-none d-sm-inline">
                                        <span>(11/2019 - Presente)</span>
                                    </span>
                                </h5>
                                <h6>
                                    <b>Empresa: </b> Banco Santander Tecnología
                                    <a href="https://santander.com.ar" target="_new"><i className="fas fa-link"></i></a>
                                </h6>
                            </div>

                            <div className="col-sm-12 px-2 mb-3">
                                <h5>
                                    Desarrollador FullStack
                                    <span className="d-none d-sm-inline">
                                        <span>(04/2018 - 11/2019)</span>
                                    </span>
                                </h5>
                                <h6>
                                    <b>Empresa: </b> TrazoPro
                                    <a href="https://www.trazo.pro/" target="_new"><i className="fas fa-link"></i></a>
                                </h6>
                            </div>

                            <div className="col-sm-12 px-2 mb-3">
                                <h5>
                                    Desarrollador FullStack & Team Lead
                                    <span className="d-none d-sm-inline">
                                        <span>(06/2018 - 2019)</span>
                                    </span>
                                </h5>
                                <h6>
                                    <b>Empresa: </b> MensoreStudio
                                    <a href="https://mensorestudio.com/" target="_new"><i className="fas fa-link"></i></a>
                                </h6>
                            </div>

                            <div className="col-sm-12 px-2 mb-3">
                                <h5>
                                    Desarrollador FullStack
                                    <span className="d-none d-sm-inline">
                                        <span>(03/2015 - 02/2019)</span>
                                    </span>
                                </h5>
                                <h6>
                                    <b>Empresa: </b> Liderlogo
                                    <a href="http://liderlogos.com/" target="_new"><i className="fas fa-link"></i></a>
                                </h6>
                            </div>
                        </div>
                    </article>

                    <article className="projects">
                        <h2 id="proyectos" className="pt-3">Proyectos</h2>

                        <h5 className="py-3">Sitios Web</h5>
                        <div className="row px-2 webs">
                            <div className="col-sm-12 col-md-6 px-2 mb-3">
                                <div className="card">
                                    <div className="scroll-y project-img">
                                        <img src="/img/projects/bazam.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Bazamdev</h5>
                                        <p className="card-text">
                                            Tu lo sueñas, nosotros lo hacemos realidad
                                        </p>
                                        <a href="https://www.behance.net/gallery/53115531/Landing-Page-Bazam-Web" className="btn btn-outline-site"
                                            target="_new"><i className="fas fa-heart"></i></a>
                                        <a href="http://www.bazamdev.com/" className="btn btn-outline-site" target="_new"><i
                                            className="fas fa-link"></i></a>
                                    </div>
                                </div>
                            </div>

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

                        <h5 className="py-3">Aplicaciones web</h5>
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
