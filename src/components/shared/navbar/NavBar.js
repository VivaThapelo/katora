import { Button, IconButton } from '@mui/material';
import './NavBar.css';
import { React, useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// const action = ['','submit', 'cancel'];

function NavBar(props) {
    // const [open, setOpen] = useState(false);
    // const [selectedValue, setSelectedValue] = useState(action[0]);
    const [menuOpen, setMenuOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };
    
    //   const handleClose = (value) => {
    //     setOpen(false);
    //     setSelectedValue(value);
    //   };

      const goToForm = () => {
        window.location.href = 'https://us21.list-manage.com/contact-form?u=ccc4df8518811b87873754337&form_id=7ee9ef19171aec488989a8ff2360a43d';
      };

      const handleClickMenuOpen = () => {
        setMenuOpen(true);
      };

      const handleClickMenuClose = () => {
        setMenuOpen(false);
      };

    useEffect(() => {
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeButton = document.querySelector('.menu-button-close');
        if(menuOpen === true) {
            mobileMenu.innerHTML += document.querySelector('nav.bottom').innerHTML; 
            closeButton.classList.add('show');
            mobileMenu.classList.add('show');
        } 
        if (menuOpen === false){
            closeButton.classList.remove('show');
            mobileMenu.innerHTML = '';
            mobileMenu.classList.remove('show');
        }

        const currentHash = window.location.hash;
        if(currentHash) {
            window.location.hash = currentHash;
            setActive(currentHash);
        } else {
            setActive("#home");
        }

        // handle scroll page updates
        const handleScroll = (e) => {
            if(menuOpen) {
                e.preventDefault();
                return;
            }
            // Find the section whose content is currently at the top of the viewport
            const sections = document.querySelectorAll('section'); // Adjust the selector as needed
      
            let currentSectionId = '';
            sections.forEach((section) => {
              const rect = section.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                currentSectionId = section.id;
              }
            });
      
            // Update the window.location.hash with the current section ID
            if (currentSectionId) {
              window.location.hash = `#${currentSectionId}`;
              setActive(`#${currentSectionId}`);
            }
          };
      
          // Add scroll event listener to the document
          document.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener on component unmount
          return () => {
            document.removeEventListener('scroll', handleScroll);
          };
    },[menuOpen, setMenuOpen]);
    const [isActive, setActive] = useState("");
    function scrollTo(event) {
        event.preventDefault();
        setActive(event.currentTarget.hash);
        window.location.hash = "#" + event.target.href.split("#")[1];
    }
    return (
            <nav className="main">
                <a className='logo' href="/"><h1>KTR Consulting</h1></a>
                <ul>
                    <li className={isActive === "#home" ? "active" : ""}><a onClick={scrollTo} href="#home">Home</a></li>
                    <li className={isActive === "#services" ? "active" : ""}><a onClick={scrollTo} href="#services">Services</a></li>
                    <li className={isActive === "#portfolio" ? "active" : ""}><a onClick={scrollTo} href="#portfolio">Portfolio</a></li>
                    <li className={isActive === "#about" ? "active" : ""}><a onClick={scrollTo} href="#about">About</a></li>
                    <li className={isActive === "#contact" ? "active" : ""}><a onClick={scrollTo} href="#contact">Contact</a></li>
                </ul>
                <Button aria-label='Get a quote' classes={{root: 'quote-button'}} variant='contained' onClick={goToForm}>Get A Quote</Button>
                <IconButton aria-label='mobile menu' className='menu-button' classes={{root: 'meni-button'}} onClick={handleClickMenuOpen}>
                    <MenuIcon />
                </IconButton>
                <IconButton aria-label='mobile menu' className='menu-button-close' classes={{root: 'menu-button-close'}} onClick={handleClickMenuClose}>
                    <CloseIcon />
                </IconButton>
                <div className='mobile-menu'>
                </div>
                {/* <FormDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      /> */}
            </nav>
            
    )
}

export default NavBar;