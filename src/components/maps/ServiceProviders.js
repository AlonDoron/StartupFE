import React from 'react'
import {Marker} from 'react-native-maps'

const ServiceProvider = ({serviceProviders}) => {
    return(
    serviceProviders.map(({Id,Location}, i) => {
        (Location.Latitude && Location.Longitude)
        &&
         (<Marker
            key={i}
            coordinate={{
              latitude: Location.Latitude,
              longitude:Location.Longitude
            }}
            pinColor={"#ffd1dc"}
            onPress={()=>{
              console.log('marker pressed')
            //   setToolTipData(oldState=>({
            //     ...oldState, data:{Id, ...dataObject}, isActive:true
            //   }))
            }}
          />)
      })
    )
}

export default ServiceProvider