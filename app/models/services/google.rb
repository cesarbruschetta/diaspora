require 'uri'

class Services::GooglePlus < Service
  MAX_CHARACTERS = 140
  SHORTENED_URL_LENGTH = 21

  def provider
    "google_plus"
  end

  def getTimeLine
    person = configure_googleplus
    activity = person.list_activities
    
    result = []
    for item in activity
      obj = item.attributes
      posts = {}
      posts['service'] = 'google_plus'
      posts['uid_post'] = obj['id']
      
      text = obj['title']
      if obj['object']['attachments']
        for i in item.attributes['object']['attachments']
          text += ' | ' + i['url']
        end 
      end
      posts['text'] = text 
      posts['data_creation'] = obj['updated']
      
      result.append(posts)
    end
    
    return result
  end
  
  private
  def configure_googleplus
    google_token = self.access_token
    GooglePlus.access_token = google_token
    user_id = self.uid
    
    person = GooglePlus::Person.get(user_id)
    return person
   end
end
