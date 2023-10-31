import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
export interface Launch {
    id: number;
    flightNumber: number;
    logo: string;
    missionName: string;
    launchDate: string;
    success: boolean;
    rocket: string;
    ytbUrl: string;
  }