import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({title, subTitle, onBack}: {title: string, subTitle: string, onBack: any}) => {
  return (
    <View style={styles.container}>

      {onBack && (
        <TouchableOpacity>
          <View style={styles.Back}>
            <Image source={require('../../../assets/Icon/Ic-Back.png')} />
          </View>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
  },
  title: {fontSize: 22, fontWeight: 'bold', lineHeight: 33, color: '#020202'},
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    color: '#8D92A3',
  },
  Back: {
    marginRight: 5,
    marginLeft: -15,
    padding: 5,
  },
});
