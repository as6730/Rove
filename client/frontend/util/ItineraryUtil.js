
export const fetchItinerary = () => (
  $.ajax({
    method: "GET",
    url: "/api/intinerary",
  })
);
