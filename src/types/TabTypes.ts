import { JSX } from 'react';

   export type Tab = {
    id: string;
    label: string;
  }
  
 export type TabContent = {
    [key: string]: JSX.Element;
  }