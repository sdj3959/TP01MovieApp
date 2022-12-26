import React from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

// android SharedPreferences 와 같은 역할의 데이터 저장용 라이브러리
import AsyncStorage from '@react-native-async-storage/async-storage'

import InputComponent from '../components/InputComponent'

export default Login = (props)=>{

    let email = ""
    let password = ""

    // 로그인버튼 클릭시 실행될 콜백 메소드
    const login = ()=>{
        //alert(email+" , "+password)

        // 원래는 서버에 전송하여 로그인 여부를 응답받아야 함.
        // 이 TP에서는 연습목적으로 단순히 AsyncStorage에
        // 이메일을 저장하고 Main 영화리스트 화면으로 이동
        // 비동기 방식으로 동작하기에 요청결과가 끝나고나서 추가 작업을 함.
        // 이때 사용하는 기법이 promiss 기법의 .then() 메소드..
        AsyncStorage.setItem('email', email).then(()=>{
            Alert.alert('로그인 성공', email+"님 환영합니다.")

            // 로그인이 되었으니 앱의 메인화면인 Movie List 를 가진 Nav 로 이동
            props.navigation.replace('MainDrawerNav')
        })
    }

    return (
        <View style={style.root}>
            {/* 크게 2개의 영역으로 구성 : 로그인 콘텐츠, 아래쪽에 회사이름 or 앱이르 표시영역 */}
            {/* 1. 로그인 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 1.1 로고 */}
                <Text style={style.logo}>MOVIE APP</Text>

                {/* 1.2 이메일/비밀번호 입력박스 */}
                {/* TextInput은 로그인, 회원가입, 비밀번호리셋화면 모두 사용되므로 사용빈도가 높음. 일일이 스타일하기 어려우므로 별도의 컴포넌트로 제작하여 재사용하기 */}
                <InputComponent onChangeText={(value)=>{email = value}} placeholder='이메일' secureTextEntry={false}></InputComponent>
                <InputComponent onChangeText={value=>password = value} placeholder='비밀번호' secureTextEntry={true}></InputComponent>

                {/* 1.3 비밀번호 재설정 */}
                <Text onPress={()=>props.navigation.navigate('ResetPassword')} style={style.resetPW}>비밀번호 재설정</Text>

                {/* 1.4 로그인버튼 */}
                <View style={{width:'100%', marginBottom:24,}}>
                    <Button title='로그인' color='#3796EF' onPress={login}></Button>
                </View>

                {/* 1.5 회원가입 */}
                <Text style={style.signup}>
                    계정이 없으신가요? <Text style={style.signupLink} onPress={()=>props.navigation.navigate('SignUp')}>가입하기</Text>
                </Text>

            </View>

            {/* 2. Footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerCopyRight}>MovieApp by DJ2022</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'}, //색상변경 후 스토어 등록
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    footerCopyRight:{
        color:'#929292',
        textAlign:'center',
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:32,
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        marginTop:8,
        marginBottom:16,
        marginRight:8,
        color:'#3796EF',
    },
    signup:{
        color:'#929292',
    },
    signupLink:{
        color:'#3796EF',
    },
})