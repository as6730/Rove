require 'rest-client'
require 'json'

class PlacesUtils

  ENDPOINT = "https://maps.googleapis.com/maps/api/place"

  def self.get_places(date, places_count, lat, lon, type, keyword, place_properties, radius = 2000, api_key = "AIzaSyC3uTdF5zs9rfbxm4NL6gk_TpSLrSlHhb8")
    if type === "restaurant"
      request = RestClient::Request.execute(
       method: :get,
       url: "#{ENDPOINT}/nearbysearch/json?location=#{lat},#{lon}&radius=#{radius}&type=#{type}&keyword=#{keyword}&rankby=prominence&key=#{api_key}"
      )
    else
      request = RestClient::Request.execute(
       method: :get,
       url: "#{ENDPOINT}/nearbysearch/json?location=#{lat},#{lon}&radius=#{radius}&type=#{type}&rankby=prominence&key=#{api_key}"
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
      places << PlacesUtils.get_place_from_id(date, type, keyword, id, place_properties, api_key)
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

  def self.get_place_from_id(date, type, keyword, place_id, properties, api_key)
    request = RestClient::Request.execute(
       method: :get,
       url: "#{ENDPOINT}/details/json?placeid=#{place_id}&key=#{api_key}"
    )
    result = JSON.parse(request)["result"]
    place = {}

    properties.each do |property|
      place[property] = result[property]
    end

    place["date_time"] = PlacesUtils.set_start_and_end_time(date, type, keyword)
    place
  end

  def self.set_start_and_end_time(date, type, keyword)
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
