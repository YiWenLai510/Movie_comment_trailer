import uuidv4 from 'uuid/v4'

const Mutation = {
  createComment (parent, args, { db, pubsub }, info){
      const comment = {
        id : uuidv4(),
        ...args.data
      }
      console.log(comment)
      db.comments.push(comment) 
      console.log('add')

      pubsub.publish(`comments ${args.data.movieid}`, {
        comments: {
          mutation: 'CREATED',
          data: comment
        }
      })
      return comment
  }
}

export { Mutation as default }
