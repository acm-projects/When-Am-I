import React, {useState} from 'react';
import { TouchableOpacity, ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';
import { SearchBar, ListItem, List } from 'react-native-elements';

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

class SearchPage extends React.Component {
  state = {
    search: '',
    data: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Recent Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Recent Location',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Recent Location. Making this really long to see what happens when I do',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbdasdfsdaf',
        title: 'Fourth Recent Location',
      },
      
    ],
      selectedId: '',
      text: 'recents',
  };

  updateSearch = (search) => {
    this.setState({ 
      //set data to results from searched string here?
      search,
      data: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Location',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Location. Making this really long to see what happens when I do',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbdasdfsdaf',
        title: 'Fourth Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aadaqwe',
        title: 'FFFFFFFFFFFFFifth Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91qwqqqq',
        title: '6 Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9njkkj',
        title: 'Seven Location',
      },
      
      ],
      selectedId: '',
      text: 'results for "' + search + '"',
    });
  };

  updateSearchFromTag = (tag) => {
    this.setState({ 
      //set data to results from searched tag here?
      search: tag,
      data: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Location',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Location. Making this really long to see what happens when I do',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbdasdfsdaf',
        title: 'Fourth Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aadaqwe',
        title: 'FFFFFFFFFFFFFifth Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91qwqqqq',
        title: '6 Location',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9njkkj',
        title: 'Seven Location',
      },
      
      ],
      selectedId: '',
      text: 'results for ' + tag,
    });
  };

  resetSearch = () => {
    this.setState({ 
      //set data to results from searched string here?
      search: '',
      data: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Recent Location',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Recent Location',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Recent Location. Making this really long to see what happens when I do',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbdasdfsdaf',
          title: 'Fourth Recent Location',
        },
        
      ],
      selectedId: '',
      text: 'recents'
    });
  };

  renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => this.state.selectedId = item.id }
      />
    );
  };

  render() {
    const { search } = this.state;
    const tags= ['Civil War', 'Texas Revolution', 'Presidents', 'Tags!', 'More History', 'ABC123'];

    return (
      <View style = {styles.back}>
      
      <SafeAreaView style={styles.container}>
  
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        onClear={this.resetSearch}
        value={search}
        containerStyle={{backgroundColor: '#F0ECE3', borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
        inputContainerStyle={{backgroundColor: 'white', borderWidth: 4, borderRadius: 30, borderColor: '#30475E', borderBottomWidth: 4}}
      />
  
      <Text style = {{
        color: '#30475E',
        fontSize: 30,
        textAlign: 'left',
        marginHorizontal: 15
      }}>search by tag</Text>
  
      <View>
        <ScrollView 
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={200}
        showsHorizontalScrollIndicator={false}>

          <View style={styles.tagsBox}>

                <TouchableHighlight underlayColor= '#F0ECE3' onPress={() => this.updateSearchFromTag(tags[0])}> 
                  <View style={styles.button}>
                  <Text style={styles.TagText}>{tags[0]}</Text>
                  </View>
                </TouchableHighlight>
                
                <TouchableHighlight underlayColor= '#F0ECE3' onPress={() => this.updateSearchFromTag(tags[1])}> 
                  <View style={styles.button}>
                  <Text style={styles.TagText}>{tags[1]}</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor= '#F0ECE3' onPress={() => this.updateSearchFromTag(tags[2])}> 
                  <View style={styles.button}>
                  <Text style={styles.TagText}>{tags[2]}</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor= '#F0ECE3' onPress={() => this.updateSearchFromTag(tags[3])}> 
                  <View style={styles.button}>
                  <Text style={styles.TagText}>{tags[3]}</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor= '#F0ECE3' onPress={() => this.updateSearchFromTag(tags[4])}> 
                  <View style={styles.button}>
                  <Text style={styles.TagText}>{tags[4]}</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor= '#F0ECE3' onPress={() => this.updateSearchFromTag(tags[5])}> 
                  <View style={styles.button}>
                  <Text style={styles.TagText}>{tags[5]}</Text>
                  </View>
                </TouchableHighlight>

          </View>
       </ScrollView>
      </View>

      <Text style = {{
        color: '#30475E',
        fontSize: 30,
        textAlign: 'left',
        marginHorizontal: 15
      }}>{this.state.text}</Text>
        
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          extraData={this.state.selectedId}
        />

      </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#cbaf87',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
  },
  title: {
    fontSize: 32,
    color: '#30475E',
  },
  back:{
    flex: 1,
    backgroundColor: '#F0ECE3',
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#7E8A97',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    marginRight: 10,
  },
  TagText: {
    color: '#F0ECE3',
    fontSize: 20,
    textAlign: 'center'
  },
  tagsBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15
  },
});

export default SearchPage;