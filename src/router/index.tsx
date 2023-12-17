import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpAdress from '../pages/SignUpAdress';
import SuccesSignUp from '../pages/SuccesSignUp';

// tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import ButtonTabNavigator from '../component/molecules/ButtonTabNavigator';
import FoodDetail from '../pages/FoodDetail';
import OrderSummary from '../pages/OrderSummary';
import SuccesOrder from '../pages/SuccesOrder';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppMain = () => {
  return(
    <Tab.Navigator tabBar={props => <ButtonTabNavigator {...props} />}>
    <Tab.Screen name='Home' component={Home} options={{headerShown: false}}/>
    <Tab.Screen name='Order' component={Order}/>
    <Tab.Screen name='Profile' component={Profile}/>
  </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="SignUpAdress"
        component={SignUpAdress}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="SuccesSignUp"
        component={SuccesSignUp}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="appMain"
        component={AppMain}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="SuccesOrder"
        component={SuccesOrder}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
