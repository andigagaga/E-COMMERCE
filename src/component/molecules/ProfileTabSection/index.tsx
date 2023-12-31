import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

// react native tab View
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';

// style tabBar
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'black'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused}) => (
      <Text style={{fontWeight: 'bold', color: focused ? 'black' : 'grey'}}>
        {route.title}
      </Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();

  // function SignOut
  const SignOut = () => {
    // remove semua storage
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
    });
    })
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <ItemListMenu text="Edit Profile" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ItemListMenu text="Home Address" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ItemListMenu text="Security" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ItemListMenu text="Payments" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ItemListMenu text="SignOut" onPress={SignOut}/>
      </ScrollView>
    </View>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();

  const handleFoodDetailNavigation = () => {
    navigation.navigate('OrderDetail');
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <ItemListMenu  text="Rate App" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ItemListMenu text="Help Center" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ItemListMenu text="Privacy & Policy" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ItemListMenu text="Terms & Conditions" onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
      </ScrollView>
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Array<{key: string; title: string}>>([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  return (
    <>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({});
