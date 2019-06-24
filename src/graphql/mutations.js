import { gql } from 'apollo-boost'

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment(
    $content: String!
    $stars: Int!
    $movieid:Int!
  ) {
    createComment(
      data:{
        content: $content
        stars: $stars
        movieid: $movieid
      }
    ){
      content
      stars
      movieid
    } 
  }
`
