import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Styles from '../styles/main.js';
import Constants from '../utils/Constants.js';

const styles = Styles;

export default class StudentList extends React.Component {

  constructor(props) { 
 
    super(props);
 
    this.base_url = Constants.base_url

    this.state = {
 
      isLoading: true
 
    }
  }
 
  static navigationOptions =
  {
     title: 'StudentList',
  };
 
  componentDidMount() {
    
       return fetch(this.base_url + Constants.list_url)
         .then((response) => response.json())
         .then((responseJson) => {
           // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           console.log(responseJson);
           this.setState({
             isLoading: false,
             dataSource: responseJson,
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
    
     GetStudentIDFunction = (id, name, grade, phone, email) => {
 
          this.props.navigation.navigate('Edit', { 
 
            ID : id,
            NAME : name,
            GRADE : grade,
            PHONE : phone,
            EMAIL : email
 
          });
 
     }
 
     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: .5,
             width: "100%",
             backgroundColor: "#000",
           }}
         />
       );
     }
 
     render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer_For_Show_StudentList_Activity}>

          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent= {this.ListViewItemSeparator}
            renderItem={({item}) => 
              <Text style={styles.rowViewContainer}> 
 
                {item.name} 

              </Text>}
            keyExtractor={(item, index) => index.toString()}
          />
   
        </View>
      );
    }
}