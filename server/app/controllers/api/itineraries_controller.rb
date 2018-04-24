require_relative './../places_api'

class Api::ItinerariesController < ApplicationController
  # def index
  #   @itineraries = Itinerary.all
  # end

  def create
    @itinerary = Itinerary.new(JSON.parse(request.body.read))

    if @itinerary.save
      render :show
    else
      render json: @itinerary.errors.full_messages, status: 422
    end
  end

  def update
    @itinerary = Itinerary.find(params[:id])

    if @itinerary.update_attributes(JSON.parse(request.body.read))
      render json: @itinerary
    else
      render json: @itinerary.errors.full_messages, status: 404
    end
  end

  def edit
    render :show
  end

  def show
    @itinerary = Itinerary.find(params[:id])
  end

  def get_itinerary
    params = itinerary_params
    itinerary = {}

    # get restaurants
    if params[:restaurants].downcase == "true"
      itinerary["restaurants"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], "restaurant", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "website", "opening_hours", "price_level", "geometry"])
    end

    # get bars
    if params[:bars].downcase == "true"
      itinerary["bars"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], "bar", ["id", "name", "formatted_phone_number", "formatted_address", "rating", "price_level", "website", "opening_hours", "geometry"])
    end

    # get nature
    if params[:nature].downcase == "true"
      itinerary["nature"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], "park", ["id", "name", "formatted_address", "website", "geometry"])
    end

    # get arts
    # TODO: get radius from request
    if params[:arts].downcase == "true"
      itinerary["arts"] = PlacesUtils.get_places(params[:amt].to_i, params[:lat], params[:lon], "museum", ["id", "name", "formatted_phone_number", "formatted_address", "website", "geometry", "opening_hours", "website"], 10000)
    end

    render json: itinerary
  end

  def destroy
    itinerary = Itinerary.find(params[:id])
    itinerary.destory!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def itinerary_params
    defaults = { amt: "2", radius: "1000" }
    params.permit(:lat, :lon, :bars, :restaurants, :nature, :arts, :amt, :radius).reverse_merge(defaults)
  end
end
