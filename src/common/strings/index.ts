import DeviceInfo from 'react-native-device-info';
import {StringsType} from './type';
import {CommonStringsBoa} from './boa';
import {CommonStringsPlurix} from './plurix';
import {CommonStringsSuperpao} from './superpao';

const nameApp = DeviceInfo.getApplicationName();

const RootCommonStrings: {[key: string]: StringsType} = {
  superpao: CommonStringsSuperpao,
  boa: CommonStringsBoa,
};

export const CommonStrings: StringsType =
  RootCommonStrings[nameApp] || CommonStringsPlurix;
