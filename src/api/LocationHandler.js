import * as Location from "expo-location";
import { Alert } from "react-native";

const getIsLocationEnabled = async () => {
  let granted = await Location.hasServicesEnabledAsync();

  return granted;
};

const getCurrentLocation = async () => {
  const locationOptions = {
    Accuracy: Location.Accuracy.BestForNavigation,
  };

  try {
    let { granted } = await Location.getPermissionsAsync();

    if (granted) return await Location.getCurrentPositionAsync(locationOptions);
    else
      Alert.alert(
        "Please enable location permissions for cherry services in your settings."
      );
  } catch (error) {
    let status = await Location.hasServicesEnabledAsync();
    if (!status) {
      Alert.alert("GPS signal lost.");
    }
  }
};

export default {
  getIsLocationEnabled,
  getCurrentLocation,
};
