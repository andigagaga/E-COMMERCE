import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

// react native tab View
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

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

const NewTaste = () => {
  const navigation = useNavigation();

  const handleFoodDetailNavigation = () => {
    navigation.navigate('FoodDetail');
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard1.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard2.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard3.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard1.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard2.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard3.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard1.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        </View>
       
      </ScrollView>
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  const handleFoodDetailNavigation = () => {
    navigation.navigate('FoodDetail');
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard1.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard2.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard3.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard1.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard2.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard3.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard1.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />

        </View>
      </ScrollView>
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();

  const handleFoodDetailNavigation = () => {
    navigation.navigate('FoodDetail');
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard1.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard2.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />
        <ItemListFood rating={3}
        image={require('../../../assets/Dummy/FoodCard3.png')}
        onPress={handleFoodDetailNavigation} items={undefined}        />

        </View>
      </ScrollView>
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Array<{key: string; title: string}>>([
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
