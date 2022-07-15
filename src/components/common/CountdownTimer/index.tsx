import moment from 'moment';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const calculateDuration = (eventTime: number) =>
  moment.duration(
    Math.max(eventTime - Math.floor(Date.now() / 1000), 0),
    'seconds'
  );

export function Countdown({
  eventTime,
  interval,
}: {
  eventTime: number;
  interval?: number;
}) {
  const [duration, setDuration] = useState(calculateDuration(eventTime));
  const timerRef = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(eventTime));
  }, [eventTime]);

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, interval);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [eventTime]);

  return (
    <div className="font-bold text-sm">
      {duration.days()} Days {duration.hours()} Hrs {duration.minutes()} Mins{' '}
      {duration.seconds()} Secs
    </div>
  );
}
