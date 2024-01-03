import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import FoodCard from '../../component/molecules/FoodCard';
import HomeTabSection from '../../component/molecules/HomeTabSection';
import HomeProfile from '../../component/molecules/HomeProfile';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {food} = useSelector((state: any) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <View style={{width: 24}} />
            {food.map(
              (itemFood: {
                name: string;
                image: string | number;
                reting: string | number;
                pictures: string | number;
              }, index: number) => {
                return (
                  <FoodCard
                    key={index}
                    name={itemFood.name}
                    image={{uri: itemFood.pictures}}
                    rating={itemFood.reting}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                  />
                );
              },
            )}
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
