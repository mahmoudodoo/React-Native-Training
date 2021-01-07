/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import axios from 'axios';
import ListItem from './components/ListItem'

const App: () => React$Node = () => {

  const postsUrl = "https://jsonplaceholder.typicode.com/todos/"
  const [data,setData] = useState([]);

  useEffect(() => {
    axios
    .get(postsUrl)
    .then(function (response) {
      // handle success
      alert(JSON.stringify(response.data));
      setData(response.data)
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    })
    .finally(function () {
      // always executed
      alert('Finally called');
    });
    }, []);


   return (
    <SafeAreaView style={styles.container}>
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={item => (
            <ListItem 
                title={item.item.title}
                id={item.item.id}
            />)}
        />
    </SafeAreaView>
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


export default App;
