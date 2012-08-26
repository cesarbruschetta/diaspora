class FindRedesController < ApplicationController
  
  def index
    #debugger
    t = Twitter
    
    t.configure do |config|
        config.consumer_key = 'ZERk8zPc6nBjoec8GZw'
        config.consumer_secret = 'z8Q3B9ANDJAsvajs1A1WDdQrGZCTlsl1XrAkNPpZaI'
        config.oauth_token = '277602874-9dmzZkMFkeEY94EsLVeqJ2IlsrcDFwy7fHivv9Ok'
        config.oauth_token_secret = 'z5UB9c60IeDtulN6bKRMVuiDWWOcNqGlIf0phzAcJnA'
    end
    
    #@t = Twitter
    #@x = Twitter.user_timeline("atallef")
    @m = t.home_timeline #.find_all
    
    
  end
  
  
end
