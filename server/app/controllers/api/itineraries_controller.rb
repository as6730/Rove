require_relative './../places_api'

class Api::ItinerariesController < ApplicationController
  def get_itinerary
    params = itinerary_params
    itinerary = []

    # get restaurants
    restaurants_hash = {}
    if params[:restaurants].downcase == "true"
      restaurants_hash["breakfast"] = PlacesUtils.get_places(date, params[:amt].to_i, params[:lat], params[:lon], "restaurant", "breakfast", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "website", "opening_hours", "price_level", "geometry"])
      restaurants_hash["lunch"] = PlacesUtils.get_places(date, params[:amt].to_i, params[:lat], params[:lon], "restaurant", "lunch", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "website", "opening_hours", "price_level", "geometry"])
      restaurants_hash["dinner"] = PlacesUtils.get_places(date, params[:amt].to_i, params[:lat], params[:lon], "restaurant", "dinner", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "website", "opening_hours", "price_level", "geometry"])
    end
    itinerary << restaurants_hash

    # get bars
    bars_hash = {}
    if params[:bars].downcase == "true"
      bars["bars"] = PlacesUtils.get_places(date, params[:amt].to_i, params[:lat], params[:lon], "bar", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "price_level", "website", "opening_hours", "geometry"])
    end
    itinerary << bars_hash

    # get nature
    nature_hash = {}
    if params[:nature].downcase == "true"
      nature_hash["nature"] = PlacesUtils.get_places(date, params[:amt].to_i, params[:lat], params[:lon], "park", ["id", "name", "formatted_address", "website", "geometry"])
    end
    itinerary << nature_hash

    # get arts
    # TODO: get radius from request
    arts_hash = {}
    if params[:arts].downcase == "true"
      arts_hash["arts"] = PlacesUtils.get_places(date, params[:amt].to_i, params[:lat], params[:lon], "museum", ["id", "name", "formatted_phone_number", "formatted_address", "website", "geometry", "opening_hours", "website"], 10000)
    end
    itinerary << arts_hash

    render json: itinerary
  end

  private

  def itinerary_params
    defaults = { amt: "2", radius: "2000" }
    params.permit(:lat, :lon, :bars, :restaurants, :nature, :arts, :amt, :radius, :date).reverse_merge(defaults)
  end
end
