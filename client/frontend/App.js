import React from "react";
import RootReducer from "./reducers/RootReducer";
import { View, Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import WelcomePage from "./components/WelcomePage";
import ActivityForm from "./components/ActivityForm";
import IndexPage from "./components/IndexPage";
import ShowPage from "./components/ShowPage";


class App extends React.Component{
  renderScene(route, navigator) {
     if(route.name === 'Welcome') {
       return <WelcomePage navigator={navigator} {...route.passProps}/>;
     }
     if(route.name === 'Activity') {
       return <ActivityForm navigator={navigator} {...route.passProps}/>;
     }
     if(route.name === 'Index') {
       return <IndexPage navigator={navigator} {...route.passProps}/>;
     }
     if(route.name === 'Show') {
       return <ShowPage navigator={navigator} {...route.passProps}/>;
     }
  }

  render(){
    return (
      <Provider
        store={createStore(RootReducer,{},applyMiddleware(ReduxThunk))}>
        <Navigator
             style={{ flex:1 }}
             initialRoute={{ name: 'Welcome' }}
             renderScene={ this.renderScene }
             configureScene={(route) => {
               if(route.name === 'Welcome') {
                return Navigator.SceneConfigs.SwipeFromLeft;
              }
               return Navigator.SceneConfigs.FloatFromBottom;
               }}
             />
      </Provider>
    );
  }
}
export default App;
