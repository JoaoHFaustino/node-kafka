import crypto from 'crypto';

export const generateTransactionIdHelper = (): string => {
    return crypto.randomBytes(16).toString('hex');
  };

  