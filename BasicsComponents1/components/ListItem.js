import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const ListItem = props => {
 
  return (
      <View>
            <View>
              <Text style={styles.title}>{props.id} : {props.title} </Text>
            </View>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily:'Roboto',
    fontSize: 18,
    marginVertical: 2,
    padding:50,
    borderRadius:10,
    borderBottomColor:'black',
    borderBottomWidth:5,
    backgroundColor:'#ccc',
  }
});

export default ListItem;