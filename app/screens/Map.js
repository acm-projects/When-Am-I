import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  PROVIDER_GOOGLE,
  Geojson,
  Polyline,
} from "react-native-maps";
import {queryCoord} from '../components/firebase'
const pin = require('../assets/pin.png');
// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 14;
const LONGITUDE_DELTA = 14;
const LATITUDE = 31.000000;
const LONGITUDE = -100.000000;
const mapStyle = require('../components/mapStyle.json');
const txBorder = require('../components/TXborderCoord.json')
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
      distanceTravelled: 0,
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
    queryCoord(3366465, 563099, 100000, this);   // utm east/north coord to search and radius from that coord
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
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
          customMapStyle={mapStyle}
        >     
          {this.state.list.map((marker, index) => (
            
            <Marker
            key={index}
            coordinate={{latitude: utm.convertUtmToLatLng(marker.utm_east, marker.utm_north, marker.utm_zone, 'S').lat,longitude: utm.convertUtmToLatLng(marker.utm_east, marker.utm_north, marker.utm_zone, 'S').lng}}
            title={marker.title}
            >
              {console.log(marker.title)}
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