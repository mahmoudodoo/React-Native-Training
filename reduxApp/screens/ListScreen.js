import React, {useState} from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import {Button, List } from 'react-native-paper'
import * as noteActions from '../store/actions'



const ListScreen = props =>{
    const dispatch=useDispatch()
    const notes = useSelector(state => state.notes)
    

    // const data = [
    //     {id:(((1+Math.random())*0x10000)|0).toString(16).substring(1),text:"Hello1"},
    //     {id:(((1+Math.random())*0x10000)|0).toString(16).substring(1),text:"Hello2"},
    //     {id:(((1+Math.random())*0x10000)|0).toString(16).substring(1),text:"Hello3"},
    //     {id:(((1+Math.random())*0x10000)|0).toString(16).substring(1),text:"Hello4"},
    //     {id:(((1+Math.random())*0x10000)|0).toString(16).substring(1),text:"Hello5"},
    //     {id:(((1+Math.random())*0x10000)|0).toString(16).substring(1),text:"Hello6"},
    // ];


   

    const renderItem = item => {
        return(
        <TouchableOpacity style={styles.item} onPress = { () => dispatch(noteActions.deletenote(item.item.id))}>
            <View>
                <Text style={styles.text}>
                    {item.item.note}
                </Text>
            </View>
        </TouchableOpacity>
        )
    };

    return(
    <View style={styles.container}>
        <FlatList 
            data={notes}
            keyExtractor={item => item.id}
            renderItem={renderItem}

        />
    </View>

    )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    text: {
        fontSize:12,
        color:'black',
        textAlign:'center',
    },
    item:{
        width:"100%",
        height:30,
        shadowColor:"black",
        backgroundColor:'gray',
        shadowRadius:10,
        borderColor:'black',
        borderRadius:10,
        justifyContent:'center',
        textAlign:'center',
        marginBottom:20,
        paddingBottom:50,        
    },
    flat:{
        backgroundColor:'red'
    }
});

ListScreen.navigationOptions = navData =>{
    return{ 
        headerRight: () =>
        <TouchableOpacity style={{backgroundColor:'gray',borderRadius:10,borderWidth:2,borderColor:'black',width:50,height:50,alignItems:'center',marginBottom:5,marginRight:5}} onPress={() => navData.navigation.navigate('AddItem')}>
            <Text style={{fontSize:40}}>+</Text>
        </TouchableOpacity>
    
    }
}

export default ListScreen;