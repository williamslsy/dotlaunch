import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card } from '../Card';

const TokenLockLoader = () => {
  return (
    <Card>
      <SkeletonTheme baseColor="#c4c4c4" highlightColor="#e4e4e4">
        <Skeleton width={100} height={30} className="mb-10" />
        <div className="flex items">
          <Skeleton
            count={3}
            circle
            width={20}
            height={20}
            className="mb-2 mr-5"
          />
          <Skeleton count={3} width={200} height={10} className="mb-5" />
        </div>
      </SkeletonTheme>
    </Card>
  );
};

export default TokenLockLoader;
