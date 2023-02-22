import React, {Fragment, Component} from 'react';
import Lottie from 'lottie-react-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import man from './image/man.png'
import icon from './image/icon.png'
import icon1 from './image/icon1.png'
import icon2 from './image/icon2.png'
import icon3 from './image/icon3.png'



const Man1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems:'center',marginTop: 40,flex:1}}>
                <Image source={man}/>
            </View>
            <View style={{alignItems:'center',marginTop:16,flex:1}}>
                <Text style={{fontSize:16,color:'#212529',}}>
                    Phát triển Tiếng Anh Toàn Diện 4 kỹ năng
                </Text>
                <Text style={{fontSize:20,fontWeight:'600',color:'#CD2027',marginTop:12}}>
                    NGHE - NÓI - ĐỌC - VIẾT
                </Text>
            </View>
            <View style={{flex:6}}>
                <View style={{marginTop:40, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Image source={icon}/>
                    <Image source={icon1}/>
                </View>   
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-28}}>
                    <Image source={icon2}/>
                    <View>
                    <Lottie 
                        source={require('./image/avata.json')} autoPlay loop
                        style={{width:250,height:250}}/>
                    </View>
                    <Image source={icon3}
                    style={{marginRight: 26}}/>
                </View>
            </View>
            <View style={{flex:3}}>
                <TouchableOpacity style={{marginTop:48, backgroundColor:'#CD2027',height:48,width:'90%',borderRadius:18,marginLeft:16,justifyContent:'center',alignItems:'center'}}
                                    onPress={() => {
                                        navigation.navigate('Man2')
                                    }}>
                    <Text style={{fontSize:17,fontWeight:'600',color:'#FFF'}}>Hãy bắt đầu</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:24,justifyContent:'center'}}>
                <Text style={{fontSize:15}}>Đã là người dùng Jaxtina rồi? </Text>
                <TouchableOpacity                     onPress={() => {
                        navigation.navigate('Man3')
                    }}>
                    
                    <Text style={{color:'#2E3192',fontSize:15}}>Đăng nhập</Text>
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

export default Man1;