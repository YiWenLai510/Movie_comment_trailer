const Subscription = {
  comments: {
    subscribe(parent, { query }, { db, pubsub }, info) {
      const post = db.comments
      console.log(query)

      if (!post) {
        throw new Error('Post not found')
      } 

      return pubsub.asyncIterator(`comments ${query}`)
    }
  }
}

export { Subscription as default } 
