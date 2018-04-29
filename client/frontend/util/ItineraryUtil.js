export const fetchItinerary = (itinerary) => {
  let url = `http://localhost:3000/api/itineraries/getitinerary?lat=${itinerary.lat}&lon=${itinerary.lon}&date=${itinerary.date}&bars=${itinerary.bars}&restaurants=${itinerary.restaurants}&nature=${itinerary.nature}&arts=${itinerary.arts}`;
  return fetch(url, {
            method: 'GET',
          }).then(response => {
            return response.json();
          });
};
