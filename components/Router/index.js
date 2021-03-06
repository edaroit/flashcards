import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  HeaderBackButton,
} from 'react-navigation'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { darkBlue, white } from '../../utils/theme'
import Home from '../Home'
import DeckDetails from '../DeckDetails'
import NewDeck from '../NewDeck'
import NewQuestion from '../NewQuestion'
import Quiz from '../Quiz'

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: () => (
        <MaterialCommunityIcons
          name="cards-outline"
          size={30}
          color={darkBlue}
        />
      ),
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: () => <Feather name="plus" size={30} color={darkBlue} />,
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
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Deck Details',
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate('Home')}
          backTitleVisible
        />
      ),
    }),
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'Create Deck',
    },
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'Create new Question',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
}

export default createAppContainer(createStackNavigator(MainNavigator))
