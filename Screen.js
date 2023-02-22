import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import {Image,View} from 'react-native'
import  Man4  from './Man4';
import Test2 from './Test2';
import Test1 from './Test1';
import MyTabBar from './Tab';
// import Test1 from './Test/home/Test1';
// import Test2 from './Test/home/Test2';
const Tab = createBottomTabNavigator();
import a from './image/a.png'
import a1 from './image/a1.png'
import a2 from './image/a2.png'
import a3 from './image/a3.png'
import a4 from './image/a4.png'
export const TabScreen = () => {
    return (
        
       
            <Tab.Navigator  screenOptions={{headerShown: false,tabBarActiveTintColor:'#CD2027'}}
                  tabBar={MyTabBar}      
          >
                <Tab.Screen 
                name="Sách" component={Man4} options={{
                    tabBarIcon: () => <Image source={a}/>
                }}/>
                <Tab.Screen 
                name="Phát âm" component={Test1} options={{
                    tabBarIcon: () => <Image source={a1}/>
                }} />
                <Tab.Screen 
                name="Khóa học" component={Test2} options={{
                    tabBarIcon: () => <Image source={a2}/>
                }}/>
                <Tab.Screen 
                name="Tiện ích" component={Test2} options={{
                    tabBarIcon: () => <Image source={a3}/>
                }}/>
                <Tab.Screen 
                name="Cá nhân" component={Test2} options={{
                    tabBarIcon: () => <Image source={a4}/>
                }} />
            </Tab.Navigator>
    
    )
}