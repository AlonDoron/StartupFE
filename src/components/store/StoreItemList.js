import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text, List, Divider, ListItem } from '@ui-kitten/components'
const StoreItemList = (props) => {
    return (
        <List
            data={props.storeItems}
            renderItem={({ item, index }) => (
                <ListItem
                    style={{ margin: 10 }}
                    title={item.itemName}
                    description={item.itemPrice}
                    key={index}
                    onPress={() => props.navigation.navigate('StoreItem', { itemData: item })}
                />
            )}
            ItemSeparatorComponent={Divider}
        />
    )
}

export default StoreItemList