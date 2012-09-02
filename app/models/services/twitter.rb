require 'uri'
require 'chronic'

class Services::Twitter < Service
  MAX_CHARACTERS = 140
  SHORTENED_URL_LENGTH = 21

  def provider
    "twitter"
  end

  def post(post, url='')
    Rails.logger.debug("event=post_to_service type=twitter sender_id=#{self.user_id}")
    message = public_message(post, url)

    configure_twitter

    Twitter.update(message)
  end


  def public_message(post, url)
    buffer_amt = 0
    URI.extract( post.text(:plain_text => true), ['http','https'] ) do |a_url|
      buffer_amt += (a_url.length - SHORTENED_URL_LENGTH)
    end

    super(post, MAX_CHARACTERS + buffer_amt,  url)
  end

  def profile_photo_url
    configure_twitter

    Twitter.profile_image(nickname, :size => "original")
  end

  def getTimeLine
    configure_twitter
    #debugger
    hora = Chronic.parse('15 minutes ago')
    
    result = []
    for item in Twitter.user_timeline
      posts = {}
      posts['service'] = 'twitter'
      posts['uid_post'] = item['id'] 
      posts['text'] = item['text']
      posts['data_creation'] = item['created_at']
      
      result.append(posts)
    end
    
    return result  #Twitter.user_timeline #.find(:created_at=>hora).each
  end

  private
  def configure_twitter
    twitter_key = SERVICES['twitter']['consumer_key']
    twitter_consumer_secret = SERVICES['twitter']['consumer_secret']

    if twitter_key.blank? || twitter_consumer_secret.blank?
      Rails.logger.info "you have a blank twitter key or secret.... you should look into that"
    end

    Twitter.configure do |config|
      config.consumer_key = twitter_key
      config.consumer_secret = twitter_consumer_secret
      config.oauth_token = self.access_token
      config.oauth_token_secret = self.access_secret
    end
  end
end
