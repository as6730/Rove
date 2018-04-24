#nature request
#index request
request = RestClient::Request.execute(
 method: :get,
 url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.773972,-122.431297&radius=1500&type=park&rankby=prominence&key=AIzaSyA7ClHa3HZaq20j84ZF37vVjWFri62hAY4'
)

response = JSON.parse(request)
@name = response[“results”][0][“name“]
@place_id = response[“results”][0][“place_id“]
