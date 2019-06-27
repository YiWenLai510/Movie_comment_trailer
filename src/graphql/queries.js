import { gql } from 'apollo-boost'
 
export const COMMENTS_QUERY = gql`
  query comments($movieid:String){
    comments(query:$movieid) {
      content
      stars
      movieid
      id
    }
  }
`
export const FAVORITE_QUERY = gql`
  query  users($userId:String){
    users(query:$userId) {
      favorite
      userId
    }
  }
`
