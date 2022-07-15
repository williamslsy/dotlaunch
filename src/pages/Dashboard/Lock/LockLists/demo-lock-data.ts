export const tokenLocks = [
  {
    id: 1,
    tokenName: 'King Inu',
    tokenSymbol: 'KINU',
    tokenAddress: '0xB872057eE478B3eb77E74c9aA7B50Fe4Ed650e58',
    amountLocked: '25, 000, 000',
    tokenDecimals: 9,
    totalLocks: 2,
    date: '2022-01-01 18:06:03',
  },
  {
    id: 1,
    tokenName: 'Cake Locks',
    tokenSymbol: 'CALS',
    tokenAddress: '0xB872057eE478B3eb77E74c9aA7B50Fe4Ed650e58',
    amountLocked: '25, 000, 000',
    tokenDecimals: 9,
    totalLocks: 2,
    date: '2022-02-11 18:06:03',
  },
];

export interface TokenLocksType {
  id: number;
  tokenName: string;
  tokenSymbol: string;
  tokenAddress: string;
  amountLocked: string;
  tokenDecimals: number;
  totalLocks: number;
  date: string;
}
