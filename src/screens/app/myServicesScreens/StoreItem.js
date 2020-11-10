import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, ListItem } from '@ui-kitten/components'

const StoreItem = (props) => {
    const itemData = props.navigation.state.params.itemData;
    console.log(itemData)
    return (
        <View>
            <Text>Store Item</Text>
        </View>
    )
}

export default StoreItem