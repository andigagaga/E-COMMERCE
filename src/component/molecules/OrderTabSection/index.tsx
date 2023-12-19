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

const InProgres = () => {
  const navigation = useNavigation();

  const handleFoodDetailNavigation = () => {
    navigation.navigate('OrderDetail');
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard1.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            inProgress={true}
            type="in-progress"
            TotalItems={3}
            price="2.000.000"
            name="Soup Bumil"
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard2.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            inProgress={true}
            type="in-progress"
            TotalItems={3}
            price="2.000.000"
            name="Soup Bumil"
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard3.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            inProgress={true}
            type="in-progress"
            TotalItems={3}
            price="2.000.000"
            name="Soup Bumil"
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard1.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            inProgress={true}
            type="in-progress"
            TotalItems={3}
            price="2.000.000"
            name="Soup Bumil"
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard2.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            inProgress={true}
            type="in-progress"
            TotalItems={3}
            price="2.000.000"
            name="Soup Bumil"
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard3.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            inProgress={true}
            type="in-progress"
            TotalItems={3}
            price="2.000.000"
            name="Soup Bumil"
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard1.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            inProgress={true}
            type="in-progress"
            TotalItems={3}
            price="2.000.000"
            name="Soup Bumil"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();

  const handleFoodDetailNavigation = () => {
    navigation.navigate('OrderDetail');
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard1.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            type='past-orders'
            name='Guswandi'
            TotalItems={3}
            price="2.000.000"
            date='Jun 12, 14:00'
            status='cancel'
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard2.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            type='past-orders'
            name='Guswandi'
            TotalItems={3}
            price="2.000.000"
            date='Jun 12, 14:00'
            status='cancel'
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard2.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            type='past-orders'
            name='Guswandi'
            TotalItems={3}
            price="2.000.000"
            date='Jun 12, 14:00'
            status='cancel'
          />
          <ItemListFood
            rating={3}
            image={require('../../../assets/Dummy/FoodCard2.png')}
            onPress={handleFoodDetailNavigation}
            items={undefined}
            type='past-orders'
            name='Guswandi'
            TotalItems={3}
            price="2.000.000"
            date='Jun 12, 14:00'
            status='cancel'
          />
        </View>
      </ScrollView>
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgres,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Array<{key: string; title: string}>>([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
