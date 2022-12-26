import React from 'react'
import {View, Text, Button} from 'react-native'

export default Intro = (props)=>{
    return (
        // 원래는 이곳에 프로그레스바를 배치할 것임. [데이터 로딩 하는 동안..]
        // 우선 테스트 목적으로.. 월요일에 이 부분을 수정할 것임.
        <View>
            <Text>INTRO SCREEN</Text>
            <Button title='button' onPress={()=>props.navigation.replace('LoginNav')}></Button>
        </View>
    )
}