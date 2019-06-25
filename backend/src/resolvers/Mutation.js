import uuidv4 from 'uuid/v4'

const Mutation = {
  createComment (parent, args, { db, pubsub ,models }, info){
    
    const newComment = new models.Comment({
      content:args.data.content,
      stars: args.data.stars,
      movieid:args.data.movieid,
      id:uuidv4(),
    });
    newComment.save();
    /*const comment = {
        id : uuidv4(),
        ...args.data
      }
      console.log(comment)
      db.comments.push(comment) 

      pubsub.publish(`comments ${args.data.movieid}`, {
        comments: {
          mutation: 'CREATED',
          data: comment
        }
      })
      return comment*/
  },
  createFavorite(parent, args, { db, pubsub }, info){
    /*const userIndex = db.User.findIndex(user => user.userId == args.data.userId)
    if (userIndex !== -1) {
      db.User[userIndex].favorite.push(args.data.movieid)
      return  db.User.filter( user => { 
        return user.userId == args.data.userId
      })
    }
    else {
      db.User.push({
        userId: args.data.userId,
        favorite: [args.data.movieid] 
      })
      return db.User[db.User.length-1]
    }*/
  }
}

export { Mutation as default }
