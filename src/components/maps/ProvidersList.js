import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { mapsConfig, locationConfig } from "config";
import { getProviders } from "api/wrappers/appService";

const getProvidersAsync = (setProviders) => {
  getProviders({
    Latitude: mapsConfig.INITIAL_REGION.latitude,
    Longitude: mapsConfig.INITIAL_REGION.longitude,
    Radius: locationConfig.RADIUS,
    MeasureUnit: locationConfig.MEASURE_UNIT,
  }).then((providers) => setProviders(providers));
};

const ProvidersList = (props) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProvidersAsync(setProviders);

    const fetchProvidersInterval = setInterval(() => {
      getProvidersAsync(setProviders);
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
          />
        ))}
    </>
  );
};

export default ProvidersList;
