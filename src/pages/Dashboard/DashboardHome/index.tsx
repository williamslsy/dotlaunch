import React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/common/Button';
import {
  Card,
  CardIcon,
  CardBody,
  CardHeader,
} from '../../../components/common/Card';
import MintCoin from '../../../assets/images/mint-coin.svg';
import LockCoin from '../../../assets/images/lock-coin.svg';
import LaunchCoin from '../../../assets/images/launch-coin.svg';
import { lists } from '../LaunchPad/Lists/demo-data';
import { Link } from 'react-router-dom';
import { LaunchPadCard } from '../../../components/layout/LaunchComponent/LaunchPadCard';

const DashboardHome = () => {
  return (
    <div className="pt-28">
      <div className="pb-20 text-center">
        <h3 className="text-2xl md:text-4xl font-black mb-5">
          The Leading Launchpad Protocol For Everyone
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem
        </p>
        <div className="space-x-4 mt-10">
          <Link to="/app/launchpad/create">
            <PrimaryButton>Create Token</PrimaryButton>
          </Link>
          <Link to="/app/launchpad/lists">
            <SecondaryButton>Upcoming Sales</SecondaryButton>
          </Link>
        </div>
      </div>

      <div className="pb-20 grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
        <Card className="text-left flex justify-between items-center">
          <div>
            <h3>Total Liquidity</h3>
            <p className="font-bold text-3xl">$1,000</p>
          </div>
          <CardIcon>
            <i className="las la-dollar-sign"></i>
          </CardIcon>
        </Card>
        <Card className="text-left flex justify-between items-center">
          <div>
            <h3>Projects Launched</h3>
            <p className="font-bold text-3xl">12,000</p>
          </div>
          <CardIcon>
            <i className="las la-rocket"></i>
          </CardIcon>
        </Card>
        <Card className="text-left flex justify-between items-center">
          <div>
            <h3>Upcoming Launches</h3>
            <p className="font-bold text-3xl">500</p>
          </div>
          <CardIcon>
            <i className="las la-hourglass-start"></i>
          </CardIcon>
        </Card>
      </div>

      <div className="py-20">
        <h3 className="font-bold text-3xl text-center">Trending PreSales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
          {lists.slice(0, 3).map((list) => (
            <Link to={`/app/launchpad/lists/${list.id}`} key={list.id}>
              <LaunchPadCard list={list} />
            </Link>
          ))}
        </div>
      </div>

      <div className="py-20 ">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-bold text-3xl">
            The Right Ecosystem For A Successful Project.{' '}
          </h3>
          <p>
            We provide the most secured and advanced tools for the world of
            decentralized finance. Token locker, Launchpad, Fairlaunch and many
            more.
          </p>
        </div>
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-4">
          <Card>
            <div className="text-center">
              <img className="mx-auto" width={100} src={MintCoin} alt="Mint" />
            </div>
            <div>
              <CardHeader className="my-5">Mint Token</CardHeader>
              <CardBody>
                We provide an easy and reliable way to mint your own token ,
                without the need for prior coding knowledge.
              </CardBody>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <img className="mx-auto" width={100} src={LockCoin} alt="Lock" />
            </div>
            <div>
              <CardHeader className="my-5">Lock Token</CardHeader>
              <CardBody>
                Lock your token on the exchange platform of your choice, to
                boost confidence on your project.
              </CardBody>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <img
                className="mx-auto"
                width={100}
                src={LaunchCoin}
                alt="Launch"
              />
            </div>
            <div>
              <CardHeader className="my-5">Token Launchpad</CardHeader>
              <CardBody>
                Launch your projects on the blockchain with just a few easy
                clicks.
              </CardBody>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default DashboardHome;
