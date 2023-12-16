import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Icon = ({label, focus}: any) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <Image source={require('../../../assets/Icon/Ic-home-on.png')} />
      ) : (
        <Image style={{ alignContent: "center", justifyContent: "center"}} source={require('../../../assets/Icon/Ic-home-of.png')} />
      );
    case 'Order':
      return focus ? (
        <Image source={require('../../../assets/Icon/Ic-order-on.png')} />
      ) : (
        <Image source={require('../../../assets/Icon/Ic-order-of.png')} />
      );
    case 'Profile':
      return focus ? (
        <Image source={require('../../../assets/Icon/Ic-profile-on.png')} />
      ) : (
        <Image source={require('../../../assets/Icon/Ic-profile-of.png')} />
      );
    default:
      return <Image source={require('../../../assets/Icon/Ic-order-of.png')} />;
  }
};

const ButtonTabNavigator = ({state, descriptors, navigation}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 50,
      }}>
      {state.routes.map(
        (route: {key: string | number; name: any; params: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}>
              <Icon label={label} focus={isFocused} />
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

export default ButtonTabNavigator;

const styles = StyleSheet.create({});
