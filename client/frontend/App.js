import React from "react";
import RootReducer from "./reducers/RootReducer";
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ShowPage from './components/ShowPage';

class App extends React.Component{
  render(){
    return (

      <Provider
        store={createStore(RootReducer,{},applyMiddleware(ReduxThunk))}>
        <Text>HelllllooooNOOO!</Text>
      </Provider>
    );
  }
}
export default App;
