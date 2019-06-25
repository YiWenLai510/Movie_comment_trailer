const Query = {
  comments(parent, args, { db }, info) {      
    /*return db.comments.filter(comment => {
      return comment.movieid == args.query
    })*/
  } ,
  favorite(parent, args, { db }, info){
    /*if (!args.query) {
      return db.User
    }
    return db.User.filter(user => {
      return user.userId == args.query
    })*/
  }
}

export { Query as default }
