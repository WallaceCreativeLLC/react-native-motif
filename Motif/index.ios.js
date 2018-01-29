import React, { Component } from 'react';
import {
  AppRegistry,
  AlertIOS,
  Text,
  TabBarIOS,
  StyleSheet,
  View
} from 'react-native';
import PlaceMap from './place_map';
import AddPlace from './settings';

class Places extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: 0,
      annotations: [
        {
          title: 'Smithsonian Museum',
		  zipCode:22209,	
          latitude: 38.8980,
          longitude: -77.0230,
		  interest: "gem",
		  urlParam: "smithsonian"	
		  
        },
		{
          title: 'Smithsonian National Gallery of Art',
		  zipCode:22209,	
          latitude: 38.89247,
          longitude: -77.0186,
		  interest: "not",
		  urlParam: "art"	
        },
        {
          title: 'National Museum of Women in the Arts',
		  zipCode:22209,
          latitude: 38.90038, 
          longitude: -77.02883,
		  interest: "gem",
		  urlParam: "womens"
        },
		  
        {
          title: 'International Arts and Artists',
          latitude: 38.91184,
          longitude: -77.04839,
		  interest: "gem",
		  urlParam: "international"	
        },
        {
          title: 'National Portrait Gallery',
          latitude: 38.897869,
          longitude: -77.023053,
		  interest: "gem",
		  urlParam: "portrait"	
        },
        {
          title: 'Smithsonian Renwick Gallery',
          latitude: 38.899140,
          longitude: -77.039032,
		  interest: "gem",
		  urlParam: "renwick"	
        },
		{
			title:"Sewall-Belmont House And Museum",
			latitude: 38.892316, 
          	longitude: -77.003768,
			interest: "gem",
			urlParam: "sewall"	
		},
		{
			title:"National Museum of African Art",
			latitude: 38.887933,
          	longitude: -77.025507,
			interest: "not",
			urlParam: "african"	
		}
      ]
    };
  }

  handleTabPress(tab) {
    this.setState({ selectedTab: tab })
  }

  handleAddPlace(settings) {
    var annotations = this.state.annotations;
    //annotations.push(annotation);
	var interestVal = settings.interest;	  
	 //console.warn(interestVal);
    //const annotations = this.state.annotations.filter(l => {return l.interest.toLowerCase().match( interestVal ); 
	
	var replacementArray = [];
	for (var i = 0; i < annotations.length; i++) {
		
		if(annotations[i].interest == settings.interest){		
		   //console.warn(settings.interest);
		   replacementArray.push(annotations[i]);
		}
	}
	if(replacementArray.length > 0 ){
	   //this.setState({ annotations });
	   //console.warn(replacementArray.length);
	   annotations = replacementArray;
	   this.setState({ annotations });
		AlertIOS.alert(
        'We Found Some Museums!',
        'Your selection has been added to the map. Click on the Map tab to view.'
      );
	}  
	else{
		this.setState({ annotations });
		AlertIOS.alert(
        'We coundln\'t any museums',
        'Please update your selection and try again.'
      );
	}  
	   
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
		  title="Museums"
          icon={require('./assets/map.png')}
          selected={this.state.selectedTab === 0}
          onPress={this.handleTabPress.bind(this, 0)}
        >
          <PlaceMap annotations={this.state.annotations} />
          {/* <View style={styles.view}>
            <Text style={styles.text}>Favorite Places</Text>
          </View> */}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={require('./assets/settings.png')}
          selected={this.state.selectedTab === 1}
          onPress={this.handleTabPress.bind(this, 1)}
        >
          <AddPlace onAddPlace={this.handleAddPlace.bind(this)} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 50,
  },
  view: {
    backgroundColor: '#983850',
    flex: 1
  }
});

AppRegistry.registerComponent('Places', () => Places);
