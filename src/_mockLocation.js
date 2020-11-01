import * as location from "expo-location";

const temMeterWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 34.7742678 + increment * temMeterWithDegrees,
      latitude: 31.9779457 + increment * temMeterWithDegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  location.EventEmitter.emit("Expo.locationChanged", {
    watchId: location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
