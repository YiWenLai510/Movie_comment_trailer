import uuidv4 from 'uuid/v4'

const Mutation = {
  createComment:  (parent, args, { db, pubsub ,models }, info)=>{
    const newComment = new models.Comment({
      content:args.data.content,
      stars: args.data.stars,
      movieid:args.data.movieid,
      id:uuidv4(),
    });
    try{
      newComment.save();
      pubsub.publish(`comments ${args.data.movieid}`, {
        comments: {
          mutation: 'CREATED',
          data: newComment
        }
      })
      return true;
    }catch (e) {
      throw new Error('Cannot Save Post!!!');
    }
    
    /*const comment = {
        id : uuidv4(),
        ...args.data
      }
      console.log(comment)
      db.comments.push(comment) 
      return comment*/
  },
  createFavorite: async (parent, args, { db, pubsub,models }, info)=>{
    const User = await models.User.find({userId:args.data.userId});
    if(Object.getOwnPropertyNames(User).length > 1){
      User[0].favorite.push(args.data.movieid)
      await models.User.updateOne({userId:args.data.userId},{
        userId:args.data.userId,
        favorite:User[0].favorite
      })
      return true;
    }
    else{
      const newUser = new models.User({
        userId: args.data.userId,
        favorite: [args.data.movieid] 
      })
      try{
        newUser.save();
        return true;
      }catch (e) {
        throw new Error('Cannot Save Post!!!');
      }
    }

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
