import React, {useState,useEffect} from "react";
import { Map } from "../../components/common";
import {Marker} from 'react-native-maps'
import { Foundation } from "@expo/vector-icons";
import {useLocation} from '../../hooks'
import HttpClient from "../../api/HttpClient";
import { apiConfig } from "../../config";
const Home = (props) => {
 const [location, err ] = useLocation(true)
const [serviceProviders, setServiceProviders] = useState([])
const [isLocation ,setIsLocation] = useState(false)
const initLocation={
  longitude:34.7789174,
  latitude: 31.9882718
}
  useEffect(() => {
    if(!location || Object.keys(location).length === 0){
        setIsLocation(false)
    } else{
        setIsLocation(true)
    }
   HttpClient.get(
      apiConfig.CONSUMER_PORT,
      `/api/Consumer?Latitude=${isLocation?location.coords.latitude:initLocation.latitude}&Longitude=${isLocation?location.coords.longitude:initLocation.longitude}&Radius=1000&MeasureUnit=0`
    )
      .then((res) => setServiceProviders(res))
      .catch((err) => console.log(err));
  }, [location]);
  return (
    <Map location={ Object.keys(location).length === 0?initLocation:location.coords}>
      {serviceProviders.map((provider, i) => {
        if (provider.Location.Latitude && provider.Location.Longitude) {
          console.log("TEST", provider.Location.Longitude);
         return(<Marker
            key={i}
            coordinate={{
              latitude: provider.Location.Latitude,
              longitude:provider.Location.Longitude
            }}
            title={"noam"}
            pinColor={"#ffd1dc"}
          />)
        }
      })}
      </Map>
  
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default Home;
