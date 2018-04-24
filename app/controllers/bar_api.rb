# bars request
#index request 
request = RestClient::Request.execute(
  method: :get,
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.78,-122.441&radius=1000&type=bar&key=AIzaSyC3uTdF5zs9rfbxm4NL6gk_TpSLrSlHhb8'
)

response = JSON.parse(request)
@name = response[“results”][0][“name“]
@place_id = response[“results”][0][“place_id“]
