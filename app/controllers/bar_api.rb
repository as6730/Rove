# bars request
#index request
request = RestClient::Request.execute(
 method: :get,
 url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.78,-122.441&radius=1000&type=bar&key=AIzaSyC3uTdF5zs9rfbxm4NL6gk_TpSLrSlHhb8'
)

BARS = JSON.parse(request)["results"]

def top_twenty_bars
  i = 0
  hash = {}
  while i < 20
    name = BARS[i]["name"]
    place_id = BARS[i]["place_id"]
    hash[place_id] = name
    i += 1
  end
  hash
end

def get_first_random
  twenty_bars = top_twenty_bars.keys
  first_id = twenty_bars[rand(0...10)]
  request = RestClient::Request.execute(
     method: :get,
     url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=#{first_id}&key=AIzaSyA7ClHa3HZaq20j84ZF37vVjWFri62hAY4"
  )
  JSON.parse(request)["result"]
end

first_bar = {
  name: get_first_random["name"],
  address: get_first_random["formatted_address"],
  website: get_first_random["website"],
  coordinates: get_first_random["geometry"]["location"],
  phone_number: get_first_random["formatted_phone_number"],
  rating: get_first_random["rating"],
  hours_of_op: get_first_random["opening_hours"]["weekday_text"],
  price: get_first_random["price_level"]
}


def get_second_random
  twenty_bars = twenty_bars.keys
  second_id = twenty_bars[rand(10...20)]
  request = RestClient::Request.execute(
     method: :get,
     url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=#{second_id}&key=AIzaSyA7ClHa3HZaq20j84ZF37vVjWFri62hAY4"
  )
  JSON.parse(request)["result"]
end

second_bar = {
  name: get_second_random["name"],
  address: get_second_random["formatted_address"],
  website: get_second_random["website"],
  coordinates: get_second_random["geometry"]["location"]
}
