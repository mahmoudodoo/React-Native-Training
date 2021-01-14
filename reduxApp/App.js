import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './navigation/navigation'
import {createStore,combineReducers} from 'redux';
import { Provider } from 'react-redux';
import notesReducer from './store/reducer'


export default function App() {

const rootReducer = combineReducers({
  notes:notesReducer,
});

const store= createStore(rootReducer);

  return (
    <Provider store={store}>
    <Nav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
