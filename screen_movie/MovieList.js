import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default MovieList = ()=>{
    return (
        <View style={style.root}>
            <Text>Movie List</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1,},
})