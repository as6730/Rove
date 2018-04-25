import { Navigation } from 'react-native-navigation';

import ActivityForm from '../components/ActivityForm';
import WelcomePage from '../components/WelcomePage';
import ShowPage from '../components/ShowPage';

export function registerScreens(){
  Navigation.registerComponent('Weekender.ActivityForm', () => ActivityForm);
  Navigation.registerComponent('Weekender.WelcomePage', () => WelcomePage);
  Navigation.registerComponent('Weekender.ShowPage', () => ShowPage);
}
