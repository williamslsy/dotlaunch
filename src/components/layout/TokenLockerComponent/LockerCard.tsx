import React from 'react';
import styled from 'styled-components';
import { TokenLocksType } from '../../../pages/Dashboard/Lock/LockLists/demo-lock-data';
import { formatTimeStamp } from '../../../utils';
import { Card, CardBody, CardHeader } from '../../common/Card';
import { Countdown } from '../../common/CountdownTimer';

const TokenText = styled.div.attrs(() => ({
  className: `space-x-3 flex flex-wrap items-center text-sm font-bold mb-3`,
}))`
  i {
    font-size: 1.5rem;
  }
`;

export const TokenLockerCard = ({ content }: { content: TokenLocksType }) => {
  return (
    <Card className="launch-card text-sm">
      <CardHeader>{content.tokenName}</CardHeader>
      <CardBody className="font-bold text-base">
        <TokenText>
          <i className="las la-calendar-alt"></i> <p>{content.date}</p>
        </TokenText>
        <TokenText>
          <i className="las la-hourglass-half"></i>
          <Countdown eventTime={formatTimeStamp(content.date)} />
        </TokenText>
        <TokenText>
          <i className="las la-business-time"></i>{' '}
          <p>
            {content.amountLocked} {content.tokenSymbol}
          </p>
        </TokenText>
      </CardBody>
    </Card>
  );
};
