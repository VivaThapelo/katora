import './BottomNavBar.css';
import { useEffect, useState } from 'react';

function NavBar(props) {
  const [isActive, setActive] = useState("");
    useEffect(() => {
        const currentHash = window.location.hash;
        if(currentHash) {
            window.location.hash = currentHash;
            setActive(currentHash);
        } else {
            setActive("#home");
        }
      }, [isActive]
    );
    function scrollTo(event) {
        event.preventDefault();
        setActive(event.currentTarget.hash);
        window.location.hash = "#" + event.target.href.split("#")[1];
    }
    return (
            <nav className='bottom'>
                <ul>
                <a className='logo' href="/"><h1>KATORA</h1></a>
                    <li className={isActive === "#home" ? "active" : ""}><a onClick={scrollTo} href="#home">Home</a></li>
                    <li className={isActive === "#services" ? "active" : ""}><a onClick={scrollTo} href="#services">Services</a></li>
                    <li className={isActive === "#portfolio" ? "active" : ""}><a onClick={scrollTo} href="#portfolio">Portfolio</a></li>
                    <li className={isActive === "#about" ? "active" : ""}><a onClick={scrollTo} href="#about">About</a></li>
                    <li className={isActive === "#contact" ? "active" : ""}><a onClick={scrollTo} href="#contact">Contact</a></li>
                </ul>
            </nav>
    )
}

export default NavBar;