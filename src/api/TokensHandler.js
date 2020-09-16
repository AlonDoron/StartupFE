import { AsyncStorage } from "react-native";
import { DeviceConfig } from "../config";

const writeTokenToDevice = async (token) => {
  await AsyncStorage.setItem(DeviceConfig.DEVICE_TOKEN_NAME, token);
};

const getTokenFromDevice = async () => {
  const token = await AsyncStorage.getItem(DeviceConfig.DEVICE_TOKEN_NAME);
  return token;
};
const removeTokenFromDevice = async () => {
  await AsyncStorage.removeItem(DeviceConfig.DEVICE_TOKEN_NAME);
};

export default {
  writeTokenToDevice,
  getTokenFromDevice,
  removeTokenFromDevice,
};
