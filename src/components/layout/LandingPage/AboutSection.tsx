import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '../../common/Card';
import Truncate from '../../common/Truncate';
import { AppContainer } from '../AppContainer';
import { SectionHeader } from './SectionHeader';
import permissionlessIcon from '../../../assets/images/dot_permissionless.svg';
import decentralizedIcon from '../../../assets/images/dot_decentralized.svg';
import flexibleIcon from '../../../assets/images/dot_flexible.svg';

const aboutText = `We are the community's launchpad where projects are free to innovate, experiment and launch their project in a purely
                permissionless ecosystem with no gatekeepers and no whales. We are the breath of fresh air in the world of blockchain launchpads. 
                Current solutions all foster innovation on a specific blockchain, but they also look and operate the same. Fueling
                innovation in this industry requires the removal of all intermediaries and gatekeepers.
                Additionally, there is a need for more transparency, automated processes, and post-launch support.`;

export const AboutSection = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div
      id="about"
      className="w-full"
      style={{
        backgroundImage:
          'linear-gradient(175deg, #101123 100%, #040710 calc(100% + 2px)) ',
      }}
    >
      <AppContainer>
        <div className="py-28">
          <div className="text-center mx-auto max-w-3xl">
            <SectionHeader>WHAT MAKES DOTLAUNCH UNIQUE ?</SectionHeader>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto text-center mb-10"
          >
            {!isReadMore ? (
              <Truncate
                text={aboutText}
                length={195}
                className="text-base md:text-lg font-medium text-gray-300 tracking-wide"
              />
            ) : (
              <h3 className="text-base md:text-lg font-medium text-gray-300 tracking-wide">
                {aboutText}
              </h3>
            )}
            <button
              className="text-base font-semibold px-5 py-3 mt-5 text-custom-dark-primaryBlue"
              onClick={() => setIsReadMore(!isReadMore)}
            >
              {!isReadMore ? 'Read More' : 'Read Less'}
              {!isReadMore ? (
                <i className="las la-arrow-right ml-3"></i>
              ) : (
                <i className="las la-arrow-up ml-3"></i>
              )}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
            <Card data-aos="flip-left" data-aos-duration="2000">
              <img
                src={permissionlessIcon}
                alt="Permissionless"
                width={80}
                className="mb-6"
              />
              <h3 className="text-xl font-bold app-font">Permisionless</h3>
              <p className="mt-2 text-base text-gray-300">
                Every single step of the launchpad is on-chain.
              </p>
            </Card>
            <Card data-aos="flip-left" data-aos-duration="2500">
              <img
                src={decentralizedIcon}
                alt="Decentralized"
                width={80}
                className="mb-6"
              />
              <h3 className="text-xl font-bold app-font">Decentralized</h3>
              <p className="mt-2 text-base text-gray-300">
                No gatekeepers, strictly driven by community.
              </p>
            </Card>
            <Card data-aos="flip-left" data-aos-duration="3000">
              <img
                src={flexibleIcon}
                alt="Flexible"
                width={80}
                className="mb-6"
              />
              <h3 className="text-xl font-bold app-font">Flexible</h3>
              <p className="mt-2 text-base text-gray-300">
                Any type of raise can be integrated and any project round can be
                operated.
              </p>
            </Card>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
