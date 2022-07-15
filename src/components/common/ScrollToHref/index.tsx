import React from 'react';

export default function ScrollToHref({
  children,
  target,
}: {
  children: React.ReactElement;
  target: string;
}) {
  return (
    <children.type
      {...children.props}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();

        document.getElementById(target)?.scrollIntoView({
          behavior: 'smooth',
        });
        if (children.props.onClick) {
          children.props.onClick();
        }
      }}
    />
  );
}
