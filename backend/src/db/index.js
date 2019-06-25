import mongoose from 'mongoose';
import Comment from './Comment'
import User from './User'


// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;

export const models = {
    Comment,
    User
  }
  