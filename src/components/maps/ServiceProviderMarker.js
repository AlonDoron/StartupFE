import React from 'react'
import {Marker} from 'react-native-maps'

const ServiceProviderMarker = ({serviceProviders}) => {
    return(
        serviceProviders.map(({Id,Location},i)=>(
            <Marker
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
            />
        ))
    )
}


export default ServiceProviderMarker