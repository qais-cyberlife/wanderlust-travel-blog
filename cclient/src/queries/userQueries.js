import { gql } from '@apollo/client';

const GET_USERS = gql`
    query users {
        users {
            id
            name
            username
        }
    }
`;



export { GET_USERS };

