import React, {useState} from 'react';
import { TouchableOpacity, Image, Dimensions, ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';
import { SearchBar, ListItem, List } from 'react-native-elements';
import {queryCoord} from '../components/firebase'
import {queryKeyword} from '../components/firebase'
import {queryCode} from '../components/firebase'

/*
<FlatList
data={this.state.data}
renderItem={this.renderItem}
keyExtractor={(item) => item.indexname}
extraData={this.state.selectedId}
/>
*/

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.indexname}</Text>
  </TouchableOpacity>
);

class SearchPage extends React.Component {
  state = {
    search: '',

    data: [
      {
        indexname: 'First Recent Location',
      },
      {
        indexname: 'Second Recent Location',
      },
      {
        indexname: 'Third Recent Location. Making this really long to see what happens when I do',
      },
      {
        indexname: 'Fourth Recent Location',
      },
      
    ],
      selectedId: '',
      text: 'recents',
  };

  updateSearch = (search) => {
    //if (queryKeyword.bind(this)(search, this).length()){
      this.setState({ 
        //set data to results from searched string here?
        search: search,
        selectedId: '',
        text: 'press enter to search for "' + search + '"',
      });
    //}
  };

  querySearch = (search) => {

    this.setState({
      search,
      text: 'results for "' + this.state.search + '"',
    });

    queryKeyword.bind(this)(search, this);

    /*
    console.log(this.state.list);
    this.state.list.map(x => x.indexname);
    console.log(this.state.list.join(' '));

    
    {this.state.list.map((listItem) => {
      return(
        <Text>{listItem.indexname}</Text>
      )
    })}

   if (!(this.state.list === undefined)){
    this.state.data = [{indexname: this.state.search + ' '}];
    let result = this.state.list.map((ListItem) => {ListItem.indexname});
    console.log(result[0]);
  }else{
    this.state.data = [{indexname: this.state.search + ' was not found'}]
    
  }
  */
  };

  updateSearchFromTag = (tag) => {
    this.setState({ 
      //set data to results from searched tag here?
      search: tag,
      data: [
      {
        indexname: 'First Location',
      },
      {
        indexname: 'Second Location',
      },
      {
        indexname: 'Third Location. Making this really long to see what happens when I do',
      },
      {
        indexname: 'Fourth Location',
      },
      {
        indexname: 'FFFFFFFFFFFFFifth Location',
      },
      {
        indexname: '6 Location',
      },
      {
        indexname: 'Seven Location',
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
          indexname: 'First Recent Location',
        },
        {
          indexname: 'Second Recent Location',
        },
        {
          indexname: 'Third Recent Location. Making this really long to see what happens when I do',
        },
        {
          indexname: 'Fourth Recent Location',
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
        onPress={() => this.state.selectedId = item.indexname }

        
      />
    );
  };

  render() {
    const { search } = this.state;
    const tags= ['Civil War', 'Texas Revolution', 'Presidents', 'Tags!', 'More History', 'ABC123'];
    console.log(this.state.list);
    if (!(this.state.list === undefined)){
      console.log(this.state.list[0])
    }
    

    return (
      <View style = {styles.back}>
      
      <SafeAreaView style={styles.container}>
  
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        onSubmitEditing={this.querySearch}
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
keyExtractor={(item) => item.indexname}
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
