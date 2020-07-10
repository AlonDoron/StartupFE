import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

let useLocation = (shouldTrack) => {
  const [err, setErr] = useState(null);

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
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          (location) => {
            console.log(location);
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
  }, [shouldTrack]);

  return [err];
};

export default useLocation;
