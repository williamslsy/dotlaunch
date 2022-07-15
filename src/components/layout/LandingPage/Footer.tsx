import React, { useState } from 'react';
import ScrollToHref from '../../common/ScrollToHref';
import { AppContainer } from '../AppContainer';
import dotLogo from '../../../assets/images/dot_logo.png';

const FooterLinkItem = ({
  title,
  navLink,
}: {
  title: string;
  navLink: string;
}) => {
  return (
    <ScrollToHref target={navLink}>
      <a className="navLink-underline app-font" href={`#${navLink}`}>
        {title}
      </a>
    </ScrollToHref>
  );
};

export const FooterSection = () => {
  const [links] = useState([
    { link: '', title: 'Home' },
    { link: 'about', title: 'About' },
    { link: 'features', title: 'Features' },
    { link: 'partners', title: 'Partners' },
    { link: 'roadmap', title: 'Roadmap' },
  ]);
  return (
    <div
      className="w-full py-10"
      // style={{ background: '#130C24' }}
    >
      <AppContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-16">
          <div className="space-y-5">
            <h3 className="font-black text-4xl app-font text-center">
              DotLaunch
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <img src={dotLogo} alt="DotLaunch Logo" />
              <h5 className="font-bold text-lg">
                CUTTING-EDGE <br /> DECENTRALIZED <br /> PROTOCOL
              </h5>
            </div>
            <div className="border-t-4 border-b-4 border-custom-dark-primaryBlue py-6 text-center">
              <a className="text-lg" href="mailto:info@dotlaunch.io">
                info@dotlaunch.io
              </a>
            </div>
            <div className="flex justify-center pt-5">
              <button className="border-2 border-custom-dark-primaryBlue px-12 py-5">
                Schedule A Chat
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div>
              <div className="border-b-4 border-custom-dark-primaryBlue pb-2 mb-6">
                <h3 className="app-font text-2xl">General</h3>
              </div>
              <ul className="flex flex-col pb-5 items-start">
                {links.map((link: { title: string; link: string }, index) => (
                  <FooterLinkItem
                    key={index}
                    title={link.title}
                    navLink={link.link}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div>
              <div className="border-b-4 border-custom-dark-primaryBlue pb-2 mb-6">
                <h3 className="app-font text-2xl">Social Links</h3>
              </div>
              <ul className="flex flex-col pb-5 items-start">
                <a
                  className="navLink-underline app-font"
                  href="https://twitter.com"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  className="navLink-underline app-font"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="navLink-underline app-font"
                  href="https://t.me"
                  target="_blank"
                >
                  Telegram
                </a>
                <a
                  className="navLink-underline app-font"
                  href="https://discord.com"
                  target="_blank"
                >
                  Discord
                </a>
                <a
                  className="navLink-underline app-font"
                  href="https://medium.com"
                  target="_blank"
                >
                  Medium
                </a>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center pt-5 text-gray-400">
          <p>
            &#169; {new Date().getFullYear()} DotLaunch. All rights reserved
          </p>
        </div>
      </AppContainer>
    </div>
  );
};
