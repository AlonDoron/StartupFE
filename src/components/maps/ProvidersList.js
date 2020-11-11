import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { View } from "react-native";
import { locationConfig } from "config";
import { getProviders } from "api/wrappers/appService";

const getProvidersAsync = (setProviders) => {
  getProviders({
    Latitude: 31.978821,
    Longitude: 34.772711,
    Radius: 1000,
    MeasureUnit: 0,
  }).then((providers) => {
    // console.log(providers.length);
    setProviders(providers);
  });
};

const ProvidersList = (props) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProvidersAsync(setProviders);
  }, []);

  return (
    <View>
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
    </View>
  );
};

export default ProvidersList;
