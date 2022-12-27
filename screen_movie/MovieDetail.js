import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'
import BigCatalog from '../components_movie/BigCatalog'

export default MovieDetail = (props)=>{

    // 영화 상제정보를 저장할 객체 변수 - state 변수로
    let [movie, setMovie] = useState(null)

    useEffect(()=>{

        const id = props.route.params.id

        // 전달받은 id로 영화상세정보를 fetch하는 url
        // fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        // .then((response)=>{return response.text()})
        // .then((text)=>{alert(text)})

        // 전달받은 id로 영화상세정보를 fetch하여 json분석 및 객체로 변환
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then((response)=>{return response.json()})
        .then((json)=>{setMovie(json.data.movie)})
    })

    return (
        // fetch된 영화데이터가 있는지 검사(3항연산자)
        movie? (
            <ScrollView>
                {/* 큰 타이틀 이미지는 기존 컴포넌트를 재사용 */}
                <BigCatalog movie={movie} disabled={true}></BigCatalog>

                {/* 영화정보 출력 */}
                <View>
                    <Text style={style.title}>영화정보</Text>
                    <View style={style.infoContainer}>
                        <Text>{movie.runtime}분</Text>
                        <Text>평점 : {movie.rating}</Text>
                        <Text>좋아요 : {movie.like_count}</Text>
                    </View>
                </View>

                {/* 줄거리 정보 */}
                <View>
                    <Text style={style.title}>줄거리</Text>
                    <Text style={style.desc}> {movie.description_full} </Text>
                </View>
            </ScrollView>
        ) : 
        (
            <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                <ActivityIndicator size='large' color='#E70915'></ActivityIndicator>
            </View>
        )
    )
}

const style = StyleSheet.create({
    root:{flex:1,},
    title:{
        fontSize:18,
        fontWeight:'bold',
        padding:16,
        color:'#292929',
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16,
    },
    desc:{
        paddingLeft:16,
        paddingRight:16,
    },
})