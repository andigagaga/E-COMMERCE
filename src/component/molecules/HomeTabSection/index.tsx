import React, { useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// react native tab View
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDataByTypes } from '../../../redux/action';
import ItemListFood from '../ItemListFood';

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

  const dispatch = useDispatch();
  const {newTaste} = useSelector((state: any) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('New_food'));
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
          {newTaste.map((item: any) => {
            return (
              <ItemListFood
                key={item.id}
                rating={item.reting}
                image={{uri: item.pictures}}
                onPress={() => navigation.navigate('FoodDetail', item)}
                items={undefined}
                type="product"
                price={item.price}
                name={item.name}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  // const handleFoodDetailNavigation = () => {
  //   navigation.navigate('FoodDetail');
  // };

  const dispatch = useDispatch();
  const {popular} = useSelector((state: any) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('Popular'));
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
          {popular.map((item: any) => {
            return (
              <ItemListFood
                key={item.id}
                rating={item.reting}
                image={{uri: item.pictures}}
                onPress={() => navigation.navigate('FoodDetail', item)}
                items={undefined}
                type="product"
                price={item.price}
                name={item.name}
              />
            );
          })}
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

  const dispatch = useDispatch();
  const {recommended} = useSelector((state: any) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('Recommended'));
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
          {recommended.map((item: any) => {
            return (
              <ItemListFood
                key={item.id}
                rating={item.reting}
                image={{uri: item.pictures}}
                onPress={() => navigation.navigate('FoodDetail', item)}
                items={undefined}
                type="product"
                price={item.price}
                name={item.name}
              />
            );
          })}
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
