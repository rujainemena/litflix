import {gql} from '@apollo/client'

export const QUERY_ME=gql`
query Me {
  me {
    email
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`