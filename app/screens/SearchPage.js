import React from 'react';
import { TouchableOpacity, ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { queryKeyword, queryCode} from '../components/firebase'

const tags= [
  {tag:'Civil War',search:"Civil War"},
  {tag:'Texas Revolution',search:"Texas Revolution"},
  {tag:'Churches',search:"churches"},
  {tag:'Graveyards',search:"graveyards"},
  {tag:'Military',search:"military"}
 ]

const Item = ({  item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.indexname}</Text>
    <Text style={styles.addr}>{item.address}</Text>
  </TouchableOpacity>
);

class SearchPage extends React.Component {
  
  state = {
    search: '',
    selectedId: '',
    text: 'recents',
    list: [],
  };

  updateSearch = (search) => {
      this.setState({ 
        search: search,
        selectedId: '',
      });
  };

  updateSearchFromTag = (tag) => {
    queryCode.bind(this)(tag)
    this.setState({ 
      text: 'results for ' + tag,
    });
  };

  querySearch = () => {
    queryKeyword.bind(this)(this.state.search);
    this.state.text = 'results for "' + this.state.search + '"';
  }

  renderItem = ({ item }) => {
    return (
      <Item
        key={item.firebaseid}
        item={item}
        onPress={() => {
          this.state.selectedId = item.indexname
          this.props.navigation.navigate('Details', {markerInfo: item})
        }}
      />
    );
  };

  render() {
    const { search } = this.state;

    return (
      <View style = {styles.back}>
      <SafeAreaView style={styles.container}>
      
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        onSubmitEditing={this.querySearch}
        value={search}
        containerStyle={{backgroundColor: '#30475E', borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
        inputContainerStyle={{backgroundColor: 'white', borderWidth: 4, borderRadius: 30, borderColor: '#7E8A97', borderBottomWidth: 4}}
      />
  
      <View>
      <ScrollView 
      horizontal= {true}
      decelerationRate={0}
      snapToInterval={200}
      showsHorizontalScrollIndicator={false}
      >
        <View style={styles.tagsBox}>
          {tags.map((tag) => {
            return ( 
              <TouchableHighlight key={tag.tag} underlayColor= '#30475E' onPress={() => this.updateSearchFromTag(tag.search)}> 
                <View style={styles.button}>
                  <Text style={styles.TagText}>{tag.tag}</Text>
                </View>
              </TouchableHighlight>
            )
          })}
        </View>
      </ScrollView>
      </View>

      

      <FlatList
      data={this.state.list}
      renderItem={this.renderItem}
      keyExtractor={(item) => item.firebaseid}
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
    fontSize: 25,
    color: '#30475E',
  },
  addr: {
    fontSize: 20,
    color: '#30475E',
  },
  back:{
    flex: 1,
    backgroundColor: '#30475E',
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
