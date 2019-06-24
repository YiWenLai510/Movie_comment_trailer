import { gql } from 'apollo-boost'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription comments($movieid:String!){
    comments( movieid:$movieid) {
      mutation
      data {
        content
        stars
      }
    }
  }
`