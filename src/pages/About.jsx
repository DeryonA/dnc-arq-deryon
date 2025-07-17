import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import AboutText from "../components/AboutText/AboutText"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContexts"

function About() {
    const appContext = useContext(AppContext)

    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg" />
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    )
}

export default About