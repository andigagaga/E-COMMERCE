import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title, subTitle}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {backgroundColor: "white", paddingHorizontal: 24, paddingTop: 30, paddingBottom:24},
    title: {fontSize: 22, fontWeight: "bold", lineHeight: 33, color: "#020202"},
    subTitle: {fontSize: 14, fontWeight: "bold", lineHeight: 21, color: "#8D92A3"}
})