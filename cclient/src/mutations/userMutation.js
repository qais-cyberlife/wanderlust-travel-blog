import { gql } from '@apollo/client';

const ADD_USER = gql`
    mutation addUser ($name: String!, $username: String!, $password: String!) {
        addUser (name: $name, username: $username, password: $password)
        {
            id
            name
            username
            password
        }
    }
`

export { ADD_USER };