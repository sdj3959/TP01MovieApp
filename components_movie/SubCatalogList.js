import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'

export default SubCatalogList = (props)=>{

    // 영화 목록들을 가진 대량의 데이터 배열변수 - state 변수
    let [movies, setMovies] = useState([]) //빈 배열로 초기값 설정

    useEffect(()=>{
        // 영화정보 리스트들 가져오기
        // fetch(props.url)
        // .then((response)=>{return response.text()})
        // .then((text)=>{alert(text)})

        fetch(props.url)
        .then(response => response.json())
        .then(json => setMovies(json.data.movies))
    })

    return (
        <View>
            {/* 서브타이틀 글씨 */}
            <Text style={{fontSize:18, fontWeight:'bold', color:'#292929', padding:8, marginTop:8,}}> {props.title} </Text>
            {/* 대량의 영화리스트를 가로스크롤로 배치 */}
            <FlatList
                horizontal={true}
                data={movies}
                renderItem={(obj)=>{
                    return (
                        <TouchableOpacity
                            onPress={()=>{props.onPress(obj.item.id)}}
                            activeOpacity={0.7}
                            style={{paddingLeft:4,paddingRight:4,}}>
                            <Image source={{uri:obj.item.large_cover_image}} 
                                   style={{width:140, height:200,}}></Image>
                        </TouchableOpacity>
                    )
                }}>

            </FlatList>
        </View>
    )
}