# README

[Demo Site](https://briemcnally.github.io/ROVE_Landing_Page/)

## Weekender

### Background and Overview
Have you ever spent hours just trying to plan your weekend? Everyone has. That’s why ROVE is here to help. ROVE is an iOS mobile application designed to eliminate distraction and give users a visually beautiful and intuitive itinerary that can easily be added to their calendar.

### Technologies and Technical Challenges
  * Backend: Ruby on Rails
  * Frontend: [React Native](https://github.com/facebook/react-native)
  * UX

The biggest technical challenges:
1. Dynamically retrieving and parsing the information from Google API’s.
2. Learning React Native.
3. Connecting the given itinerary to the users OS calendar to save itineraries

### Functionality and MVPs
  * Radius set for City Limits
  * Demo website showcasing app features
  * User Profile
  * Itinerary (that can be exported to Google Calendar)

### Wireframes
Welcome Page:
+ Users can add a destination and date that they wants activities generated for their itinerary. The destination is converted to latitude and longitude so we can hit the Google Places API. The user will see an error if they give an invalid city name.
![alt-text](https://i.imgur.com/5FYNVDo.png)

Options/Activity Form Page
+ Users can select which type of activity they want to be generated for their itinerary including food, nature, culture, and nightlife.
![alt-text](https://i.imgur.com/BxeR9mk.png)

Index Page
+ The results from the Google Places API generates an itinerary for the user based off their activity selections. If all options are selected the itinerary is as follows: breakfast, culture, lunch, park, dinner, nightlife.  For each category users receive two options which are ranked by prominence on Google Places API.
![alt-text](https://i.imgur.com/T3kE3o1.png)

Show Page
+ On press each item expands to the full page view so that users can see ratings, contact information, address, link to the website, an interactive google map, and a button to add the event to the calendar. The button will check to see whether the ROVE has access to the users calendar. If so the activity will be added to the OS calendar.
![alt-text](https://i.imgur.com/oag6dnk.png)

### Technology Details
This mobile app iOS application will be rooted in React Native, which will allow us to build a rich and interactive UI. We will utilize the Google API to pull information and organize their itinerary.

### Challenges and Solutions
One of our many challenges while learning React Native was figuring out how to handle guesture responses. One of the biggest challenges of which came up in  our form submission. We wanted to create a form that would be able to be submitted upon a swipe. Rose ended up create a reusable component that could be wrapped around any component to give it a different gesture response upon swiping left ot right.
```javascript
export class SwipeableCard extends React.Component {
  translateX = new Animated.Value(0);
  // panResponders are the way React Native handles prolonged gestures
  _panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, {dx: this.translateX}]),
    // Here is the logic for whether some one has swiped right or "back".
    //This is done by measuring the distance of the swipe and the
    //velocity of the swipe gesture in the horizontal direction
    //(by measuring against the screen width).
    onPanResponderRelease: (e, {vx, dx}) => {
      const screenWidth = Dimensions.get("window").width;
      if (vx >= 0.003 && Math.abs(dx) >= 0.5 * screenWidth) {
        this.props.swipeBack();
      } else if (Math.abs(dx) >= 0.5 * screenWidth) {
        this.props.onSwipe();
      }
    }
   });
  }
  ```


### Group Members and Work Breakdown
Our group consist of four members: Alexandra Savramis, Brie McNally, Rose Koron, and Todd Bergman.

+ Alexandra’s responsibilities will be:
  + Co-lead for event functionality (back-end focus in Rails).
  + Owning the interactive features of the calendar and its integration with the backend.
  + Timeline manager.

+ Brie’s responsibilities will be:
  + Co-lead for event functionality (back-end focus in Rails).
  + Finalizing the repo’s README, complete with screenshots and code snippets.
  + In charge of user experience and design.

+ Todd’s responsibilities will be:
  + Co-lead for calendar functionality (front-end focus in RN).
  + Owning the interactive features of the calendar and its integration with the backend.
  + Working with Brie to finalize the repo’s ReadMe.

+ Rose’s responsibilities will be:
  + Co-lead for calendar functionality (front-end focus in RN).
  + Researching technologies to incorporate into the project as appropriate.
  + Researching and integrating OAuth with RN.

### Future Plans
+ We plan to create a database for users so when logged in users can save itineraries and favorite activities and view a user profile.
+ We also plan to make this mobile application accessible
