factory = {
  id : {
    current : 0,
    next : function(){
      return factory.id.current += 1
    }
  },

  guid : function(){
    return 'omGUID' + this.id.next()
  },

  like : function(overrides){
    var defaultAttrs = {
      "created_at" : "2012-01-04T00:55:30Z",
      "author" : this.author(),
      "guid" : this.guid(),
      "id" : this.id.next()
    }

    return _.extend(defaultAttrs, overrides)
  },

  comment : function(overrides) {
    var defaultAttrs = {
      "created_at" : "2012-01-04T00:55:30Z",
      "author" : this.author(),
      "guid" : this.guid(),
      "id" : this.id.next(),
      "text" : "This is a comment!"
    }
    
    return new app.models.Comment(_.extend(defaultAttrs, overrides))
  },

  user : function(overrides) {
    return new app.models.User(factory.userAttrs(overrides))
  },

  userAttrs : function(overrides){
    var id = this.id.next()
    var defaultAttrs = {
      "name":"Awesome User" + id,
      "id": id,
      "diaspora_id": "bob@bob.com",
      "avatar":{
        "large":"http://www.passim.com.br/images/user/uma.jpg",
        "medium":"http://www.passim.com.br/images/user/uma.jpg",
        "small":"http://www.passim.com.br/images/user/uma.jpg"}
    }

    return _.extend(defaultAttrs, overrides)
  },

  postAttrs : function(){
    return  {
      "provider_display_name" : null,
      "created_at" : "2012-01-03T19:53:13Z",
      "interacted_at" : '2012-01-03T19:53:13Z',
      "public" : false,
      "guid" : this.guid(),
      "image_url" : null,
      "o_embed_cache" : null,
      "photos" : [],
      "text" : "jasmine is bomb",
      "id" : this.id.next(),
      "object_url" : null,
      "root" : null,
      "post_type" : "StatusMessage",
      "interactions" : {
        "reshares_count" : 0,
        "likes_count" : 0,
        "comments_count" : 0,
        "comments" : [],
        "likes" : [],
        "reshares" : []
      }
    }
  },

  profile : function(overrides) {
    var id = overrides && overrides.id || factory.id.next()
    var defaults = {
      "bio": "I am a cat lover and I love to run",
      "birthday": "2012-04-17",
      "created_at": "2012-04-17T23:48:35Z",
      "diaspora_handle": "bob@www.passim.com.br",
      "first_name": "Bob",
      "full_name": "bob grimm",
      "gender": "robot",
      "id": id,
      "image_url": "http:\/\/www.passim.com.br\/assets\/user\/wolf.jpg",
      "image_url_medium": "http:\/\/www.passim.com.br\/assets\/user\/wolf.jpg",
      "image_url_small": "http:\/\/www.passim.com.br\/assets\/user\/wolf.jpg",
      "last_name": "Grimm",
      "location": "Earth",
      "nsfw": false,
      "person_id": "person" + id,
      "searchable": true,
      "updated_at": "2012-04-17T23:48:36Z"
    }

    return new app.models.Profile(_.extend(defaults, overrides))
  },

  photoAttrs : function(overrides){
    var id = this.id.next();
    return _.extend({
      author: factory.userAttrs(),
      created_at: "2012-03-27T20:11:52Z",
      guid: "8b0db16a4c4307b2" + id,
      id: id,
      sizes: {
          large: "http://www.passim.com.br/uploads/images/scaled_full_d85410bd19db1016894c.jpg",
          medium: "http://www.passim.com.br/uploads/images/thumb_medium_d85410bd19db1016894c.jpg",
          small: "http://www.passim.com.br/uploads/images/thumb_small_d85410bd19db1016894c.jpg"
        }
    }, overrides)
  },

  post :  function(overrides) {
    defaultAttrs = _.extend(factory.postAttrs(),  {"author" : this.author()})
    return new app.models.Post(_.extend(defaultAttrs, overrides))
  },

  statusMessage : function(overrides){
    //intentionally doesn't have an author to mirror creation process, maybe we should change the creation process
    return new app.models.StatusMessage(_.extend(factory.postAttrs(), overrides))
  },

  comment: function(overrides) {
    var defaultAttrs = {
      "text" : "This is an awesome comment!",
      "created_at" : "2012-01-03T19:53:13Z",
      "author" : this.author(),
      "guid" : this.guid(),
      "id": this.id.next()
    }

    return new app.models.Comment(_.extend(defaultAttrs, overrides))
  }
}

factory.author = factory.userAttrs
