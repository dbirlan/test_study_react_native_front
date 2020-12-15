import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ComparisonScreen from './src/screens/ComparisonScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen,
    Favorites: FavoritesScreen,
    Comparison: ComparisonScreen,
  },
  {
    initialRouteName: 'Search',
    screen: FavoritesScreen,
    navigationOptions: {
      title: 'Favorites',
      headerLeft: null,
    },
  }
);

export default createAppContainer(navigator);
