import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductList from '../../BT3/ProductList';


const MyTabs = createBottomTabNavigator({
    screens: {
        Home: ProductList,
        // Profile: ProfileScreen,
    },
});