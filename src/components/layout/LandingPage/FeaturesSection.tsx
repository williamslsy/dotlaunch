import React from 'react';
import { AppContainer } from '../AppContainer';
import launchImage from '../../../assets/images/feat-launch.svg';
import lockImage from '../../../assets/images/feat-lock.svg';
import miningImage from '../../../assets/images/feat-mining.svg';
import airdropImage from '../../../assets/images/feat-airdrop.svg';
import { SectionHeader } from './SectionHeader';
import styled from 'styled-components';

const FeaturesHeader = styled.h2.attrs(() => ({
  className: `text-sm uppercase`,
}))`
  letter-spacing: 5px;
  font-weight: 600;
  text-shadow: 0 2px 12px #f0f;
`;
const FeaturesSubHeader = styled.h4.attrs(() => ({
  className: `text-2xl md:text-4xl rounded-md capitalize font-black app-font`,
}))`
  letter-spacing: 3px;
`;
const FeaturesSummary = styled.div.attrs(() => ({
  className: `md:text-lg`,
}))``;
const FeaturesImage = styled.img.attrs(() => ({
  className: `mx-auto w-full max-w-xs`,
}))``;

const FeaturesBullet = styled.i.attrs(() => ({
  className: `las la-check font-bold mt-1`,
}))`
  border-radius: 99px;
  background: ${(props) => props.theme.colors.secondaryBlue};
  color: ${(props) => props.theme.colors.primaryBlue};
  padding: 5px;
  height: fit-content;
`;

export const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="w-full"
      style={{
        backgroundImage:
          'linear-gradient(175deg, #101123 100%, #040710 calc(100% + 2px)) ',
      }}
    >
      <AppContainer>
        <div className="py-28">
          {/* <div className="text-center mx-auto max-w-3xl">
            <SectionHeader>
              Explore Diverse Features In Our Ecosystem
            </SectionHeader>
          </div> */}
          <div className="space-y-24 md:space-y-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <FeaturesImage
                  data-aos="fade-right"
                  data-aos-delay="200"
                  src={launchImage}
                  alt="Launchpad"
                />
              </div>
              <div className="space-y-3 flex flex-col justify-center">
                <FeaturesHeader>Dot-Launch</FeaturesHeader>
                <FeaturesSubHeader>
                  <em> Fastest project launch at the lowest cost</em>
                </FeaturesSubHeader>
                <FeaturesSummary>
                  <div className="flex gap-x-3 mb-5">
                    <FeaturesBullet />
                    <h3 className="text-gray-300">
                      We provide a fast, reliable and secure platform to launch
                      crypto projects and manage them.
                    </h3>
                  </div>
                  <div className="flex gap-x-3">
                    <FeaturesBullet />
                    <h3 className="text-gray-300">
                      Cryprto investors can also use our technology to get
                      access to the best Crypto and Defi projects.
                    </h3>
                  </div>
                </FeaturesSummary>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <FeaturesImage
                  data-aos="fade-left"
                  data-aos-delay="200"
                  src={miningImage}
                  alt="Mint Token"
                />
              </div>
              <div className="space-y-5 md:order-first flex flex-col justify-center">
                <FeaturesHeader>Dot-Mint</FeaturesHeader>
                <FeaturesSubHeader>
                  <em> token minting without hassles</em>
                </FeaturesSubHeader>
                <FeaturesSummary>
                  <div className="flex gap-x-3 mb-5">
                    <FeaturesBullet />
                    <h3 className="text-gray-300">
                      As a crypto project, you can easily create and customize
                      your cryptocurrency with our mining feature.
                    </h3>
                  </div>
                  <div className="flex gap-x-3">
                    <FeaturesBullet />
                    <h3 className="text-gray-300">
                      Crypto investors can also use our technology to get access
                      to the best Crypto and Defi projects
                    </h3>
                  </div>
                </FeaturesSummary>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <FeaturesImage
                  data-aos="fade-right"
                  data-aos-delay="200"
                  src={lockImage}
                  alt="Liquidity Lockers"
                />
              </div>
              <div className="space-y-5 flex flex-col justify-center">
                <FeaturesHeader>Dot-Lock</FeaturesHeader>
                <FeaturesSubHeader>
                  <em> secure, transparent and trustworthy</em>
                </FeaturesSubHeader>
                <FeaturesSummary>
                  <div className="flex gap-x-3 mb-5">
                    <FeaturesBullet />
                    <h3 className="text-gray-300">
                      project owners are welcome to use our lock feature to lock
                      their liquidity pool tokens in order to enhance the
                      community's confidence in the project.
                    </h3>
                  </div>
                </FeaturesSummary>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <FeaturesImage
                  data-aos="fade-left"
                  data-aos-delay="200"
                  src={airdropImage}
                  alt="AirDrop"
                />
              </div>
              <div className="space-y-5 md:order-first flex flex-col justify-center">
                <FeaturesHeader>Dot-Drop</FeaturesHeader>
                <FeaturesSubHeader>
                  <em> seamless airdrops, community-centric</em>
                </FeaturesSubHeader>
                <FeaturesSummary>
                  <div className="flex gap-x-3 mb-5">
                    <FeaturesBullet />
                    <h3 className="text-gray-300">
                      Token airdrops to users can be done individually or in
                      batches. This makes it possible to reward loyal community
                      members with tokens.
                    </h3>
                  </div>
                  <div className="flex gap-x-3 mb-5">
                    <FeaturesBullet />
                    <h3 className="text-gray-300">
                      Crypto enthusiasts can also use the platform to get
                      reliable information about upcoming token airdrops.
                    </h3>
                  </div>
                </FeaturesSummary>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
