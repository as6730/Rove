import { combineReducers } from 'redux';
import ItineraryReducer from './ItineraryReducer';
import ActivityReducer from './ActivityReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
  itinerary: ItineraryReducer,
  loading: LoadingReducer
});
