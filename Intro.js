import React from 'react'
import {View, Text, Button, ActivityIndicator} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default Intro = (props)=>{

    // 디바이스에 저장되어있는 로그인정보가 있는지 확인
    // AsyncStorage 에 저장된 사용자의 이메일정보가 있는지 확인
    // 비동기 방식으로 읽어오기에 바로 값을 리턴받지 않고.
    // promise 기법[ .then() 메소드 ]을 사용.
    AsyncStorage.getItem('email').then( (value)=>{
        // 로그인 한적이 있다면 메인화면으로.. 없다면 로그인 화면으로 이동
        if(value) props.navigation.replace('MainDrawerNav')
        else props.navigation.replace('LoginNav')
    })


    return (
        // 원래는 이곳에 프로그레스바를 배치할 것임. [데이터 로딩 하는 동안..]
        // 우선 테스트 목적으로.. 월요일에 이 부분을 수정할 것임.
        <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
            <ActivityIndicator color='green' size='large'></ActivityIndicator>
        </View>
    )
}