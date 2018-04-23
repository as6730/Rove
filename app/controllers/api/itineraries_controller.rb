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
    render json: "{\"status\" : \"success\"}"
  end

  def destroy
    itinerary = Itinerary.find(params[:id])
    itinerary.destory!
    render json: "{\"status\" : \"success\"}"
  end

  # private
  #
  # def itinerary_params
  #   params.require(:itinerary)
  # end
end
