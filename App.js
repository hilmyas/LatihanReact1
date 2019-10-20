import React from 'react';
import { TouchableOpacity, TextInput, Alert, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StudentList from './components/StudentList.js';
import EditStudentRecordActivity from './components/EditStudentRecordActivity.js';
import Styles from './styles/main.js';
import Constants from './utils/Constants.js';

const styles = Styles;

class MainActivity extends React.Component {

    static navigationOptions = {
        title: 'Insert Student'
    };

    constructor(props) {

        super(props)

        this.base_url = Constants.base_url

        this.state = {

            TextInput_Student_Name: '',
            TextInput_Student_Class: '',
            TextInput_Student_PhoneNumber: '',
            TextInput_Student_Email: '',

        }

    }

    InsertStudentRecordsToServer = () =>{
        fetch(this.base_url + Constants.create_url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                name : this.state.TextInput_Student_Name,

                grade : this.state.TextInput_Student_Class,

                phone : this.state.TextInput_Student_PhoneNumber,

                email: this.state.TextInput_Student_Email

            })

        })
        .then((response) => response.json())
        .then((responseJson) => {

            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
            this.setState(this.state = {

              TextInput_Student_Name: '',
              TextInput_Student_Class: '',
              TextInput_Student_PhoneNumber: '',
              TextInput_Student_Email: '',
  
          })
            }).catch((error) => {
                console.error(error);
        });

    }

    GoTo_Show_StudentList_Activity_Function = () =>
    {

        this.props.navigation.navigate('List');
    }

    render() {
        return (
            <View style={styles.MainActivity}>
                <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Student Registration Form </Text>

                <TextInput

                    placeholder="Enter Student Name"

                    onChangeText={ TextInputValue => this.setState({ TextInput_Student_Name : TextInputValue }) }

                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <TextInput

                    placeholder="Enter Student Class"

                    onChangeText={ TextInputValue => this.setState({ TextInput_Student_Class : TextInputValue }) }

                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <TextInput

                    placeholder="Enter Student Phone Number"

                    onChangeText={ TextInputValue => this.setState({ TextInput_Student_PhoneNumber : TextInputValue }) }

                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <TextInput

                    placeholder="Enter Student Email"

                    onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }

                    underlineColorAndroid='transparent'

                    style={styles.TextInputStyleClass}
                />

                <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >

                    <Text style={styles.TextStyle}> INSERT STUDENT RECORD TO SERVER </Text>

                </TouchableOpacity>

                <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >

                    <Text style={styles.TextStyle}> SHOW ALL INSERTED STUDENT RECORDS IN LISTVIEW </Text>

                </TouchableOpacity>

            </View>
        );
    }
}

const RootStack = createStackNavigator({
    Home: {
        screen: MainActivity
    },
    List: {
        screen: StudentList
    },
    Edit: {
        screen: EditStudentRecordActivity
    },
});

const App = createAppContainer(RootStack);
export default App;