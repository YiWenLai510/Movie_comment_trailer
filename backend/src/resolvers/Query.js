const Query = {
  comments(parent, args, { db }, info) {      
    return db.comments.filter(comment => {
      return comment.movieid == args.query
    })
  } 
}

export { Query as default }
