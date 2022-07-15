import { lazy } from 'react';
import { Spinner } from '../components/common/Spinner';
import { IRoute } from './types';

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard/DashboardHome'));
const MintToken = lazy(() => import('../pages/Dashboard/MintToken'));
const ManageTokens = lazy(
  () => import('../pages/Dashboard/MintToken/ManageTokens')
);
const CreateLaunchpad = lazy(
  () => import('../pages/Dashboard/LaunchPad/Create')
);
const CreateFairLaunch = lazy(
  () => import('../pages/Dashboard/FairLaunch/Create')
);
const LaunchpadLists = lazy(() => import('../pages/Dashboard/LaunchPad/Lists'));
const LaunchpadDetails = lazy(
  () => import('../pages/Dashboard/LaunchPad/Lists/Details')
);
const FairLaunchLists = lazy(
  () => import('../pages/Dashboard/FairLaunch/Lists')
);
const LockToken = lazy(() => import('../pages/Dashboard/Lock'));
const LockTokenList = lazy(
  () => import('../pages/Dashboard/Lock/LockLists/Token')
);
const LockLiquidityList = lazy(
  () => import('../pages/Dashboard/Lock/LockLists/Liquidity')
);
const LockDetailsPage = lazy(
  () => import('../pages/Dashboard/Lock/LockLists/LockDetails')
);

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */

export const Fallback = () => (
  <div className="mt-28 flex justify-center">
    <Spinner />
  </div>
);

const routes: IRoute[] = [
  {
    path: 'dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: 'token/create',
    component: MintToken,
  },
  {
    path: '/token/manage',
    component: ManageTokens,
  },
  {
    path: '/launchpad/create',
    component: CreateLaunchpad,
  },
  {
    path: '/launchpad/lists',
    component: LaunchpadLists,
  },
  {
    path: '/launchpad/lists/:id',
    component: LaunchpadDetails,
  },
  {
    path: '/fairlaunch/create',
    component: CreateFairLaunch,
  },
  {
    path: '/fairlaunch/lists',
    component: FairLaunchLists,
  },
  {
    path: '/token-lock',
    component: LockToken,
  },
  {
    path: '/token-lockers',
    component: LockTokenList,
  },
  {
    path: '/liquidity-lockers',
    component: LockLiquidityList,
  },
  {
    path: '/token-lockers/:id',
    component: LockDetailsPage,
  },
];

export default routes;
