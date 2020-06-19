import { AsyncStorage } from "react-native";
import { DeviceConfig } from "../config";

const writeTokenToDevice = async (token) => {
  await AsyncStorage.setItem(DeviceConfig.DEVICE_TOKEN_NAME, token);
};

const removeTokenFromDevice = async (token) => {
  await AsyncStorage.removeItem(DeviceConfig.DEVICE_TOKEN_NAME);
};

export default {
  writeTokenToDevice,
  removeTokenFromDevice,
};
