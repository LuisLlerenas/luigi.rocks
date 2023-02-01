import { NODE_ENV } from './constants';

export enum ENV {
  dev = 'development',
  prod = 'production',
}

export const isDev = () => NODE_ENV === ENV.dev;
export const isProd = () => NODE_ENV === ENV.prod;
