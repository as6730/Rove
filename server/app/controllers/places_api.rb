require 'rest-client'
require 'json'

class PlacesUtils

  ENDPOINT = "https://maps.googleapis.com/maps/api/place"
  API_KEY = "AIzaSyBY_oLHUmf8-C9b7hkRtYC34ThjuNyliDw"
  SECOND_ROSE_KEY = "AIzaSyDZ25jrrjL_b5-sCsc2gRK9zDkUd-R6OAo"
  ROSE_API_KEY = "AIzaSyBY_oLHUmf8-C9b7hkRtYC34ThjuNyliDw"
  BRIE_API_KEY = "AIzaSyCEbuWklDLV0973ygPglKadB6sGnY4gFC4"

  def self.get_places(places_count, lat, lon, type, place_properties, keyword = "", date = "2018", radius = 1000)
    if type === "restaurant"
      request = RestClient::Request.execute(
       method: :get,
       url: "#{ENDPOINT}/nearbysearch/json?location=#{lat},#{lon}&radius=#{radius}&keyword=#{keyword}&type=#{type}&rankby=prominence&key=#{API_KEY}"
      )
    else
      request = RestClient::Request.execute(
       method: :get,
       url: "#{ENDPOINT}/nearbysearch/json?location=#{lat},#{lon}&radius=#{radius}&type=#{type}&rankby=prominence&key=#{API_KEY}"
      )
    end

    results = JSON.parse(request)["results"]
    places_ids = PlacesUtils.get_top_places(20, results)

    if places_ids.length == 0
      return []
    end

    random_ids = PlacesUtils.get_random_keys(places_ids, places_count)
    places = []
    random_ids.each do |id|
      places << PlacesUtils.get_place_from_id(id, place_properties, type, date, keyword)
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

  def self.get_place_from_id(place_id, properties, type, date, keyword)
    request = RestClient::Request.execute(
       method: :get,
       url: "#{ENDPOINT}/details/json?placeid=#{place_id}&key=#{API_KEY}"
    )
    result = JSON.parse(request)["result"]
    place = {}

    if result["photos"] != nil && !result["photos"][0].empty?
      photos_obj = result["photos"][0]
      photo_result = PlacesUtils.get_photo(photos_obj)
      place["photo_url"] = photo_result
    end

    properties.each do |property|
      if property === "opening_hours"
        if (result["opening_hours"] == nil)
          place[property] = ["All Day"]
        else
          place[property] = result[property]["weekday_text"]
        end
      elsif property === "geometry"
        place["location"] = result[property]["location"]
      else
        place[property] = result[property]
      end
    end

    date_time = PlacesUtils.set_start_and_end_time(type, date, keyword)
    place["date_time"] = date_time
    place
  end

  def self.get_photo(result_photos)
    photo_reference = result_photos["photo_reference"]
    max_width = result_photos["width"]
    max_height= result_photos["height"]
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=#{max_width}&maxheight=#{max_height}&photoreference=#{photo_reference}&key=#{API_KEY}"
  end

  def self.set_start_and_end_time(type, date, keyword)
    time = {}

    if type === "restaurant"
      if keyword === "breakfast"
        time["start"] = "08:00:00"
        time["end"] = "09:00:00"
      elsif keyword === "lunch"
        time["start"] = "12:30:00"
        time["end"] = "13:30:00"
      elsif keyword === "dinner"
        time["start"] = "19:00:00"
        time["end"] = "20:30:00"
      end
    elsif type === "museum"
      time["start"] = "9:30:00"
      time["end"] = "12:00:00"
    elsif type === "bars"
      time["start"] = "21:00:00"
      time["end"] = "00:00:00"
    elsif type === "park"
      time["start"] = "14:30:00"
      time["end"] = "16:30:00"
    end

    time
  end
end
