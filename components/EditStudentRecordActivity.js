import React from 'react';
import { TouchableOpacity, TextInput, Alert, Text, View } from 'react-native';
import Styles from '../styles/main.js';
import Constants from '../utils/Constants.js';

const styles = Styles;

export default class EditStudentRecordActivity extends React.Component {
  
  constructor(props) {
    
       super(props)
    
       this.state = {
    
         TextInput_Student_ID: '',
         TextInput_Student_Name: '',
         TextInput_Student_Class: '',
         TextInput_Student_PhoneNumber: '',
         TextInput_Student_Email: '',
    
       }
    
     }
 
     componentDidMount(){
 
      // Received Student Details Sent From Previous Activity and Set Into State.
      this.setState({ 
        TextInput_Student_ID : this.props.navigation.state.params.ID,
        TextInput_Student_Name: this.props.navigation.state.params.NAME,
        TextInput_Student_Class: this.props.navigation.state.params.GRADE,
        TextInput_Student_PhoneNumber: this.props.navigation.state.params.PHONE,
        TextInput_Student_Email: this.props.navigation.state.params.EMAIL,
      })
 
     }
  
    static navigationOptions =
    {
       title: 'EditStudentRecordActivity',
    };
 
    UpdateStudentRecord = () =>{
      
            fetch(Constants.base_url + Constants.update_url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      
              id : this.state.TextInput_Student_ID,
 
              name : this.state.TextInput_Student_Name,
      
              grade : this.state.TextInput_Student_Class,
      
              phone : this.state.TextInput_Student_PhoneNumber,
      
              email: this.state.TextInput_Student_Email
      
            })
      
            }).then((response) => response.json())
                .then((responseJson) => {
      
                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);
      
                }).catch((error) => {
                  console.error(error);
                });
      
      }
 
 
    DeleteStudentRecord = () =>{
        
          fetch('http://192.168.1.13/react/DeleteStudentRecord.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            id : this.state.TextInput_Student_ID
        
          })
        
          }).then((response) => response.json())
          .then((responseJson) => {
        
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
        
          }).catch((error) => {
             console.error(error);
          });
 
          this.props.navigation.navigate('Home');
 
      }
 
    render() {
 
      return (
   
   <View style={styles.MainContainer}>
   
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Student Record Form </Text>
    
          <TextInput
            
            placeholder="Student Name Shows Here"
            
            value={this.state.TextInput_Student_Name}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Name : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Student Class Shows Here"
 
            value={this.state.TextInput_Student_Class}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Class : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Student Phone Number Shows Here"
 
            value={this.state.TextInput_Student_PhoneNumber}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Student_PhoneNumber : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
   
            placeholder="Student Email Shows Here"
 
            value={this.state.TextInput_Student_Email}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
   
            <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>
   
         </TouchableOpacity>
   
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
   
            <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
   
         </TouchableOpacity>
    
   
   </View>
              
      );
    }
 
}