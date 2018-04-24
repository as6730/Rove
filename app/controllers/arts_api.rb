# arts/culture request
#index request
request = RestClient::Request.execute(
 method: :get,
 url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.773972,-122.431297&radius=1500&type=park&rankby=prominence&keywords=breakfast&key=AIzaSyA7ClHa3HZaq20j84ZF37vVjWFri62hAY4'
)

MUSEUMS = JSON.parse(request)["results"]

def getTopTen(response)
  i = 0
  hash = {}
  while i < 10
    name = response["results"][i]["name"]
    place_id = response["results"][i]["place_id"]
    hash[place_id] = name
    i += 1
  end
  return hash
end

def getFirstRandom(response)
  ten = getTopTen(response).keys
  first_id = ten[rand(0...5)]
  second_id = ten[rand(5...10)]
  return [first_id, second_id]
end
