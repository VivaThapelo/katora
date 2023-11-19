import Portfolio from './portfolio/Portfolio';
import Hero from "../../hero/Hero";
import "./Home.css";
import Services from "./services/Services";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "../../components/shared/footer/Footer";
import Spacer from './spacer/Spacer';
import Header from '../../components/shared/header/Header';

function Home() {
    return (
        <section id='home'>
        <div className="gap">
            </div>
        <Header></Header>
        <Hero></Hero>
        <div className="services-section">
            <Services></Services>
            <Spacer name="Services" />
      </div>
      <div className="portfolio-section">
            <Spacer name="Portfolio"/>
            <Portfolio></Portfolio>
      </div>
      <div className='about-section'>
        <About></About>
        <Spacer name="About" />
      </div>
      <div className='contact-section'>
      <Spacer name="Contact" />
        <Contact></Contact> 
      </div>
      <Footer></Footer>
    </section>
    )
}

export default Home;