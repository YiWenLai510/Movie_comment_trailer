import { gql } from 'apollo-boost'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription comments($movieid:String!){
    comments( query:$movieid) {
      mutation
      data {
        content
        stars
        id
        movieid
      }
    }
  }
`