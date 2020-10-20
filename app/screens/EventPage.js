import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const {height , width} = Dimensions.get("window");

const LocationPage = ( ) => (
  <ScrollView>
    <SafeAreaView>
      <View style={styles.backgroundColor}>
      <Image source = {require('../assets/logo.jpg')} 
        style = {{ 
          width: Dimensions.get("window").width/6, 
          height: Dimensions.get("window").width/6, 
          padding: Dimensions.get("window").width/12,
          borderRadius: (Dimensions.get("window").width/5)/2,
          alignSelf: 'center',
            }}/>
        <View style={styles.outerBox}>
          <View style={styles.outerBoxText}>
            <Text style = {styles.HeaderText}>Location Name</Text>
            <Text style = {styles.SubHeaderText}>Location Address     XX/XX/XXXX</Text>
            <Text style = {styles.MilesAwayText}>2.5 Miles Away</Text>
            <Text style = {styles.DescriptionText}>   Historical Event/Place Description. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel. sed aliquam vulputate ligula, non tincidunt sem euismod at. quisque dictum, sapien pulvinar gravida tincidunt, odio lacus consequat mauris, quis imperdiet metus quam sed velit.</Text>
            <View style={{flexDirection:"row"}}>
              <TouchableHighlight style={styles.button}>
                <View style={styles.row}>
                  <Text style={styles.TagText}>Science</Text>
                </View>
              </TouchableHighlight>
            <View style = {{marginLeft:(Dimensions.get("window").width)/40}}>
              <TouchableHighlight style={styles.button}>
                <View style={styles.row}>
                  <Text style={styles.TagText}>1920's</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style = {{marginLeft:(Dimensions.get("window").width)/40}}>
            <TouchableHighlight style={styles.button}>
              <View style={styles.row}>
                <Text style={styles.TagText}>Family</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.reviewBox}>
          <View style={{flexDirection:"row"}}> 
            <Image source = {require('../assets/logo.jpg')}
              style = {{ 
                borderRadius: 60,
                width: Dimensions.get("window").width/11, 
                height: Dimensions.get("window").width/11, 
                marginTop: Dimensions.get("window").height/50,
                marginLeft: (Dimensions.get("window").height)/40,
                }}/>
                  <Text style = {styles.UsernameText}>ThisIsAUsername1</Text>
                  <Text style = {styles.StarsText}>4.5/5</Text>
              </View>
              <Text style = {styles.ReviewText}>   Review Contents. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel. sed aliquam vulputate ligula, non tincidunt sem euismod at. quisque dictum, sapien pulvinar gravida tincidunt.</Text>
            </View>

            <View style={styles.reviewBox}>
            <View style={{flexDirection:"row"}}> 
            <Image source = {require('../assets/logo.jpg')} 
            style = {{ 
              borderRadius: 60,
              width: Dimensions.get("window").width/11, 
              height: Dimensions.get("window").width/11, 
              marginTop: Dimensions.get("window").height/50,
              marginLeft: (Dimensions.get("window").height)/40,
              }}/>
                <Text style = {styles.UsernameText}>ThisIsAUsername2</Text>
                <Text style = {styles.StarsText}>4.5/5</Text>
            </View>
            <Text style = {styles.ReviewText}>   Review Contents. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel. sed aliquam vulputate ligula, non tincidunt sem euismod at. quisque dictum, sapien pulvinar gravida tincidunt.</Text>
            </View>

            <View style={styles.reviewBox}>
            <View style={{flexDirection:"row"}}> 
            <Image source = {require('../assets/logo.jpg')} 
            style = {{ 
              borderRadius: 60,
              width: Dimensions.get("window").width/11, 
              height: Dimensions.get("window").width/11, 
              marginTop: Dimensions.get("window").height/50,
              marginLeft: (Dimensions.get("window").height)/40,
              }}/>
                <Text style = {styles.UsernameText}>ThisIsAUsername3</Text>
                <Text style = {styles.StarsText}>4.5/5</Text>
            </View>
            <Text style = {styles.ReviewText}>   Review Contents. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel. sed aliquam vulputate ligula, non tincidunt sem euismod at. quisque dictum, sapien pulvinar gravida tincidunt.</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  </ScrollView>
)
const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
  },
  outerBox: {
    borderRadius: 45,
    marginTop: (Dimensions.get("window").height)/60,
    backgroundColor: '#F0ECE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewBox: {
    //flex: 4,
    borderRadius: 45,
    width: (Dimensions.get("window").width)*(10.8/13),
    //height: (Dimensions.get("window").height)/80,
    marginTop: (Dimensions.get("window").height)/50,
    marginBottom: (Dimensions.get("window").height)/80,
    backgroundColor: '#cbaf87',
    //alignItems: 'center',
    //justifyContent: 'center',
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
    height: (Dimensions.get("window").height)*(1.5),
    //marginTop: (Dimensions.get("window").height)/8,
    //backgroundColor: '#F0EC00',
    textAlign: 'left',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  HeaderText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/7.8,
    marginTop: (Dimensions.get("window").height)/40,
    alignSelf: 'center'
    //fontFamily: "BanglaSangamMN",
  },
  SubHeaderText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/20,
    marginTop: (Dimensions.get("window").height)/70,
    textAlign: 'left'
    //fontFamily: "BanglaSangamMN",
  },
  MilesAwayText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/25,
    //marginTop: (Dimensions.get("window").height)/70,
    textAlign: 'left'
    //fontFamily: "BanglaSangamMN",
  },
  DescriptionText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/22,
    marginTop: (Dimensions.get("window").height)/35,
    textAlign: 'left'
    //fontFamily: "BanglaSangamMN",
  },
  TagText: {
    color: '#F0ECE3',
    fontSize: (Dimensions.get("window").width)/22,
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
    textAlign: 'left'
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
});

export default LocationPage;