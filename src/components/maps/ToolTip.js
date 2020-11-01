import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {Modal, Text, Button} from '@ui-kitten/components'

const ToolTip = ({visible, providerData, hideToolTip}) => {
    if(!providerData || providerData === {}){
        return(
            <Text>Soory There is no data for this provider</Text>
        )
    }
    return (
        <Modal  visible={visible} style={styles.model} onBackdropPress={hideToolTip} backdropStyle={styles.backdropStyle}>
            <Text>{providerData.firstName} {providerData.lastName}</Text>
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
    },
    backdropStyle:{
        backgroundColor:'rgba(0, 0, 0, 0.6)'
    }
})

export default ToolTip