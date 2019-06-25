const Subscription = {
  comments: {
    /*subscribe(parent, { query }, { db, pubsub }, info) {
      const post = db.comments

      if (!post) {
        throw new Error('Post not found')
      } 

      return pubsub.asyncIterator(`comments ${query}`)
    }*/
  }
}

export { Subscription as default } 
