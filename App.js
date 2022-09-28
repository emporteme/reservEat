import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyText } from './components/MyText.jsx'
import { Cat } from './components/Cat.jsx'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

