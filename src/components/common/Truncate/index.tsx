/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

const Truncate = ({
  text,
  length = 50,
  trailingText = '...',
  className,
  ...rest
}: {
  text: string;
  length?: number;
  trailingText?: string;
  className?: string;
}) => {
  const [truncatedString, setTruncatedString] = useState('');

  const truncateText = () => {
    if (text.length > length) {
      setTruncatedString(
        text.substring(0, length - trailingText.length) + trailingText
      );
    } else {
      setTruncatedString(text);
    }
  };

  useEffect(() => {
    truncateText();
  }, [length]);

  return (
    <h3 {...rest} className={className}>
      {truncatedString}
    </h3>
  );
};

export default Truncate;
