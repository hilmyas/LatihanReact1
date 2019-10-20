import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    MainActivity: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:10,
    },
    TouchableOpacityStyle: {
 
        padding:10,
        borderRadius:5,
        margin:7,
        width: '90%',
        backgroundColor: '#00BCD4',   
    },
    TextInputStyleClass: {
 
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 5 ,
     
    },
    TextStyle:{
        color:'#fff',
        textAlign:'center',
    },
   
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }, 
	
	MainContainer_For_Show_StudentList_Activity :{
    
		flex:1,
		paddingTop: (Platform.OS == 'ios') ? 20 : 0,
		marginLeft: 5,
		marginRight: 5
    
    },
});