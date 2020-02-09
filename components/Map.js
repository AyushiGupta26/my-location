import * as React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class Map extends React.Component {
  state = {
    location: null
  }

  componentDidMount(){
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    
    if(status === 'granted'){
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location});
    }else{
    alert("Don't have permission");
    }
  };

  render(){
    return (
      <View style={styles.container}>
        { 
          this.state.location ? 
          <MapView 
          style={{flex:1}} 
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, 
          }}
        >
            <MapView.Marker
            coordinate={this.state.location.coords}
            title="My Marker"
            description="Some description"
          />
          </MapView>
        :
        //null
        <Text style={styles.loading}>Loading...</Text> 
        }
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loading: {
    fontSize: 40,
    alignSelf: 'center'
  }
});
