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
  },
  createFavorite: async (parent, args, { db, pubsub,models }, info)=>{
    const User = await models.User.find({userId:args.data.userId});
    if(Object.getOwnPropertyNames(User).length > 1){
      const newFavorite = {
        movie_poster:args.data.movie_poster,
        movie_title:args.data.movie_title,
        movieid:args.data.movieid,
      }
      User[0].favorite.push(newFavorite);
      await models.User.updateOne({userId:args.data.userId},{
        userId:args.data.userId,
        favorite:User[0].favorite
      })
      return true;
    }
    else{
      const newUser = new models.User({
        userId: args.data.userId,
        favorite: [{
          movie_poster:args.data.movie_poster,
          movie_title:args.data.movie_title,
          movieid:args.data.movieid,
        }] 
      })
      try{
        newUser.save();
        return true;
      }catch (e) {
        throw new Error('Cannot Save Post!!!');
      }
    }
  }
}

export { Mutation as default }
