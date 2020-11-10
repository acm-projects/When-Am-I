import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box'
import { visit, unvisit } from '../components/UserData'
import { SafeAreaView } from 'react-native-safe-area-context';
import { showLocation } from 'react-native-map-link'

class LocationPage extends React.Component {
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  
  state = {
      isChecked: false,
  }

  render (){
    if(this.props.route.params) { // Only render the event page if a marker has been picked
    const { markerInfo } = this.props.route.params;

    return (
      <View style={styles.backgroundColor}>
        <ScrollView>
          <SafeAreaView>

          <Image source = {require('../assets/logo.jpg')} 
          style = {{ 
            width: Dimensions.get("window").width/6, 
            height: Dimensions.get("window").width/6, 
            padding: Dimensions.get("window").width/12,
            borderRadius: (Dimensions.get("window").width/5)/2,
            alignSelf: 'center',
              }}
          />
          <View style={styles.outerBox}>
            <View style = {styles.outerBoxText}>

            {/*Base screen, with title, address, distance, and description*/}
            <Text style = {styles.HeaderText}>{markerInfo.title}</Text>
            <Text style = {styles.SubHeaderText}> {markerInfo.city} { ", Texas" }</Text>
            
            <View style = {{padding: 15}}>
              <TouchableOpacity style={styles.logButton} onPress={()=>{
                showLocation({
                  latitude: markerInfo.latitude,
                  longitude: markerInfo.longitude,
                  googleForceLatLon: true,
                  title: (markerInfo.title),
                })
              }}>
                <Text>GO THERE!</Text>  
              </TouchableOpacity> 
            </View>

              <CheckBox
                style={{flex: 1, padding: 10,}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked,
                  })
                  if(!this.state.isChecked)
                    visit(markerInfo)
                  else
                    unvisit(markerInfo)
                }}
                isChecked={this.state.isChecked}
                leftText={"Visited?"}
                leftTextStyle={{
                color: 'black',
                fontSize: (Dimensions.get("window").width)/20,
                fontWeight: "bold",
                }}
              />
              <View style={styles.reviewBox}>
                <Text style = {styles.DescriptionText}>{markerInfo.markertext}</Text>
             </View>

            </View>
          </View>

        </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
  else {
    return (
      <View style={styles.backgroundColor}>
      <ScrollView>
      <SafeAreaView>
        <Image source = {require('../assets/logo.jpg')} 
        style = {{ 
          width: Dimensions.get("window").width/6, 
          height: Dimensions.get("window").width/6, 
          padding: Dimensions.get("window").width/12,
          borderRadius: (Dimensions.get("window").width/5)/2,
          alignSelf: 'center',
            }}
        />
        <View style={styles.outerBox}>
          <View style = {styles.outerBoxText}>

            {/*Base screen, with title, address, distance, and description*/}
            <Text style = {styles.HeaderText}>Choose a marker from the map to view details about the location</Text>
          </View>
        </View>
      </SafeAreaView>
      </ScrollView>
      </View>
    )}
  }
}

const styles = StyleSheet.create({
  tagsBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  backgroundColor: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
  },
  reviewArea:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: (Dimensions.get("window").height),
    width: (Dimensions.get("window").width*(12/13)),
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height)/60,
  },
  outerBox: {
    borderRadius: 45,
    width: (Dimensions.get("window").width*(12/13)),
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height)/60,
    backgroundColor: '#F0ECE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewBox: {
    borderRadius: 30,
    width: (Dimensions.get("window").width)*(10.8/13),
    marginTop: (Dimensions.get("window").height)/30,
    backgroundColor: '#cbaf87',
  },
  button: {
    //flex:1,
    borderRadius: 20,
    width: (Dimensions.get("window").width)/4,
    height: (Dimensions.get("window").height)/20,
    marginTop: (Dimensions.get("window").height)/45,
    backgroundColor: '#7E8A97',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    //box-shadow: 0px 4px 4px 0px #000000 25%;
  },
  outerBoxText: {
    flex: 8,
    borderRadius: 45,
    width: (Dimensions.get("window").width)*(10/12),
    //height: (Dimensions.get("window").height)*(1.5),
    //marginTop: (Dimensions.get("window").height)/8,
    //backgroundColor: '#F0EC00',
    textAlign: 'center',
    paddingBottom: (Dimensions.get("window").height)/30,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  HeaderText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/10,
    marginTop: (Dimensions.get("window").height)/45,
    textAlign: 'center',
    //fontFamily: "BanglaSangamMN",
  },
  SubHeaderText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/20,
    marginTop: (Dimensions.get("window").height)/70,
    textAlign: 'center'
    
    //fontFamily: "BanglaSangamMN",
  },
  MilesAwayText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/25,
    //marginTop: (Dimensions.get("window").height)/70,
    textAlign: 'center'
    //fontFamily: "BanglaSangamMN",
  },
  DescriptionText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/22,
    marginTop: (Dimensions.get("window").height)/35,
    textAlign: 'center',
    padding: 2.5,
    marginBottom: (Dimensions.get("window").height)/35,
    //fontFamily: "BanglaSangamMN",
  },
  TagText: {
    color: '#F0ECE3',
    fontSize: (Dimensions.get("window").width)/30,
    marginTop: (Dimensions.get("window").height)/85,
    textAlign: 'center'
    //fontFamily: "BanglaSangamMN",
  },
  UsernameText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/18,
    marginTop: (Dimensions.get("window").height)/40,
    marginLeft: (Dimensions.get("window").height)/90,
    textAlign: 'left'
    //fontFamily: "BanglaSangamMN",
  },
  StarsText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/20,
    marginTop: (Dimensions.get("window").height)/40,
    marginLeft: (Dimensions.get("window").height)/50,
    textAlign: 'left',
    //fontFamily: "BanglaSangamMN",
  },
  ReviewText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/22,
    marginTop: (Dimensions.get("window").height)/80,
    marginLeft: (Dimensions.get("window").width)/15,
    marginRight: (Dimensions.get("window").width)/30,
    marginBottom: (Dimensions.get("window").height)/40,
    textAlign: 'left'
    //fontFamily: "BanglaSangamMN",
  },
  logButton: {
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    backgroundColor: '#cbaf87',
    borderColor: 'black',
    borderRadius: 50,
    shadowColor: '#30475E',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 4,
    alignItems: 'center',
  },
});

export default LocationPage;