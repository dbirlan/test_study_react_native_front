import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen,
    Favorites: FavoritesScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Pokedex',
    },
  }
);

export default createAppContainer(navigator);
