import React, {Fragment, Component} from 'react';
import Lottie from 'lottie-react-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';



import frame2 from './image/Frame2.png'
import frame3 from './image/Frame3.png'
import a from './image/a.png'
import a1 from './image/a1.png'
import a2 from './image/a2.png'
import a3 from './image/a3.png'
import a4 from './image/a4.png'
import { NavigationContainer } from '@react-navigation/native';
import Test2 from './Test2';
import Test1 from './Test1';


// class ButtonCustom extends Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <View>
//                 <Image source={this.props.source}
//                 style={{marginLeft:5}}/>
//                 <Text style={[{fontSize:12,fontWeight:'500',color:'#ADB5BD'}, this.props.style]}>{this.props.title}</Text>
//             </View>
//         )
//     }
// }
const Man4 = () => {
    const collection = [
        {
          id: 1,
          image: require('./image/list.png'),
        },
        {
          id: 2,
          image: require('./image/list2.png'),
        },
        {
          id: 3,
          image: require('./image/list1.png'),
        },
      ];


    const oneCollection = ( {item} ) => (
    
          <View style={{alignItems:'center',marginTop:12}}>
            <Image source={item.image}
                    style={{width:343,height:170,borderRadius:20}}/>
          </View>
          

    
      )
    return (
        <View style={styles.container}>
            <View style={{marginLeft:17, flexDirection:'row',marginTop:16}}>
                <View>
                    <Text style={{fontSize:24,fontWeight:'700',color:'#2E3192'}}>Chào Linh,</Text>
                    <Text style={{fontSize:16,fontWeight:'600',color:'#2E3192'}}>Nothing is more important than practice!</Text>

                </View>
                <View>
                    <Image source={frame3}
                    style={{right:30}}/>
                </View>
            </View>
            <FlatList
                data = { collection }
                renderItem = { oneCollection }
                 />
            {/* <View>
                <View style={{backgroundColor:'#FFF',height:80}}>
                    <View style={{marginLeft:12,flexDirection:'row',marginTop:11,justifyContent:'space-between',marginRight:11}}>
                        <ButtonCustom source={a} title={'Sách'} style={{color:'#CD2027'}}/>
                        <ButtonCustom source={a1} title={'Phát âm'}/>
                        <ButtonCustom source={a2} title={'Khóa học'}/>
                        <ButtonCustom source={a3} title={'Tiện ích'}/>
                        <ButtonCustom source={a4} title={'Cá nhân'}/>
                    </View>
                </View>
            </View> */}

        </View>
   
  );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#E5E5E5'
    },

});

export default Man4;