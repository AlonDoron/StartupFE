import React from 'react'
import {StyleSheet, View, Image} from 'react-native'

import {Modal, Text, Button} from '@ui-kitten/components'

const ToolTip = ({visible, providerData, hideToolTip}) => {
console.log(providerData)
    return (
  
        <Modal  visible={visible} style={styles.model} onBackdropPress={hideToolTip} backdropStyle={{backgroundColor:'rgba(0,0,0,0.6)'}}>
            <Text>{providerData.Id}</Text>
            <Button onPress={hideToolTip}>Hide</Button>
        </Modal>
    
    )
}

const styles = StyleSheet.create({
    model:{
       height:'60%',
       width:'80%',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'red',
        borderWidth:3
    }
})

export default ToolTip