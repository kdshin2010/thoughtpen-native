import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});




export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Button  mode="contained" onPress={() => console.log('Pressed')} style={styles.box}>
          Press me
        </Button>
      </View>
     
    </PaperProvider>
  );
}

