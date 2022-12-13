import DeviceInfo from 'react-native-device-info';

import {ThemeBoa} from './boa';
import {ThemePlurix} from './plurix';
import {ThemeSuperpao} from './superpao';

import {themeType} from './type';

const nameApp = DeviceInfo.getApplicationName();

const RootThemes: {[key: string]: themeType} = {
  superpao: ThemeSuperpao,
  boa: ThemeBoa,
};

export const themes = RootThemes[nameApp] || ThemePlurix;
