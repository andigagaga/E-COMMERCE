import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';

// react native tab View
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getInProgress, getPastOrders} from '../../../redux/action';

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

  // const handleFoodDetailNavigation = () => {
  //   navigation.navigate('OrderDetail');
  // };
  const dispatch = useDispatch();
  const {inProgress} = useSelector((state: any) => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
           {/* looping untuk data inProgress nya */}
          {inProgress.map((order: any) => {
            return (
              <ItemListFood
                key={order?.id}
                image={{uri: order?.food?.pictures}}
                onPress={() => navigation.navigate('OrderDetail', {order})}
                items={order?.quantity}
                inProgress={true}
                type="in-progress"
                price={order?.total}
                name={order?.food?.name}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();

  // const handleFoodDetailNavigation = () => {
  //   navigation.navigate('OrderDetail');
  // };
  const dispatch = useDispatch();
  const {pastOrders} = useSelector((state: any) => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingVertical: 5, paddingHorizontal: 12}}>
          {/* looping untuk data pasorder nya */}
          {pastOrders.map((order: any) => {
            return (
              <ItemListFood
              key={order?.id}
              image={{uri: order?.food?.pictures}}
              onPress={() => navigation.navigate('OrderDetail', {order})}
                items={order?.quantity}
                type="past-orders"
                name={order?.food?.name}
                price={order?.food?.price}
                date={order?.created_at}
                status={order?.status}
              />
            );
          })}
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
