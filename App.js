import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import Map from './components/Map'
import {Constants} from 'expo'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight
  },
});
