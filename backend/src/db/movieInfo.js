import mongoose from 'mongoose';
const movieInfoSchema = new mongoose.Schema({
    adult: {
        type: Boolean,
        required:true
    },                  /*adult: false*/
    backdrop_path:{
        type:String
    },                  /*"/m67smI1IIMmYzCl9axvKNULVKLr.jpg"*/
    genre_ids: {
        type:String
    },                  /*(4) [12, 16, 35, 10751]*/
    id: {
        type:Number
    },                  /*301528*/
    original_language: {
        type:String
    },                  /*"en"*/
    original_title: {
        type:String
    },                  /*"Toy Story 4"*/
    overview: {
        type:String
    },                   /*"Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy."
                        */
   popularity: {
        type:Number
    },                  /*327.068*/
    poster_path: {
        type:String
    },                  /*"/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg"*/
    release_date: {
        type:String
    },                  /*"2019-06-19"*/
    title: {
        type:String
    },                  /*"Toy Story 4"*/
    video: {
        type:Boolean
    },                  /*false*/
    vote_average: {
        type:Number
    },                  /*7.6*/
    vote_count: {
        type:Number
    }                   /*396*/

})
export default mongoose.model('movieInfo',movieInfoSchema)