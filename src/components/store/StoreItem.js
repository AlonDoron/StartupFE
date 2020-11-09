import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@ui-kitten/components'

const StoreItem = ({ itemName, itemPrice }) => {

    return (
        <View style={{ margin: 10 }}>
            <Text>{itemName}</Text>
            <Text>{itemPrice}</Text>
        </View>
    )
}

export default StoreItem