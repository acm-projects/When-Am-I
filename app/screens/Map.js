import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker, AnimatedRegion, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { queryCoord } from '../components/firebase'
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from "react-native-gesture-handler";

const {height , width} = Dimensions.get("window");
const pin = require('../assets/pin.png');
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 24;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE = 31.000000;
const LONGITUDE = -100.000000;
const mapStyle = require('../components/mapStyle.json');

const defaultPin = require('../assets/pin-default.png')
const churchesPin = require('../assets/pin-churches.png')
const graveyardsPin = require('../assets/pin-graveyards.png')
const housesPin = require('../assets/pin-houses.png')
const militaryPin = require('../assets/pin-military.png')


class Map extends React.Component {

  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
        position => {
        let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 5,
                longitudeDelta: 5
            };
            this.setState({
                initialRegion: region
            });
        },
        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
}
constructor(props) {
  super(props);

  this.state = {
    list: [],
    latitude: LATITUDE,
    longitude: LONGITUDE,
    routeCoordinates: [],
    prevLatLng: {},
    tracksViewChanges: false,
    coordinate: new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0
    })
  };
}


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
    this.getLocationAsync();
  }
  componentDidMount() {
    queryCoord.bind(this)(32.750323, -96.811523, 10);   // Search for markers around a lat/lng point, radius is in miles
    this.getCurrentLocation();
  }

  getLocationAsync = async () => {
    await Permissions.askAsync(Permissions.LOCATION);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.coordinate !== this.props.coordinate // set true only when props changed
        || prevProps.value !== this.props.value 
        || prevProps.level !== this.props.level) {
        this.setState({tracksViewChanges: true})
    } else if (this.state.tracksViewChanges) {
       // set to false immediately after rendering with tracksViewChanges is true
        this.setState({tracksViewChanges: false})
    }
  }


  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  render() {
    return (
      <View style={styles.container}>
        <MapView
          loadingEnabled={true}
          loadingIndicatorColor={'#CBAF87'}
          loadingBackgroundColor={"#30475E"}
          showsUserLocation={true}
          showsMyLocationButton={true}
          clusterColor={"#CBAF87"}
          followUserLocation={false}
          initialRegion={this.getMapRegion()}
          customMapStyle={mapStyle}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          tracksViewChanges={this.state.tracksViewChanges}
          onPress={this.props.handlePress}
        > 

          {this.state.list.map((marker, index) => {
            var code = marker.code
            var pin = defaultPin 

            if(code.includes("churches")) pin = churchesPin
            else if(code.includes("graveyards")) pin = graveyardsPin
            else if(code.includes("houses")) pin = housesPin
            else if(code.includes("military")) pin = militaryPin
            
            return(
              <Marker
                key={index}
                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                title={marker.title}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                  }}                
                >
                <Image
                  source={pin}
                  style={{width: 30, height: 30}}
                  resizeMode="contain">
                </Image>

                <Callout style={{flex:1, position:'relative'}} onPress={
                  () => {
                    this.props.navigation.navigate('Details', {markerInfo: marker})
                }}>
                  <View style={{flex:1, padding:0}}>
                  </View>
                </Callout>
              </Marker>
            )}
          )}  
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
});

export default Map;