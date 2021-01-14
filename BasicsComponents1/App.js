import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import moreDetailsScreen from './android/app/src/screens/moreDetailsScreen';
import HomeScreen from './android/app/src/screens/HomeScreen'

const navigator = createStackNavigator({
    Home:HomeScreen,
    moreDetails:moreDetailsScreen,
},{
    initialRouteName: 'Home',
    defaultNavigationOptions:{
        title: 'App'
    }
})


export default createAppContainer(navigator);