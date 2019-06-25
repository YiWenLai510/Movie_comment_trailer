const Subscription = {
  comments: {
    subscribe(parent, { query }, { db, pubsub }, info) {
      return pubsub.asyncIterator(`comments ${query}`)
    }
  }
}

export { Subscription as default } 
