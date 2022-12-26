import React, { useState } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import InputComponent from '../components/InputComponent'

import TabComponent from '../components/TabComponent'

export default SignUp = (props)=>{

    // 함수형 컴포넌트에서 화면에 영향을 주는 아주 특별한 변수 state 만들기 - 이 변수값이 변경되면 화면이 자동 갱신됨
    // 1) 탭버튼의 라벨글씨들 변수
    let [tabs, setTabs] = useState(['전화번호', '이메일']) //초기값 설정 - 변수와 함수 만들기
    // 2) 현재 선택된 탭 번호를 저장하고 있을 변수
    let [tabIndex, setTabIndex] = useState(0) //초기값 : 0

    // 회원가입 완료버튼을 클릭했을때
    const signup = ()=>{
        // 원래는 서버에 데이터를 보내 회원 DB에 저장해야 함.
        // 이 TP에선 테스트목적이므로.. 서버에 데이터 보내는 것 없이 로그인화면으로 돌아가기
        props.navigation.goBack()
    }

    return (
        <View style={style.root}>
            {/* 크게 2개 영역으로 구성됨 */}
            {/* 1. 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 1.1 전화번호와 이메일 중 원하는 정보로 회원가입 할 수 있도록 탭으로 구성 */}
                <View style={style.tabContainer}>
                    {/* 탭버튼 2개를 옆으로 배치. 탭버튼은 여러화면에 사용되기에 별도의 컴포넌트로 제작하여 재사용 */}
                    {/* <TabComponent label={tabs[0]} selected={true}></TabComponent>
                    <TabComponent label={tabs[1]} selected={false}></TabComponent> */}
                    {/* 탭버튼이 여러개일 수도 있기에 배열의 반복기능메소드를 이용하여 자동으로 여러개의 탭버튼을 생성하도록 */}
                    {
                        // 배열의 .map() 메소드 : 배열요소개수만큼 파라미터로 전달된 함수가 발동함
                        tabs.map( (value, index)=>{
                            return <TabComponent label={value} selected={ index == tabIndex } onPress={()=>{setTabIndex(index)}} key={"Tab"+index}></TabComponent>
                        } )
                    }
                </View>

                {/* 1.2 정보 입력 - 미리 만들어 놓았던 InputComponent 재사용 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 1.3 이메일 입력일때는 비밀번호 입력컴포넌트도 필요함 */}
                {
                    // JSX의 {}영역안에서는 연산자, 변수, 함수, 객체 만 사용가능
                    // 제어문 사용불가
                    //if(tabindex==1){}

                    // && 연산자를 통해 앞의 조건이 true 일때 && 다음 코드가 실행되도록
                    tabIndex==1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                }

                {/* 1.4 [전화번호], [이메일] 탭에 따라 버튼의 글씨와 동작이 다름 */}
                {/* 1.4.1 전화번호 탭일때 버튼 */}
                {
                    tabIndex == 0 && <View style={{width:'100%', margin:16}}><Button title='다음' onPress={()=>setTabIndex(1)}></Button></View>
                }
                {/* 1.4.2 이메일 탭일때 버튼 */}
                {
                    tabIndex == 1 && <View style={{width:'100%', margin:16}}><Button title='완료' onPress={()=>signup()}></Button></View>
                }

                {/* 1.5 [전화번호]탭 일때 알려주는 메세지 글씨 */}
                {
                    tabIndex == 0 && <Text style={style.telMessage}>MovieApp의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든 수신을 취소할 수 있습니다.</Text>
                }

            </View>

            {/* 2. Footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerMsg}>
                    이미 계정이 있으신가요? <Text style={style.goBack} onPress={()=>props.navigation.goBack()}>로그인</Text>
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'}, //색상변경 후 스토어 등록
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#929292',
        padding:8,
    },
    footerMsg:{
        color:'#929292',
        textAlign:'center',
    },
    goBack:{
        color:'#3796EF',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8,
    },
})