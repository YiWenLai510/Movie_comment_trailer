import uuidv4 from 'uuid/v4'

const Mutation = {
  createComment (parent, args, { db }, info){
      const comment = {
        id : uuidv4(),
        ...args.data
      }
      db.comments.push(comment)
      return comment
  }
}

export { Mutation as default }
