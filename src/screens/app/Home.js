import React, {useState,useEffect} from "react";
import {StyleSheet} from 'react-native'
import { Map, OfflineMap, ToolTip, ServiceProviderMarker } from "../../components/maps";
import { Foundation } from "@expo/vector-icons";
import {useLocation} from '../../hooks'
import {getServiceProviders} from '../../api/wrappers/locationService'
import { locationConfig } from "../../config";

const Home = (props) => {
 const [{coords}, err ] = useLocation(true)
 const [serviceProviders, setServiceProviders] = useState([])
 const [isLocation ,setIsLocation] = useState(false)
 const [toolTipData, setToolTipData] = useState({
  data:{},
  isActive: false,
 })

  useEffect(() => {
    if(!coords || err ){
      setIsLocation(false)
    } else{
      setIsLocation(true)
      getServiceProviders({
        Latitude:coords.latitude,
        Longitude:coords.longitude,
        Radius:locationConfig.radius,
        MeasureUnit:locationConfig.measureUnit(0)
      })
        .then((res) => setServiceProviders(res))
        .catch((err) => console.log(err));
    }
  }, [coords, err]);

  const handleToolTipVisible = (isVisible) => {
      setToolTipData(prevState=>({...prevState,isActive:isVisible }))
  }
  const handleToolTipData = (dataObj) => {
      setToolTipData(prevState=>({...prevState, data:{ ...dataObj}}))
  }

  return (
        isLocation
        ?
          <Map style={styles.map} location={ coords}>
            <ServiceProviderMarker
              serviceProviders={serviceProviders || []}
              openToolTip={(isVisible)=>handleToolTipVisible(isVisible)}
              passToolTipData={(dataObj)=>handleToolTipData(dataObj)}
            />
            <ToolTip
              visible={toolTipData.isActive} 
              providerData={toolTipData.data}
              hideToolTip={(isVisible)=>handleToolTipVisible(isVisible)}
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
