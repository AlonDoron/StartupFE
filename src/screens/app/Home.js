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
//  const [currentProvider, setCurrentProvider] = useState({});
// console.log('curernt provider', currentProvider)

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


  const handleToolTip = (visibilty, data={} ) => {
    setToolTipData(prevState=>({...prevState, isActive:visibilty, data:{ ...data}}))
  }


  return (
        isLocation
        ?
          <Map style={styles.map} location={ coords}>
            <ServiceProviderMarker
              serviceProviders={serviceProviders || []}
              onToolTip={(visibilty, data)=> handleToolTip(visibilty, data)}
            />
            <ToolTip
              visible={toolTipData.isActive} 
              providerData={toolTipData.data}
              hideToolTip={()=>setToolTipData({...toolTipData, isActive:false})}
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
