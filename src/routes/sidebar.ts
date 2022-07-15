/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'home', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  // {
  //   path: '/app/airdrop',
  //   icon: 'gift',
  //   name: 'Airdrops',
  // },
  // {
  //   path: '/app/leaderboard',
  //   icon: 'chart-bar',
  //   name: 'Leaderboard',
  // },
  {
    icon: 'coins',
    name: 'Mint Token',
    routes: [
      {
        path: '/app/token/create',
        name: 'Create Token',
      },
      {
        path: '/app/token/manage',
        name: 'Manage Tokens',
      },
    ],
  },
  {
    icon: 'rocket',
    name: 'Launchpad',
    routes: [
      // submenu
      {
        path: '/app/launchpad/create',
        name: 'Create Launchpad',
      },
      {
        path: '/app/fairlaunch/create',
        name: 'Create Fairlaunch',
      },
      {
        path: '/app/launchpad/lists',
        name: 'Launchpad Lists',
      },
    ],
  },
  // {
  //   icon: 'rocket',
  //   name: 'FairLaunch',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/app/fairlaunch/create',
  //       name: 'Create Fairlaunch',
  //     },
  //     {
  //       path: '/app/fairlaunch/lists',
  //       name: 'FairLaunch Lists',
  //     },
  //   ],
  // },
  {
    icon: 'lock',
    name: 'Lock',
    routes: [
      {
        path: '/app/token-lock',
        name: 'Create Lock',
      },
      {
        path: '/app/token-lockers',
        name: 'Token',
      },
      {
        path: '/app/liquidity-lockers',
        name: 'Liquidity',
      },
    ],
  },
  // {
  //   path: '/app/kyc',
  //   icon: 'id-card',
  //   name: 'KYC & Audit',
  // },
  // {
  //   path: '/app/docs',
  //   icon: 'file-alt',
  //   name: 'Documentation',
  // },
];

export default routes;
