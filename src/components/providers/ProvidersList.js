import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { mapsConfig, locationConfig } from "config";
import { getProviders } from "api/wrappers/appService";
import LocationHandler from "api/LocationHandler";

const ProvidersList = (props) => {
  const [providers, setProviders] = useState([]);

  const getProvidersAsync = async () => {
    const location = await LocationHandler.getCurrentLocation();

    const locationData = {
      Latitude: location.coords.latitude,
      Longitude: location.coords.longitude,
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
    </>
  );
};

export default ProvidersList;
