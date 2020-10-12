const initLocation={
  longitude:34.7789174,
  latitude: 31.9882718
}

const getLocationInterval = 1000

const  getDistanceInterval = 10 

const initDeltaCoords={
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
}
   

const locationConfig = {
    initLocation,
    getLocationInterval,
    getDistanceInterval,
    initDeltaCoords
}

export default locationConfig