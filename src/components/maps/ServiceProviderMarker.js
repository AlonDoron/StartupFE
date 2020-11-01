import React from 'react'
import {Marker} from 'react-native-maps'

const ServiceProviderMarker = ({serviceProviders, openToolTip, passToolTipData, onToolTip}) => {
    return(
        serviceProviders.map((provider,i)=>(
            <Marker
            key={i}
            coordinate={{
                latitude: provider.Location.Latitude,
                longitude:provider.Location.Longitude
            }}
            pinColor={"#ffd1dc"}
            onPress={()=>{
                console.log('marker pressed')
                onToolTip(true,{
                    profession:provider.Profession,
                    title:provider.Title,
                    firstName:provider.FirstName,
                    lastName:provider.LastName,
                    description:provider.Description,
                    rating:provider.Rating
                })
                // openToolTip(true)
                // passToolTipData({
                //     profession:provider.Profession,
                //     title:provider.Title,
                //     firstName:provider.FirstName,
                //     lastName:provider.LastName,
                //     description:provider.Description,
                //     rating:provider.Rating
                // })             
            }}
            />
        ))
    )
}


export default ServiceProviderMarker