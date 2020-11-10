import { AsyncStorage } from "react-native";
import { deviceConfig } from "config";

const writeTokenToDevice = async (token) => {
  await AsyncStorage.setItem(deviceConfig.DEVICE_TOKEN_NAME, token);
};

const getTokenFromDevice = async () => {
  const token = await AsyncStorage.getItem(deviceConfig.DEVICE_TOKEN_NAME);
  return token;
};
const removeTokenFromDevice = async () => {
  await AsyncStorage.removeItem(deviceConfig.DEVICE_TOKEN_NAME);
};

export default {
  writeTokenToDevice,
  getTokenFromDevice,
  removeTokenFromDevice,
};
