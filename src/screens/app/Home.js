import React, {useState,useEffect} from "react";
import { View, ActivityIndicator,StatusBar } from "react-native";
import { Text } from "react-native-paper";
import { Map } from "../../components/common";
import {Marker} from 'react-native-maps'
import { Foundation } from "@expo/vector-icons";
import {useLocation} from '../../hooks'
import HttpClient from "../../api/HttpClient";
import { apiConfig } from "../../config";
const Home = (props) => {
 const [location, err ] = useLocation(true)
const [consumers, setConsumers] = useState([])
  useEffect(() => {
    console.log("useEfefct");
    if(!location || Object.keys(location).length === 0) return undefined
    HttpClient.get(
      apiConfig.CONSUMER_PORT,
      `/api/Consumer?Latitude=${location.coords.latitude}&Longitude=${location.coords.longitude}&Radius=1000&MeasureUnit=0`
    )
      .then((res) => setConsumers(res))
      .catch((err) => console.log(err));
  }, [location]);
  return (
    <View style={{flex:1 }}>
      {(!location || Object.keys(location).length === 0)
      ?
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
      :
        
        <Map location={location.coords}>
        {consumers.map((consumer,index)=>{
          return(
              <Marker key={index} coordinate={{
            longitude: consumer.Location.longitude || 0,
            latitude: consumer.Location.latitude || 0
          }} />
          )
        } )}
      </Map>
      
      }
     
    </View>
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default Home;
