import { FC } from 'react';

export type IRoute = {
  label: string;
  path: string;
  isAbsolute: boolean;
  page: any;
  layout: any;
  icon: FC;
};
