import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'AAchXqCceMw6vCgo2BL1JhdjBLNGUmf3rpbhMeaUt1dM'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '6WLTpV8DtL75Tn81Z82RMzp9qtK8TmxLkZkjY4eRTREf'
);
