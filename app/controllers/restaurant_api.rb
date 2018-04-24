#restaurant request
#index request
request = RestClient::Request.execute(
  method: :get,
  url: @url
)
response = JSON.parse(request)
@name = response[“results”][0][“name“]
@place_id = response[“results”][0][“place_id“]
