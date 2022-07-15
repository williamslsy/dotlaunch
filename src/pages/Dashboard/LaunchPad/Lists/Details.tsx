import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Avatar } from '../../../../components/common/Avatar';
import { Badge } from '../../../../components/common/Badge';
import { PrimaryButton } from '../../../../components/common/Button';
import { Card, CardHeader } from '../../../../components/common/Card';
import { Countdown } from '../../../../components/common/CountdownTimer';
import { SocialIcons } from '../../../../components/common/Icons';
import {
  Input,
  InputContainer,
  InputHint,
} from '../../../../components/common/Inputs';
import { Progress } from '../../../../components/common/Progress';
import { LaunchInfoText } from '../../../../components/layout/LaunchComponent';
import { ChartJs } from '../../../../components/layout/LaunchComponent/Chart';
import { lists, ListsType } from './demo-data';

const LaunchPadDetails = () => {
  const params = useParams();
  const [pool, setPool] = useState<ListsType>();
  const [poolAmount, setPoolAmount] = useState('');

  const timeStamp = parseInt(moment('2022-01-01 18:06:03').format('x'), 10);

  useEffect(() => {
    if (params && params.id) {
      const id = params.id;
      const currentPool = lists.find((list) => list.id === parseInt(id));
      setPool(currentPool);
    }
    console.log(params.id);
  }, [params]);

  if (!pool) return null;

  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 pt-16 relative">
      <Card
        style={{ height: 'fit-content' }}
        className="w-full md:w-1/3 md:sticky md:top-1"
      >
        <div className="flex justify-between items-center">
          <div className="pb-8">
            <Badge size="1.3rem" color="primary">
              ${pool.symbol}
            </Badge>
          </div>
        </div>
        <div className="text-center pb-5">
          PreSale starts in <Countdown eventTime={timeStamp} />
        </div>
        <div className="mb-8">
          <Progress type="line" percent={pool.progress} />
          <div className="flex justify-between">
            <p>{pool.amountRaised}</p>
            <p>{pool.hardCap}</p>
          </div>
        </div>
        <InputContainer>
          <Input
            name="poolAmount"
            type="number"
            onChange={(e) => setPoolAmount(e.target.value)}
            placeholder={`1 BNB = ${pool.price}`}
          />
          <InputHint>Min: 0.1 | Max: 3</InputHint>
        </InputContainer>
        <InputContainer className="text-right mb-5">
          <PrimaryButton>Buy</PrimaryButton>
        </InputContainer>
      </Card>
      <div className="w-full md:w-2/3">
        <Card>
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Avatar src={pool.logo} alt={pool.name} />
              <CardHeader>{pool.name}</CardHeader>
            </div>
            <div>
              <Badge
                color={
                  pool.status === 'Upcoming'
                    ? 'warn'
                    : pool.status === 'Live'
                    ? 'green'
                    : pool.status === 'Ended'
                    ? 'primary'
                    : 'primary'
                }
              >
                {pool.status}
              </Badge>
            </div>
          </div>
          {/* Description */}
          <div className="py-4">
            <p className="opacity-80">{pool.description}</p>
            <div className="flex space-x-2 pt-4">
              <SocialIcons href="https://www.facebook.com" target="_blank">
                <i className="lab la-facebook"></i>
              </SocialIcons>
              <SocialIcons>
                <i className="lab la-twitter"></i>
              </SocialIcons>
              <SocialIcons>
                <i className="lab la-telegram"></i>
              </SocialIcons>
              <SocialIcons>
                <i className="las la-anchor"></i>
              </SocialIcons>
              <SocialIcons>
                <i className="lab la-github"></i>
              </SocialIcons>
              <SocialIcons>
                <i className="lab la-reddit"></i>
              </SocialIcons>
            </div>
          </div>
          <div className="pt-8">
            <hr />
            <CardHeader className="py-2">Pool Details</CardHeader>
            <hr />
            <div className="space-y-5 pt-8">
              <LaunchInfoText>
                PreSale Address: <span>{pool.presaleAddress}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Token Address: <span>{pool.presaleAddress}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Token Name: <span>{pool.name}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Token Symbol: <span>{pool.symbol}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Token Decimal: <span>{pool.tokenDecimal}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Total Supply: <span>{pool.totalSupply}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Tokens For Presale: <span>{pool.presaleTokens}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Soft Cap: <span>{pool.softCap}</span>
              </LaunchInfoText>
              <LaunchInfoText>
                Hard Cap: <span>{pool.hardCap}</span>
              </LaunchInfoText>
            </div>
          </div>
        </Card>
        <Card className="mt-5">
          <CardHeader>Metrics</CardHeader>
          <div className="pt-8">
            <ChartJs poolDetails={pool} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LaunchPadDetails;
