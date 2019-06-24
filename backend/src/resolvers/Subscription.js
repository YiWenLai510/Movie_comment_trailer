const Subscription = {
  comments: {
    subscribe(parent, { postId }, { db, pubsub }, info) {
      const post = db.comments
      console.log(post)

      if (!post) {
        throw new Error('Post not found')
      } 

      return pubsub.asyncIterator(`comment ${postId}`)
    }
  }
}

export { Subscription as default }
