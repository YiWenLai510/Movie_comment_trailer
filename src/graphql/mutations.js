import { gql } from 'apollo-boost'

export const CREATE_COMMENT_MUTATION = gql`
  mutation createPost(
    $comment: String!
    $stars: Int!
    $movieid:Int!
  ) {
    createPost(
      data:{
        comment: $comment
        stars: $stars
        movieid: $movieid
      }
    ){
      comment
      stars
      movieid
    } 
  }
`
