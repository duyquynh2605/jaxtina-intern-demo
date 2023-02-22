import React, {Fragment, Component, useState} from 'react';
import Lottie from 'lottie-react-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import cc from './image/cc.png'
import group from './image/Group.png'
import lock from './image/Lock.png'
import mail from './image/Mail.png'
import frame from './image/Frame.png'

const Man3 = ({ navigation }) => {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');

    const submit = () => {
        const formData = {
            userName,
            password
        }
        console.log(formData)
    }

    return (
        <View style={styles.container}>
            <View style={{marginLeft:12,flexDirection:'row',marginTop:28,width:'58%',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={cc} />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={group} />
                <Text style={{fontSize:15,fontWeight:'500',color:'#2E3192',marginTop:25}}>The Pioneer in Coaching 4 English Skills</Text>
            </View>
            <View>
                <View style={{width:'90%',height:48,backgroundColor:'#FFF',borderRadius:12,flexDirection:'row',alignItems:'center',marginLeft:16,marginTop:48}}>
                    <Image source={mail}
                            style={{marginLeft:20}}/>
                    <TextInput placeholder='Email' onChangeText={setUserName} value={userName} style={{color:'#868E96',fontSize:16,fontWeight:'400',marginLeft:16}}>
                    </TextInput>
                </View>
                <View style={{width:'90%',height:48,backgroundColor:'#FFF',borderRadius:12,flexDirection:'row',alignItems:'center',marginLeft:16,marginTop:16}}>
                    <Image source={lock}
                            style={{marginLeft:20}}/>
                    <TextInput placeholder='Mật khẩu' onChangeText={setPassword} value={password} style={{color:'#868E96',fontSize:16,fontWeight:'400',marginLeft:16}}>
                    </TextInput>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontSize:15,fontWeight:'400',color:'#2E3192',marginTop:12,marginRight:16,borderBottomWidth:1,borderColor:'#2E3192'}}>Quên mật khẩu?</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{marginTop:24, backgroundColor:'#CD2027',height:48,width:'90%',borderRadius:12,marginLeft:16,justifyContent:'center',alignItems:'center'}} 
                                    onPress={()  => {
                                        navigation.navigate('Man4')
                                    }} >
                    <Text style={{fontSize:17,fontWeight:'600',color:'#FFF'}}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:93}}>
                <View style={{borderWidth:1,width:122,height:0,marginTop:28,borderColor:'#C5CEE0'}}></View>
                <Text style={{marginTop:16}}>Hoặc</Text>
                <View style={{borderWidth:1,width:122,height:0,marginTop:28,borderColor:'#C5CEE0'}}>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{marginTop:16, backgroundColor:'#1877F2',height:48,width:'90%',borderRadius:12,marginLeft:16,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Image source={frame}/>
                    <Text style={{fontSize:17,fontWeight:'600',color:'#FFF',marginLeft:12}}>Đăng nhập bằng facebook</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:24,justifyContent:'center'}}>
                <Text style={{fontSize:15}}>Chưa có tài khoản Jaxtina ? </Text>
                <TouchableOpacity>
                    <Text style={{color:'#2E3192',fontSize:15}}>Đăng ký ngay</Text>
                </TouchableOpacity>
                </View>
            </View>


        </View>
   
  );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },

});

export default Man3;