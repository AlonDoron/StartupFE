const initLocation={
  longitude:34.789720,
  latitude: 31.966739
}
const initDeltaCoords={
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
}

const getLocationInterval = 1000
const getDistanceInterval = 10 

const radius = 1000
const measureUnit = (unit) => unit

const locationConfig = {
    initLocation,
    getLocationInterval,
    getDistanceInterval,
    initDeltaCoords,
    radius,
    measureUnit
}

export default locationConfig