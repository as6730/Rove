export const fetchItinerary = (itinerary) => {
  let url = `https://roveapp.herokuapp.com/api/itineraries/getitinerary?lat=${itinerary.lat}&lon=${itinerary.lon}&date=${itinerary.date}&bars=${itinerary.bars}&restaurants=${itinerary.restaurants}&nature=${itinerary.nature}&arts=${itinerary.arts}`;
  console.log(url)
  return fetch(url, {
            method: 'GET',
          }).then(response => {
            return response.json();
          });
};
