import React, {Fragment, Component} from 'react';
import Lottie from 'lottie-react-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import man from './image/man.png'
import cc from './image/cc.png'
import call from './image/Call.png'
import calendar from './image/Calendar.png'
import lock from './image/Lock.png'
import mail from './image/Mail.png'
import profile from './image/Profile.png'
import frame from './image/Frame.png'





class ButtonCustom extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={{width:'90%',height:48,backgroundColor:'#FFF',borderRadius:12,flexDirection:'row',alignItems:'center',marginLeft:16,marginTop:12}}>
            <Image source={this.props.source}
            style={{marginLeft:20}}/>
            <TextInput placeholder={this.props.title} style={{color:'#868E96',fontSize:16,fontWeight:'400',marginLeft:16}}>
            </TextInput>
        </View>
            </View>
        )
    }
}
const Man2 = ({ navigation }) => {
    return (
        <ScrollView>
                    <View style={styles.container}>
            <View style={{marginLeft:12,flexDirection:'row',marginTop:28,width:'58%',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                <Image source={cc} />
                </TouchableOpacity>
                <Text style={{color:'#212529',fontWeight:'600',fontSize:16,marginTop:14}}>
                    Tạo tài khoản
                </Text>
            </View>
            <View style={{ alignItems:'center'}}>
                <Image source={man}/>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'400',color:'#212529',fontSize:15}}>
                Sắp xong rồi. Bạn hãy tạo tài khoản để được hỗ
                </Text>
                <Text style={{fontWeight:'400',color:'#212529',fontSize:15}}>
                trợ trong suốt quá trình nhé!
                </Text>
            </View>
            <View>
                <ButtonCustom source={profile} title={'Họ và tên'}/>
                <ButtonCustom source={mail} title={'Email'} />
                <ButtonCustom source={call} title={'Số điện thoại'} />
                <ButtonCustom source={lock} title={'Mật khẩu'} />
                <ButtonCustom source={calendar} title={'Ngày, tháng, năm sinh'} />
            </View>
            <View>
                <TouchableOpacity style={{marginTop:32, backgroundColor:'#CD2027',height:48,width:'90%',borderRadius:12,marginLeft:16,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:17,fontWeight:'600',color:'#FFF'}}>Hãy bắt đầu</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
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
                <Text style={{fontSize:15}}>Đã là người dùng Jaxtina rồi? </Text>
                <TouchableOpacity>
                    <Text style={{color:'#2E3192',fontSize:15}} onPress={() => {
                        navigation.navigate('Man3')
                    }}>Đăng nhập</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
   
  );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    

});

export default Man2;