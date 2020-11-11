import React from "react";
import { Marker } from "react-native-maps";
import { View } from "react-native";

const ProvidersList = (props) => {
  return (
    <View>
      {props.providers.length > 0 &&
        props.providers.map((provider, id) => (
          <Marker
            key={id}
            coordinate={{
              longitude: provider.location.longitude,
              latitude: provider.location.latitude,
            }}
            title={provider.title}
            description={provider.description}
          />
        ))}
    </View>
  );
};

export default ProvidersList;
