import React, { Component } from 'react';
import {
  AlertIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

export default class PlaceDetail extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: 2,
      annotations: [
        {
          title: 'Smithsonian Museum',
		  zipCode:22209,	
          latitude: 38.8980,
          longitude: -77.0230,
		  interest: "s"	
		  
        },
		{
          title: 'Smithsonian National Gallery of Art',
		  zipCode:22209,	
          latitude: 38.89247,
          longitude: -77.0186,
		  interest: "b"	
		  
        },
        {
          title: 'National Museum of Women in the Arts',
		  zipCode:22209,
          latitude: 38.90038, 
          longitude: -77.02883,
		  interest: "s"	
        }
      
      ]
    };
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Details</Text>
        
      </View>
    );
  }
}

const Error = (props) => {
  return (
    <Text style={styles.error}>{props.message}</Text>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#fed',
    flex: 1
  },
  text: {
    color: '#333333',
    marginBottom: 5
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5
  },
  error: {
    color: '#c66',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#ff7f50',
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
