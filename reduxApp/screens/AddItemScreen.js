import React, {useState} from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import * as noteActions from '../store/actions'


const AddItemScreen = props => {



    const notesItems = useSelector(state => state)
    const dispatch = useDispatch();
    const addNote = () =>{
        dispatch(noteActions.addnote("Title :" + textValue + "\n" + "Description : " + descValue))
        console.log(notesItems)

    }
    const [textValue,setTextValue] = useState("")
    const [descValue,setDescValue] = useState("")



    return(
     <View style={styles.container}>
         <View>
             <TextInput 
             style={styles.addItemInput}
             onChangeText={text => setTextValue(text)}
             value={textValue}
             />
         </View>
         <View>
             <TextInput 
                style={styles.description}
                onChangeText={text => setDescValue(text)}
                value={descValue}
                />
         </View>
         <View>
             <Button title="Add" style={styles.button} onPress={addNote}/>
         </View>
     </View>   
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    addItemInput:{
        width: "100%",
        height: 40,
        color: "blue",
        borderBottomColor:'black',
        borderWidth:2,
        borderRadius:5,
        textAlign:'center',

    },
    description:{
        width: "100%",
        backgroundColor: "gray",
        paddingBottom:60,
        borderColor:'black',
        borderRadius:5,
        borderWidth:2,
        color:'red',
        textAlign:'center',

    },
    button:{
        width: "100%",
        height:30,
        marginTop:10
    }
  });

  export default AddItemScreen;