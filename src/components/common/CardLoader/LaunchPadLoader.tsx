import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card } from '../Card';

const LaunchPadLoader = () => {
  return (
    <Card>
      <SkeletonTheme baseColor="#c4c4c4" highlightColor="#e4e4e4">
        <div className="flex items-center justify-between mb-3">
          <Skeleton circle width={60} height={60} />
          <Skeleton width={100} />
        </div>
        <Skeleton width={100} />
        <Skeleton width={50} />
        <Skeleton className="my-5" height={150} />
        <div className="flex justify-between">
          <Skeleton count={3} width={100} />
          <Skeleton count={3} width={100} />
        </div>
        <Skeleton className="mt-5" borderRadius="10rem" height={5} />
        <div className="flex justify-between mt-0">
          <Skeleton width={50} />
          <Skeleton width={50} />
        </div>
        <Skeleton className="mt-5" height={1} />
        <Skeleton width={100} height={35} />
      </SkeletonTheme>
    </Card>
  );
};

export default LaunchPadLoader;
