import React from 'react';
import { RouteProps } from 'react-router-dom';

export interface TRoute extends RouteProps {
  path: string;
  // render?: (props: RouteComponentProps<any>) => JSX.Element
  icon?: string;
  name: string;
  routes?: TRoute[];
  public?: boolean;
  isExternal?: boolean;
}
export interface IRoute {
  key?: number;
  path: string;
  component: React.ComponentType; // HERE
}
