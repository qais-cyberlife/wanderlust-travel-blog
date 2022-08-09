import { gql } from '@apollo/client';

const ADD_AUTHOR = gql`
    mutation addAuthor($name: String!, $username: String!) {
        addAuthor (name: $name, username: $username)
        {
            id
            title
        }
    }
`



export { ADD_AUTHOR };