import React, { useState } from 'react';
import { AppContainer } from '../AppContainer';
import Hamburger from 'hamburger-react';
import { NavMenu, ToggleButton } from './styles';
import { SecondaryButton } from '../../common/Button';
import { Link } from 'react-router-dom';
import ScrollToHref from '../../common/ScrollToHref';

const NavLinkItems = ({
  title,
  navLink,
  setNavbar,
}: {
  title: string;
  navLink: string;
  setNavbar: any;
}) => {
  return (
    <ScrollToHref target={navLink}>
      <a
        className="navLink-underline app-font"
        href={`#${navLink}`}
        onClick={setNavbar}
      >
        {title}
      </a>
    </ScrollToHref>
  );
};

const NavBarComponent = (): React.ReactElement => {
  const [navbarOpen, setNavbar] = useState(false);
  const [links] = useState([
    { link: '', title: 'Home' },
    { link: 'about', title: 'About' },
    { link: 'features', title: 'Features' },
    { link: 'partners', title: 'Partners' },
    { link: 'roadmap', title: 'Roadmap' },
  ]);
  const onSetNavbar = (navState: boolean) => {
    setNavbar(navState);
  };

  return (
    <div className="w-full py-6 bg-opacity-50">
      <AppContainer>
        <nav className="w-full flex justify-between items-center">
          <div>
            {/* <img className="w-36 md:w-52" src={logo} alt="Planet Of Ape" /> */}
            <h3 className="font-bold text-2xl">
              Dot<span className="text-custom-light-primaryBlue">Launch</span>
            </h3>
          </div>
          <NavMenu mobileOpen={navbarOpen}>
            {links.map((link: { title: string; link: string }, index) => (
              <NavLinkItems
                key={index}
                title={link.title}
                navLink={link.link}
                setNavbar={() => onSetNavbar(false)}
              />
            ))}
            <Link onClick={() => setNavbar(false)} to="/app/dashboard">
              <SecondaryButton>Launch App</SecondaryButton>
            </Link>
          </NavMenu>
          <ToggleButton>
            <Hamburger toggled={navbarOpen} toggle={setNavbar} />
          </ToggleButton>
        </nav>
      </AppContainer>
    </div>
  );
};

export default NavBarComponent;
