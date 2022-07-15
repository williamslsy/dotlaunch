import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardSubHeader,
} from '../../../../components/common/Card';
import { Countdown } from '../../../../components/common/CountdownTimer';
import { LaunchInfoText } from '../../../../components/layout/LaunchComponent';
import { formatTimeStamp } from '../../../../utils';
import { tokenLocks } from './demo-lock-data';

const LockDetails = () => {
  const params = useParams();
  const [lock, setLock] = useState<any>();
  useEffect(() => {
    if (params && params.id) {
      const id = params.id;
      const currentLock = tokenLocks.find((lock) => lock.id === parseInt(id));
      setLock(currentLock);
    }
    console.log(params.id);
  }, [params]);

  if (!lock) return null;

  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 pt-20">
      {/* <Card
        style={{ height: 'fit-content' }}
        className="w-full md:w-1/3 md:sticky md:top-1"
      >
        <CardSubHeader>{lock.tokenSymbol} Records</CardSubHeader>
      </Card> */}
      <Card className="w-full md:w-2/3 mx-auto">
        <div className="mb-8">
          <h3 className="pb-3 font-bold">Lock Info</h3>
          <hr />
        </div>
        <div className="space-y-4">
          <LaunchInfoText>
            Token Address: <span>{lock.tokenAddress}</span>
          </LaunchInfoText>
          <LaunchInfoText>
            Token Name: <span>{lock.tokenName}</span>
          </LaunchInfoText>
          <LaunchInfoText>
            Token Symbol: <span>{lock.tokenSymbol}</span>
          </LaunchInfoText>
          <LaunchInfoText>
            Amount Locked: <span>{lock.amountLocked}</span>
          </LaunchInfoText>
          <LaunchInfoText>
            Total Locks: <span>{lock.totalLocks}</span>
          </LaunchInfoText>
          <LaunchInfoText>
            Lock Timer: <Countdown eventTime={formatTimeStamp(lock.date)} />
          </LaunchInfoText>
        </div>
      </Card>
    </div>
  );
};

export default LockDetails;
