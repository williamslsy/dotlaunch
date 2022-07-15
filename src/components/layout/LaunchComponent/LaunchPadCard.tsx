import React from 'react';
import { LaunchInfoText } from '.';
import { ListsType } from '../../../pages/Dashboard/LaunchPad/Lists/demo-data';
import { Avatar } from '../../common/Avatar';
import { Badge } from '../../common/Badge';
import { SecondaryButton } from '../../common/Button';
import { Card, CardHeader, CardSubHeader, CardBody } from '../../common/Card';
import { Progress } from '../../common/Progress';
import Truncate from '../../common/Truncate';

export const LaunchPadCard = ({ list }: { list: ListsType }) => {
  return (
    <Card className="launch-card">
      <div className="flex justify-between items-center">
        <Avatar src={list.logo} />
        <Badge
          color={
            list.status === 'Upcoming'
              ? 'warn'
              : list.status === 'Live'
              ? 'green'
              : list.status === 'Ended'
              ? 'primary'
              : 'primary'
          }
        >
          {list.status}
        </Badge>
      </div>
      <div className="mt-3">
        <CardHeader>{list.name}</CardHeader>
        <CardSubHeader>${list.symbol}</CardSubHeader>
        <CardBody>
          <Truncate
            className="opacity-80"
            text={list.description}
            length={150}
          />
          <div className="mt-10 space-y-2">
            <LaunchInfoText>
              Soft Cap: <span>{list.softCap}</span>
            </LaunchInfoText>
            <LaunchInfoText>
              Hard Cap: <span>{list.hardCap}</span>
            </LaunchInfoText>
            <LaunchInfoText>
              Price: <span>1BNB = {list.price}</span>
            </LaunchInfoText>
            <LaunchInfoText>
              Unlocks In: <span>{list.lockTime}</span>
            </LaunchInfoText>
            <div className="pb-5">
              <p className="text-right font-bold my-2">{list.progress}%</p>
              <Progress
                type="line"
                percent={list.progress}
                strokeWidth={2}
                trailWidth={2}
              />
              <div className="flex justify-between font-bold opacity-80 mt-2">
                <p>{list.amountRaised}</p>
                <p>{list.hardCap}</p>
              </div>
            </div>
            <hr />
            <div className="pt-5">
              <SecondaryButton className="pointer-events-none" size="small">
                Requires KYC
              </SecondaryButton>
            </div>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};
