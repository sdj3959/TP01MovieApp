import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default MapTab = ()=>{
    return (
        <View style={style.root}>
            <Text style={style.text}>Map</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center',},
    text:{color:'black', fontWeight:'bold', fontSize:32,},
})