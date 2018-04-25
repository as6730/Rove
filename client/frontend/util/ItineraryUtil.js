
export const fetchItinerary = (itinerary) => (
  $.ajax({
    method: "GET",
    url: "api/intineraries/getitinerary/",
    data: ({itinerary})
  })
);
