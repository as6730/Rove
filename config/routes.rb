Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    get '/itineraries/getitinerary/', to: 'itineraries#get_itinerary'
  end
end
