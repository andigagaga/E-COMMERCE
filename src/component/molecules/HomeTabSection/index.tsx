import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

// react native tab View
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {ScrollView} from 'react-native-gesture-handler';

// style tabBar
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'black'}}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text style={{fontWeight: 'bold', color: focused ? 'black' : 'grey'}}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <View>
      <ScrollView>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard1.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard2.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard3.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard1.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard2.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard3.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard1.png')}/>
      </ScrollView>
    </View>
  );
};

const Popular = () => (
  <View>
      <ScrollView>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard1.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard2.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard3.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard1.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard2.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard3.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard1.png')}/>
      </ScrollView>
    </View>
);


const Recommended = () => (
  <View>
      <ScrollView>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard1.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard2.png')}/>
        <ItemListFood image={require('../../../assets/Dummy/FoodCard3.png')}/>
      </ScrollView>
    </View>
);

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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

export default HomeTabSection;

const styles = StyleSheet.create({});
