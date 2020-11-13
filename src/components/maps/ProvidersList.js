import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { mapsConfig } from "config";
import { getProviders } from "api/wrappers/appService";

const getProvidersAsync = (setProviders) => {
  getProviders({
    Latitude: mapsConfig.INITIAL_REGION.latitude,
    Longitude: mapsConfig.INITIAL_REGION.longitude,
    Radius: 1000,
    MeasureUnit: 0,
  }).then((providers) => setProviders(providers));
};

const ProvidersList = (props) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProvidersAsync(setProviders);

    const fetchProvidersInterval = setInterval(() => {
      getProvidersAsync(setProviders);
    }, 3000);

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
