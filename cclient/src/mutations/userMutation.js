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

const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password ) {
            id
            username
        }
    }
`;

export { ADD_USER, LOGIN_USER };