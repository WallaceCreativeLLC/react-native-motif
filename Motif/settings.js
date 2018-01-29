import React, { Component } from 'react';
import {
  AlertIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Switch,	
  Image,	
  StyleSheet
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
//import { Switch } from 'react-native-switch';
export default class AddPlace extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
	  zipCode: '',
      latitude: '',
      longitude: '',
      titleError: '',
      latitudeError: '',
      longitudeError: '',
	  interest: ''	
    };
  }

  handleAddPlace() {
    const { interest } = this.state;
    //let zipCodeError = '';
    //let latitudeError = '';
    //let longitudeError = '';
	let interestError = '';  
    /*if (!zipCode) {
      zipCodeError = 'ZipCode is required.';
    }
    if (!latitude) {
      latitudeError = 'Latitude is required.';
    }
    if (!longitude) {
      longitudeError = 'Longitude is required.';
    }*/
	if (!interest) {
      interestError = 'Interest is required.';
    }

    this.setState({
      //zipCodeError,
      //latitudeError,
      //longitudeError,
	  interestError	
    });

    const isError = interestError;
    if (!isError) {
      this.props.onAddPlace({
        //zipCode,
        //latitude: parseFloat(latitude),
        //longitude: parseFloat(longitude),
		interest
      });

      
    }

    dismissKeyboard();
  }
 state = {
      taskCreated: false,
  };

  onChangeFunction(newState) {
      this.setState(newState, () => AlertIOS.alert("We have updated your map to show the hidden gems!"));
	  
  }

  render() {
    return (
      <View style={styles.view}>
        <Image
          style={{width: 250, height: 76}}
          source={require('./assets/motif.png')}
        />
        <Text>Want to find a museum off the beaten path?</Text>
		<Text></Text>
		<Text style={styles.text}>Type gem to find you museums.</Text>
		<TextInput
          keyboardType="numbers-and-punctuation"
          style={styles.textInput}
          value={this.state.interest}
          onChangeText={(interest) => this.setState({ interest })}
        ></TextInput>

        <TouchableHighlight style={styles.button} onPress={this.handleAddPlace.bind(this)}>
          <Text style={styles.buttonText}>Find Museums</Text>
        </TouchableHighlight>
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
    backgroundColor: '#eeced5',
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
    backgroundColor: '#600e20',
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
