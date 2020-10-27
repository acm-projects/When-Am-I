import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  PermissionsAndroid
} from "react-native";
import MapView from "react-native-map-clustering";
import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import LocationPage from './EventPage';
import  {
  Marker,
  AnimatedRegion,
  PROVIDER_GOOGLE,
  Callout,
} from "react-native-maps";
import {queryCoord} from '../components/firebase'

const {height , width} = Dimensions.get("window");
const pin = require('../assets/pin.png');
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 24;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE = 31.000000;
const LONGITUDE = -100.000000;
const mapStyle = require('../components/mapStyle.json');
var utmObj = require('utm-latlng');
var utm = new utmObj(); 


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      prevLatLng: {},
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
  }
  componentDidMount() {
    queryCoord(3366465, 563099, 10000000, this);   // utm east/north coord to search and radius from that coord
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
          showsUserLocation={true}
          showsMyLocationButton={true}
          clusterColor={"#CBAF87"}
          spiralEnabled={false}
          followUserLocation={true}
          loadingEnabled
          initialRegion={this.getMapRegion()}
          customMapStyle={mapStyle}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          
        >     
          {this.state.list.map((marker, index) => (
            
            <Marker
            key={index}
            coordinate={{latitude: utm.convertUtmToLatLng(marker.utm_east, marker.utm_north, marker.utm_zone, 'S').lat,longitude: utm.convertUtmToLatLng(marker.utm_east, marker.utm_north, marker.utm_zone, 'S').lng}}
            tracksViewChanges={true}
            onCalloutPress
            title={marker.title}
            onCalloutPress={this.markerClick}
            >
              <Image
              source={require('../assets/pin.png')}
              style={{width: 25, height: 25}}
              resizeMode="contain">
            </Image>
            </Marker>
          ))}   
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