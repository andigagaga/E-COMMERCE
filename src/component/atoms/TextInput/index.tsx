import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = ({label, placeholder, ...resProps}: any) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} {...resProps}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    label: {fontSize: 16, fontWeight: "bold", lineHeight:24, color: '#020202', },
    input: {borderWidth: 1, borderColor: "#020202", borderRadius: 8, padding: 10}
})