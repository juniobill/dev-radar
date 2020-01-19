import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: '#DevRadar'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7d40e7'
      },
      headerTitleStyle: {
        color: '#ffffff'
      },
      headerBackTitleVisible: false
    }
  }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
