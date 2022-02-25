import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'AvUBeD6AAe1cG6MVytMYN1yqBrWZoaapc1JLDNbpC8qN'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '9k22Xn2a9AJCnRsTNA3rCcwqi8hqQTXwqJ7ZS6X1kwQ7'
);
