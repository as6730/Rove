# arts/culture request
#index request
request = RestClient::Request.execute(
 method: :get,
 url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.773972,-122.431297&radius=1500&type=park&rankby=prominence&keywords=breakfast&key=AIzaSyA7ClHa3HZaq20j84ZF37vVjWFri62hAY4'
)

PARKS = JSON.parse(request)["results"]

def get_top_ten
  i = 0
  hash = {}
  while i < 10
    name = PARKS[i]["name"]
    place_id = PARKS[i]["place_id"]
    hash[place_id] = name
    i += 1
  end
  hash
end

def get_first_random
  ten = getTopTen.keys
  first_id = ten[rand(0...5)]
  request = RestClient::Request.execute(
     method: :get,
     url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=#{first_id}&key=AIzaSyA7ClHa3HZaq20j84ZF37vVjWFri62hAY4"
  )
  JSON.parse(request)["result"]
end

first_park = {
  name: get_first_random["name"],
  address: get_first_random["formatted_address"],
  website: get_first_random["website"],
  coordinates: get_first_random["geometry"]["location"]
}


def get_second_random
  ten = getTopTen.keys
  second_id = ten[rand(5...10)]
  request = RestClient::Request.execute(
     method: :get,
     url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=#{second_id}&key=AIzaSyA7ClHa3HZaq20j84ZF37vVjWFri62hAY4"
  )
  JSON.parse(request)["result"]
end

second_park = {
  name: get_second_random["name"],
  address: get_second_random["formatted_address"],
  website: get_second_random["website"],
  coordinates: get_second_random["geometry"]["location"]
}
