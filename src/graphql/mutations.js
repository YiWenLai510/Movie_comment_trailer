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
    )
  }
`

export const CREATE_FAVORITE_MUTATION = gql`
  mutation createFavorite(
    $userId: String!
    $movieid:Int!
  ) {
    createFavorite(
      data:{
        userId: $userId
        movieid:$movieid
      }
    )
  }
`
