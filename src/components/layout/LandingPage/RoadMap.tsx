import React, {useEffect} from 'react';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from '../../common/Button';
import { Card } from '../../common/Card';
import dotRoadmap from '../../../assets/images/dot_Roadmap.svg';
import dotRoadmapMobile from '../../../assets/images/dot_Roadmap_mobile.svg';
import { AppContainer } from '../AppContainer';
import { SectionHeader } from './SectionHeader';
import "./Roadmap.css"
const RoadMapNumber = styled.div.attrs(() => ({
  className: `relative flex justify-center items-center mr-auto`,
}))`
  width: 4rem;
  height: 4rem;

  .background-span {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.secondaryRed};
    transform: rotate(45deg);
  }
  .number-span {
    font-size: 1.5rem;
    font-weight: 700;
    transform: rotate(0);
    color: ${(props) => props.theme.colors.primaryRed};
  }
`;
interface IRoadMapBullet {
  completed?: boolean;
}
const RoadMapBullet = styled.i.attrs<IRoadMapBullet>(() => ({
  className: `las la-check font-bold mt-1`,
}))<IRoadMapBullet>`
  border-radius: 99px;
  background: ${(props) =>
    props.completed ? props.theme.colors.secondaryBlue : '#ffffff20'};
  color: ${(props) =>
    props.completed ? props.theme.colors.primaryBlue : '#ffffff'};
  padding: 5px;
  height: fit-content;
`;

const RoadMapItem = styled.h5.attrs(() => ({
  className: `text-lg`,
}))``;

export const RoadMap = () => {

  const [roadMapImg, setRoadMapImg] = React.useState(window.innerWidth > 800 ? dotRoadmap : dotRoadmapMobile)

  useEffect(()=> {

  const event =   window.addEventListener('resize', (e)=> {
           const img = window.innerWidth > 800 ? dotRoadmap : dotRoadmapMobile
           setRoadMapImg(img)

    })
 

  }, [])


  return (
    <div className="w-full py-20" id="roadmap">
      <AppContainer>
        <div>
          <SectionHeader>RoadMap</SectionHeader>
        </div>
        <div className="content-evenly grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className='floater'>
            <h3 data-aos="fade-right" data-aos-delay="300" className="font-bold app-font text-2xl mt-8">
            Our Roadmap for 2022
            </h3>
           <p>
           Roadmap will continuously change as we progress with our project. 
           For updates and news, join our Telegram announcement channel</p>
           <a 
           href='http://t.me/DotLaunch'><PrimaryButton data-aos="fade-right"
           data-aos-delay="100" cursor-pointer>Join Telegram</PrimaryButton></a>
          </div>
          <img className="col-span-3 row-span-3 dot_img" style={{marginTop: `${window.innerWidth > 800 ? '-300px': '0'}`}} src={roadMapImg} alt="DotLaunch Roadmap" />
        </div>
      </AppContainer>
    </div>
  );
};
