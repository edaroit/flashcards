import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { darkBlue, white } from '../../utils/theme'
import Home from '../Home'

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <MaterialCommunityIcons
          name="cards-outline"
          size={30}
          color={darkBlue}
        />
      ),
    },
  },
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: darkBlue,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
}

const Tabs = createAppContainer(
  createBottomTabNavigator(RouteConfigs, TabNavigatorConfig),
)

const MainNavigator = {
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
}

export default createAppContainer(createStackNavigator(MainNavigator))
