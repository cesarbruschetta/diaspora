require 'uri'

class Services::Google < Service
  MAX_CHARACTERS = 140
  SHORTENED_URL_LENGTH = 21

  def provider
    "google"
  end

  
end
