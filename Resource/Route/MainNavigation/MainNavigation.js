import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash_Screen from '../../Pages/Splash_Screen/Splash_Screen';
import MenuList from '../../Pages/MenuList/MenuList';
import MenuContent from '../../Pages/MenuContent/MenuContent';
import Reservation from '../../Pages/Reservation/Reservation';
import Order_History from '../../Pages/Order_History/Order_History';
import HelpSupport from '../../Pages/Help_And_Support/Help_And_Support';
import About from '../../Pages/About/About';
import MyProfile from '../../Pages/MyProfile/MyProfile';
import ViewOrder from '../../Pages/Order_History/ViewOrder/ViewOrder';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function MainNavigation() {

const MenuNavigation = ()=>{
    return(
        <Drawer.Navigator drawerContent={props=><MenuContent {...props} />}>
        <Drawer.Screen name="Menu" component={MenuList} options={{headerShown:false}} />
        <Drawer.Screen name="RS" component={Reservation} options={{headerShown:false}} />
        <Drawer.Screen name="Order" component={Order_History} options={{headerShown:false}} />
        <Drawer.Screen name="Help" component={HelpSupport} options={{headerShown:false}} />
        <Drawer.Screen name="About" component={About} options={{headerShown:false}} /> 
        <Drawer.Screen name="My_Profile" component={MyProfile} options={{headerShown:false}} /> 
      </Drawer.Navigator>
    )
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Splash_Screen"
         component={Splash_Screen}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Menu"
         component={MenuNavigation}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="View"
         component={ViewOrder}
         options={{headerShown:false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}