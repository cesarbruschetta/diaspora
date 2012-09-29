class FindRedesController < ApplicationController
  
  def index
    users = User.all
    
    
    for user in users
        
      for service in user.services
        posts = service.getTimeLine
        for post in posts
          post['user_id'] = user.id
          if PostService.find(:all, :conditions => {'uid_post'=>post['uid_post']}) == []
            #debugger
            
            db = PostService.new(post)
            db.save()
            
            mensage = {}
            mensage['aspect_ids'] = ["all_aspects"]
            mensage['public'] = false
            mensage['text'] = post['service'] + ' | '+ post['text']
            
            params['status_message'] = mensage
              
            @status_message = user.build_post(:status_message, params[:status_message])
            aspects = user.aspects_from_ids(user.aspect_ids)
            user.add_to_streams(@status_message, aspects)
            
            @status_message.interacted_at = post['data_creation']
            @status_message.created_at = post['data_creation']
            @status_message.updated_at = post['data_creation']
            @status_message.save()
            
          end   
        end
      end
    end
  
  end
end