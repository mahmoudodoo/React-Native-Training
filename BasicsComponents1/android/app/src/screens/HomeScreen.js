import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import axios from 'axios';
import ListItem from '../components/ListItem'




const HomeScreen = ({navigation}) => {

  const postsUrl = "http://10.0.2.2:5000/api/users/json"

  const [data,setData] = useState([]);

  useEffect(() => {
    console.log(postsUrl)
    axios
    .get(postsUrl,{headers: {
      'Content-Type': 'application/json',Accept: "application/json"} })
    .then(function (response) {
      // handle success
      console.log(JSON.stringify(response.data));
      setData(response.data['items'])
    })
    .catch(function (error) {
      // handle error
      console.log(error.message);
    })
    .finally(function () {
      // always executed
      console.log('Finally called');
    });
    }, []);

 

   return (
     <>
    <SafeAreaView style={styles.container}>
      
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={item => (
            <ListItem 
                id={item.item.id}
                username={item.item.username}
                image={item.item._links['avatar']}
                navPress= {navigation.navigate("moreDetails")}
            />)}
        />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default HomeScreen;