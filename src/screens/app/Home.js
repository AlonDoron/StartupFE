import React, {useState,useEffect} from "react";
import {StyleSheet,View} from 'react-native'
import { Map, OfflineMap, ToolTip } from "../../components/common";
import { Marker} from 'react-native-maps'
import { Foundation } from "@expo/vector-icons";
import {useLocation} from '../../hooks'
import HttpClient from "../../api/HttpClient";
import { apiConfig, locationConfig } from "../../config";

const Home = (props) => {
 const [{coords}, err ] = useLocation(true)
const [serviceProviders, setServiceProviders] = useState([])
const [isLocation ,setIsLocation] = useState(false)
const [toolTipData, setToolTipData] = useState({
  data:{},
  isActive: false,
})

const dataObject={
  image_url:'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
  rating:4,
  full_name:'Jacob',
  title:'Jacob Store'
}

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
   <Map style={styles.map} location={ coords}>
      {serviceProviders.map(({Id,Location}, i) => {
        if (Location.Latitude && Location.Longitude) {
         return(<Marker
            key={i}
            coordinate={{
              latitude: Location.Latitude,
              longitude:Location.Longitude
            }}
            pinColor={"#ffd1dc"}
            onPress={()=>{
              console.log('marker pressed')
              setToolTipData(oldState=>({
                ...oldState, data:{Id, ...dataObject}, isActive:true
              }))
            }}
          />)
        }
      })}
       <ToolTip
       visible={toolTipData.isActive} 
       providerData={toolTipData.data}
        hideToolTip={()=>  setToolTipData(oldState=>({...oldState,  isActive:true }))}
        />
      </Map>
      :
      <OfflineMap style={styles.map}/>
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

const styles = StyleSheet.create({
  map:{
    flex:1
  }
})

export default Home;
