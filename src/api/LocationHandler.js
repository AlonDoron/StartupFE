import * as Location from "expo-location";
import { Alert } from "react-native";

const getCurrentLocation = async () => {
  const locationOptions = {
    Accuracy: Location.Accuracy.BestForNavigation,
  };

  try {
    let { granted } = await Location.getPermissionsAsync();

    if (granted) {
      // TODO: SHOW PERMISSION WINDOW ON IOS
      let currPos = await Location.getCurrentPositionAsync(locationOptions);
      Alert.alert(
        "Latitude: " +
          currPos.coords.latitude +
          " \nLongitude: " +
          currPos.coords.longitude
      );

      return currPos;
    } else {
      Alert.alert("ENABLE LOCATION PERMISSIONS IN YOUR PHONE SETTINGS!!!");
      return "Permission to access location was denied";
    }
  } catch (error) {
    let status = await Location.hasServicesEnabledAsync();
    if (!status) {
      Alert.alert("WHY YOU DONT WANT TO TURN ON YOUR LOCATION?!");
    }
  }
};

export default {
  getCurrentLocation,
};
