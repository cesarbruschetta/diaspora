class FindRedesController < ApplicationController
  
  def index
    users = User.all
    #debugger
    
    for user in users
        
      for service in user.services
        posts = service.getTimeLine
        for post in posts
          post['user_id'] = user.id
          if PostService.find(:all, :conditions => {'uid_post'=>post['uid_post']}) == []
            db = PostService.new(post)
            db.save()
          end   
        end
      end
    end
 
  end
  
end