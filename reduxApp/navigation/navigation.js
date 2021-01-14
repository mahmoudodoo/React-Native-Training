import React from 'react'
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListScreen from '../screens/ListScreen'
import AddItemScreen from '../screens/AddItemScreen'
import { Button ,Text} from 'react-native';


const Nav = createStackNavigator({
    List: ListScreen,
    AddItem:AddItemScreen,
},
)

export default createAppContainer(Nav)