import React, {useState,useEffect} from "react";
import { Map, OfflineMap } from "../../components/common";
import {Circle, Marker} from 'react-native-maps'
import { Foundation } from "@expo/vector-icons";
import {useLocation} from '../../hooks'
import HttpClient from "../../api/HttpClient";
import { apiConfig, locationConfig } from "../../config";
const Home = (props) => {
 const [location, err ] = useLocation(true)
const [serviceProviders, setServiceProviders] = useState([])
const [isLocation ,setIsLocation] = useState(false)

  useEffect(() => {
    if(!location || Object.keys(location).length === 0){
        setIsLocation(false)
    } else{
        setIsLocation(true)
         HttpClient.get(
      apiConfig.CONSUMER_PORT,
      `/api/Consumer?Latitude=${location.coords.latitude}&Longitude=${location.coords.longitude}&Radius=${locationConfig.radius}&MeasureUnit=0`
    )
      .then((res) => setServiceProviders(res))
      .catch((err) => console.log(err));
    }
  //  HttpClient.get(
  //     apiConfig.CONSUMER_PORT,
  //     `/api/Consumer?Latitude=${isLocation?location.coords.latitude:locationConfig.initLocation.latitude}&Longitude=${isLocation?location.coords.longitude:locationConfig.initLocation.longitude}&Radius=${locationConfig.radius}&MeasureUnit=0`
  //   )
  //     .then((res) => setServiceProviders(res))
  //     .catch((err) => console.log(err));
  }, [isLocation,location]);
  
  return (
    
    isLocation?
   <Map location={ isLocation?location.coords:initLocation}>
      <Marker pinColor='#FFD700' coordinate={location.coords} title='Consumer'/>
      <Circle center={location.coords} radius={locationConfig.radius}/>
      {serviceProviders.map((provider, i) => {
        if (provider.Location.Latitude && provider.Location.Longitude) {
         return(<Marker
            key={i}
            coordinate={{
              latitude: provider.Location.Latitude,
              longitude:provider.Location.Longitude
            }}
            title={"Provider"}
            pinColor={"#ffd1dc"}
          />)
        }
      })}
      </Map>
      :
      <OfflineMap/>
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default Home;
