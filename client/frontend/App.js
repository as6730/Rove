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
       return <WelcomePage navigator={navigator} />;
     }
     if(route.name === 'Activity') {
       return <ActivityForm navigator={navigator} />;
     }
     if(route.name === 'Index') {
       return <IndexPage navigator={navigator} />;
     }
     if(route.name === 'Show') {
       return <ShowPage navigator={navigator} />;
     }
  }

  render(){
    return (
      <Provider
        store={createStore(RootReducer,{},applyMiddleware(ReduxThunk))}>
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'Show' }}
          renderScene={ this.renderScene } />
      </Provider>
    );
  }
}
export default App;
