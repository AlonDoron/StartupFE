import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import {locationConfig} from '../config'

const useLocation = (shouldTrack) => {
  const [err, setErr] = useState(null);
  const [location, setLocation] = useState(locationConfig.initLocation)

  useEffect(() => {
    let subscriber;

    const startWatcing = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          throw new Error("Location Permissions not granted");
        }
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation, //accuracy of location is best for navigation(as walker, as biker, as driver)
            timeInterval: locationConfig.getLocationInterval, //getLocation every 1000ms
            distanceInterval: locationConfig.getDistanceInterval, // getLocation every 10meters
          },
          (location)=>{
            setLocation(location)
          }
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatcing();
    } else {
      if (subscriber) subscriber.remove();
      subscriber = null;
    }
    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [shouldTrack, location]);

  return [location,err];
};

export default useLocation