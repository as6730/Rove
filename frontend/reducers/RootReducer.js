import { combineReducers } from 'redux';
import ItineraryReducer from './ItineraryReducer';
import ActivityReducer from './ActivityReducer';

export default combineReducers({
  itinerary: ItineraryReducer,
  activity: ActivityReducer
});
