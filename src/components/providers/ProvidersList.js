import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { locationConfig } from "config";
import { getProviders } from "api/wrappers/appService";

const getProvidersAsync = (userLocation, setProviders) => {
  const locationData = {
    Latitude: userLocation.coords.latitude,
    Longitude: userLocation.coords.longitude,
    Radius: locationConfig.RADIUS,
    MeasureUnit: locationConfig.MEASURE_UNIT,
  };

  getProviders(locationData).then((providers) => setProviders(providers));
};

const ProvidersList = (props) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProvidersAsync(props.userLocation, setProviders);

    const fetchProvidersInterval = setInterval(() => {
      getProvidersAsync(props.userLocation, setProviders);
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
    </>
  );
};

export default ProvidersList;
