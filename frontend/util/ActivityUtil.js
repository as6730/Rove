
export const fetchActivity = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/activity/${id}`,
  })
);
