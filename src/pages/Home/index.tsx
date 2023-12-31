import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import FoodCard from '../../component/molecules/FoodCard';
import HomeTabSection from '../../component/molecules/HomeTabSection';
import HomeProfile from '../../component/molecules/HomeProfile';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector((state: any) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  });
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <View style={{width: 24}} />
            {food.map(
              (itemFood: {
                reting: string | number;
                name: string;
                pictures: any;
              }, index: number) => {
                return (
                  <FoodCard
                    key={index}
                    name={itemFood.name}
                    image={{uri: itemFood.pictures}}
                    rating={itemFood.reting}
                  />
                );
              },
            )}
            {/* <FoodCard image={require('../../assets/Dummy/FoodCard1.png')} />
            <FoodCard image={require('../../assets/Dummy/FoodCard2.png')} />
            <FoodCard image={require('../../assets/Dummy/FoodCard3.png')} />
            <FoodCard image={require('../../assets/Dummy/FoodCard1.png')} /> */}
            <View style={{width: 13}} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabConatiner}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},

  foodCardContainer: {flexDirection: 'row', marginVertical: 12},
  tabConatiner: {flex: 1},
});
