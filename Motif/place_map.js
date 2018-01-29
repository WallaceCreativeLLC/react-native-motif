import React, { Component } from 'react';
import {
  AlertIOS,
  Text,
  MapView,
  View,
  TouchableHighlight,
  StyleSheet,
  Linking
} from 'react-native';

export default class PlaceMap extends Component {
  constructor(props) {
    super(props);
    this.region = {
      latitude: 38.8977,
      longitude: -77.0365,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
      title: "White House"
    }
  }

  handleNavigation(urlParam) {
    const rla = this.region.latitude;
    const rlo = this.region.longitude;
    //const url = `http://maps.apple.com/?saddr=${rla},${rlo}&daddr=${la},${lo}&dirflg=d`;
	const url = 'http://www.binglebox.bibtrend.com/'+urlParam+'.html';
    return Linking.openURL(url);
  }

  render() {
    const { annotations } = this.props;
    annotations.forEach(annotation => {
      annotation.rightCalloutView = (
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNavigation.bind(this, annotation.urlParam)}
        >
          <Text style={styles.buttonText}>Get Details</Text>
        </TouchableHighlight>
      );
    })
    return (
      <MapView
        style={styles.map}
        region={this.region}
        annotations={annotations}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  button: {
    backgroundColor: '#983850',
    padding: 5,
    margin: 5
  },
  buttonText: {
    fontSize: 12,
    color: 'white'
  }
});
