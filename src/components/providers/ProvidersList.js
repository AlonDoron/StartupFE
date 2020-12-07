import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { mapsConfig, locationConfig } from "config";
import { getProviders } from "api/wrappers/appService";
import LocationHandler from "api/LocationHandler";

const ProvidersList = (props) => {
  const [providers, setProviders] = useState([]);
  const [selfLocation, setSelfLocation] = useState({});

  const getProvidersAsync = async () => {
    const isLocationEnabled = await LocationHandler.getIsLocationEnabled();

    const latLonData = {};

    if (isLocationEnabled) {
      const location = await LocationHandler.getCurrentLocation();
      latLonData.Latitude = location.coords.latitude;
      latLonData.Longitude = location.coords.longitude;
    } else {
      latLonData.Latitude = mapsConfig.INITIAL_REGION.latitude;
      latLonData.Longitude = mapsConfig.INITIAL_REGION.longitude;
    }

    setSelfLocation(latLonData);

    const locationData = {
      Latitude: latLonData.Latitude,
      Longitude: latLonData.Longitude,
      Radius: locationConfig.RADIUS,
      MeasureUnit: locationConfig.MEASURE_UNIT,
    };

    return await getProviders(locationData);
  };

  const fetchAndSetProviders = () => {
    getProvidersAsync().then((providers) => setProviders(providers));
  };

  useEffect(() => {
    fetchAndSetProviders();

    const fetchProvidersInterval = setInterval(() => {
      fetchAndSetProviders();
    }, locationConfig.FETCH_PROVIDERS_INTERVAL_TIME);

    return () => clearInterval(fetchProvidersInterval);
  }, []);

  return (
    <>
      {providers.length > 0 &&
        providers.map((provider, id) => (
          <Marker
            key={id}
            coordinate={{
              longitude: provider.Location.Longitude,
              latitude: provider.Location.Latitude,
            }}
            title={provider.Title}
            description={provider.Description}
            onPress={() => props.onProviderPress(provider)}
          />
        ))}
      {selfLocation.Latitude && selfLocation.Longitude && (
        <Marker
          key="self"
          coordinate={{
            longitude: selfLocation.Longitude,
            latitude: selfLocation.Latitude,
          }}
          title="Your Location"
          pinColor={"#DAA520"}
        />
      )}
    </>
  );
};

export default ProvidersList;
