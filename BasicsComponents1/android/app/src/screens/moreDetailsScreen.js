import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Card from '../components/card';


const moreDetailsScreen = props =>{
    return(
    <Card style={styles.item}>
    <View style={styles.summary}>
        <Text style={styles.username}></Text>
        <Text style={styles.aboutMe}></Text>  
    </View>
    </Card>
    );
}

const styles = StyleSheet.create({
    item: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
      },
      summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
      },
      aboutMe: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
      },
      username: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: '#888'
      },

})

export default moreDetailsScreen;
