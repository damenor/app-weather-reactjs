import { ComponentClass, FunctionComponent } from 'react'

export interface IRoute {
  path: string;
  component: FunctionComponent<any> | ComponentClass<any, any> | ComponentClass<any, any> | undefined;
  isExact?: boolean;
  isRedirect?: boolean;
}