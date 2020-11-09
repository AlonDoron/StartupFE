import React, {useState,useEffect} from "react";
import { Map, OfflineMap } from "../../components/common";
import { Marker} from 'react-native-maps'
import { Foundation } from "@expo/vector-icons";
import {useLocation} from '../../hooks'
import HttpClient from "../../api/HttpClient";
import { apiConfig, locationConfig } from "../../config";
const Home = (props) => {
 const [{coords}, err ] = useLocation(true)
const [serviceProviders, setServiceProviders] = useState([])
const [isLocation ,setIsLocation] = useState(false)

  useEffect(() => {
    if(!coords || err ){
        setIsLocation(false)
    } else{
        setIsLocation(true)
         HttpClient.get(
      apiConfig.CONSUMER_PORT,
      `/api/Consumer?Latitude=${coords.latitude}&Longitude=${coords.longitude}&Radius=${locationConfig.radius}&MeasureUnit=0`
    )
      .then((res) => setServiceProviders(res))
      .catch((err) => console.log(err));
    }
  }, [coords, err]);
  
  return (
    
    isLocation?
   <Map location={ coords}>
      {serviceProviders.map(({Location}, i) => {
        if (Location.Latitude && Location.Longitude) {
         return(<Marker
            key={i}
            coordinate={{
              latitude: Location.Latitude,
              longitude:Location.Longitude
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
