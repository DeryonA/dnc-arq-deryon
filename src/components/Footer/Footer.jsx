import { Link } from "react-router-dom"
import { useContext } from "react"

//ASSETS
import './Footer.css'
import FacebookIcon from '../../assets/icon-facebook.svg'
import TwitterIcon from '../../assets/icon-twitter.svg'
import LinkedinIcon from '../../assets/icon-linkedin.svg'
import InstagramIcon from '../../assets/icon-instagram.svg'
import USABand from '../../assets/band-usa.svg'
import BrazilBand from '../../assets/band-brazil.svg'
import Logo from '../../assets/dnc-logo.svg'

//CONTEXTS
import { AppContext } from "../../contexts/AppContexts"
import Button from "../Button/Button"

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (

        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo" />
                        <p className="gray-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://google.com">
                                <img src={FacebookIcon} />
                            </a>
                            <a href="https://google.com">
                                <img src={TwitterIcon} />
                            </a>
                            <a href="https://google.com">
                                <img src={LinkedinIcon} />
                            </a>
                            <a href="https://google.com">
                                <img src={InstagramIcon} />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to={"/"}>{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to={'/about'}>{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to={'/projects'}>{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to={'/contact'}>{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="gray-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="gray-1-color">suporte@escoladnc.com.br</p>
                            <p className="gray-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="gray-1-color">Copyright @ DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('br')}> 
                            <img src={BrazilBand} height="29px" />
                        </Button>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('en')}>
                            <img src={USABand} height="29px" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer