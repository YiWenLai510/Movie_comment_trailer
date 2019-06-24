import { gql } from 'apollo-boost'
 
export const COMMENTS_QUERY = gql`
  query comments($movieid:String){
    comments(query:$movieid) {
      content
      stars
      movieid
    }
  }
`

