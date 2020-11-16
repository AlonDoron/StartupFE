import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { locationConfig } from "config";

const setIsLocationEnabled = async () => {
  const isLocationEnabled = await Location.hasServicesEnabledAsync();
  if (!isLocationEnabled) {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
  }
};

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const locationOptions = {
    Accuracy: Location.Accuracy.BestForNavigation,
    timeInterval: locationConfig.FETCH_PROVIDERS_INTERVAL_TIME,
    distanceInterval: locationConfig.FETCH_PROVIDERS_INTERVAL_RADIUS,
  };

  useEffect(
    (isTracking) => {
      (async () => {
        try {
          setIsLocationEnabled();

          if (isTracking) {
            let location = await Location.watchPositionAsync(
              locationOptions,
              (currLocation) => setLocation(currLocation)
            );

            setLocation(location);
          }
        } catch (locationError) {
          setErrorMsg(locationError);
        }
      })();

      return () => {
        if (location) location.remove();
      };
    },
    [isTracking, location]
  );

  return [location, errorMsg];
};

export default useLocation;
