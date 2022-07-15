import React, { useState } from 'react';
import { AppContainer } from '../AppContainer';
import fractal from '../../../assets/images/fractal.svg';
import genesis from '../../../assets/images/genesis.svg';
import lupax from '../../../assets/images/lupax.png';
import m6 from '../../../assets/images/m6.svg';
import orion from '../../../assets/images/orion.svg';
import parsiq from '../../../assets/images/parsiq.svg';
import scryptictech from '../../../assets/images/scryptictech.svg';
import plethori from '../../../assets/images/plethori.svg';
import blocksync from '../../../assets/images/blocksync.svg';
import chainlink from '../../../assets/images/chainlink.svg';
import coin98 from '../../../assets/images/coin98.svg';
import x21 from '../../../assets/images/x21.svg';
import styled from 'styled-components';
import { SectionHeader } from './SectionHeader';

const PartnerCompanies = styled.a.attrs(() => ({
  className: `cursor-pointer`,
}))`
  img {
    transition: opacity 0.3s ease;
    opacity: 1;
    max-height: 70px;
    padding: 1rem;

    &:hover {
      opacity: 1;
    }
  }
`;

export const PartnersSection = () => {
  
  return (
    <div className="w-full py-20" id="partners">
      <AppContainer>
        <div className="pt-16">
          <SectionHeader>Corporate Partners</SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-4 pt-14">
            <PartnerCompanies>
            <img
              data-aos="fade-right"
              data-aos-delay="600"
              src={fractal}
              alt="fractal.com"
              className="filter-none"
            />
          </PartnerCompanies>
        <PartnerCompanies>
        <img
          data-aos="fade-right"
          data-aos-delay="600"
          src={coin98}
          alt="coin98.com"
          className="filter-none"
        />
        </PartnerCompanies>
        <PartnerCompanies>
        <img
          data-aos="fade-right"
          data-aos-delay="600"
          src={lupax}
          alt="lupax.com"
          className="filter-none"
        />
      </PartnerCompanies>
      <PartnerCompanies>
      <img
        data-aos="fade-right"
        data-aos-delay="600"
        src={parsiq}
        alt="parsiq.com"
        className="filter-none"
      />
    </PartnerCompanies>
      <PartnerCompanies>
      <img
        data-aos="fade-right"
        data-aos-delay="600"
        src={m6}
        alt="m6.com"
        className="filter-none"
      />
    </PartnerCompanies>
    <PartnerCompanies>
      <img
        data-aos="fade-right"
        data-aos-delay="600"
        src={plethori}
        alt="plethori.com"
        className="filter-none"
      />
    </PartnerCompanies>
    <PartnerCompanies>
    <img
      data-aos="fade-right"
      data-aos-delay="600"
      src={orion}
      alt="orion.com"
      className="filter-none"
    />
  </PartnerCompanies>

<PartnerCompanies>
<img
  data-aos="fade-right"
  data-aos-delay="600"
  src={scryptictech}
  alt="scryptictech.com"
  className="filter-none"
/>
</PartnerCompanies>
<PartnerCompanies>
<img
  data-aos="fade-right"
  data-aos-delay="600"
  src={x21}
  alt="x21.com"
  className="filter-none"
/>
</PartnerCompanies>
<PartnerCompanies>
<img
  data-aos="fade-right"
  data-aos-delay="600"
  src={blocksync}
  alt="blocksync.com"
  className="filter-none"
/>
</PartnerCompanies>
<PartnerCompanies>
<img
  data-aos="fade-right"
  data-aos-delay="600"
  src={chainlink}
  alt="chainlink.com"
  className="filter-none"
/>
</PartnerCompanies>
<PartnerCompanies>
<img
  data-aos="fade-right"
  data-aos-delay="600"
  src={genesis}
  alt="genesis.com"
  className="filter-none"
/>
</PartnerCompanies>

          
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
