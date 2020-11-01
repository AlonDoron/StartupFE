import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import {locationConfig} from '../config'

const shallowEqualLocation = (object1, object2) => {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (let key of keys1) {
        if (object1[key] !== object2[key]) {
        return false;
      }
      }

      return true;
  }


const useLocation = (shouldTrack) => {
  const [err, setErr] = useState(null);
  const [location, setLocation] = useState({})

  const watchPositionOption = {
    accuracy: Accuracy.BestForNavigation, 
    timeInterval: locationConfig.getLocationInterval, 
    distanceInterval: locationConfig.getDistanceInterval, 
  }

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          throw new Error("Location Permissions not granted");
        }
        subscriber = await watchPositionAsync(
          watchPositionOption,
          (newLocation)=>{
            // console.log('newLocation', newLocation)
            // console.log('location', location)
            if(location.coords){
                if(!shallowEqualLocation(newLocation.coords, location.coords)){
                    setLocation(newLocation)
                }
            }else{
              setLocation(newLocation)
            }
          
          }
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
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