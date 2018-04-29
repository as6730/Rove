require_relative './../places_api'

class Api::ItinerariesController < ApplicationController
  def get_itinerary
    params = itinerary_params
    itinerary = []

    # get restaurants
    restaurants_hash = {}
    if params[:restaurants].downcase == "true"
      restaurants_hash["breakfast"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], params[:date], "restaurant", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "website", "opening_hours", "price_level", "geometry"], "brunch", 1000)
      restaurants_hash["lunch"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], params[:date], "restaurant", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "website", "opening_hours", "price_level", "geometry"], "lunch", 1000)
      restaurants_hash["dinner"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], params[:date], "restaurant", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "website", "opening_hours", "price_level", "geometry"], "dinner", 1000)
    end
    itinerary << restaurants_hash

    # get bars
    bars_hash = {}
    if params[:bars].downcase == "true"
      bars_hash["bars"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], params[:date], "bar", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "price_level", "website", "opening_hours", "geometry"], 1000)
    end
    itinerary << bars_hash

    # get nature
    nature_hash = {}
    if params[:nature].downcase == "true"
      nature_hash["nature"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], params[:date], "park", ["id", "name", "formatted_address", "website", "geometry"], 1000)
    end
    itinerary << nature_hash

    # get arts
    # TODO: get radius from request
    arts_hash = {}
    if params[:arts].downcase == "true"
      arts_hash["arts"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], params[:date], "museum", ["id", "name", "formatted_phone_number", "formatted_address", "website", "geometry", "opening_hours", "website"], 10000)
    end
    itinerary << arts_hash

    render json: itinerary
  end

  private

  def itinerary_params
    defaults = { amt: "2", radius: "5500" }
    params.permit(:lat, :lon, :date, :bars, :restaurants, :nature, :arts, :amt, :radius).reverse_merge(defaults)
  end
end
