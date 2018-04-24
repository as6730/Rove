require 'rest-client'
require 'json'

class PlacesUtils

  ENDPOINT = "https://maps.googleapis.com/maps/api/place"

  def self.get_places(places_count, lat, lon, type, place_properties, radius = 1000, api_key = "AIzaSyC3uTdF5zs9rfbxm4NL6gk_TpSLrSlHhb8")
    request = RestClient::Request.execute(
     method: :get,
     url: "#{ENDPOINT}/nearbysearch/json?location=#{lat},#{lon}&radius=#{radius}&type=#{type}&rankby=prominence&key=#{api_key}"
    )

    results = JSON.parse(request)["results"]
    places_ids = PlacesUtils.get_top_places(20, results)

    if places_ids.length == 0
      return []
    end

    random_ids = PlacesUtils.get_random_keys(places_ids, places_count)

    places = []
    random_ids.each do |id|
      places << PlacesUtils.get_place_from_id(id, place_properties, api_key)
    end

    places
  end

  def self.get_top_places(place_count, places)
    i = 0
    ids  = []

    while i < places.length && i < place_count
      ids << places[i]["place_id"]
      i += 1
    end

    ids
  end

  def self.get_random_keys(place_ids, amt)
    random_ids = []

    while random_ids.length < amt
      random_idx = rand(0...place_ids.length)
      unless random_ids.include?(place_ids[random_idx])
        random_ids << place_ids[random_idx]
      end
    end

    random_ids
  end

  def self.get_place_from_id(place_id, properties, api_key)
    request = RestClient::Request.execute(
       method: :get,
       url: "#{ENDPOINT}/details/json?placeid=#{place_id}&key=#{api_key}"
    )
    result = JSON.parse(request)["result"]
    place = {}

    properties.each do |property|
      place[property] = result[property]
    end

    place
  end
end
