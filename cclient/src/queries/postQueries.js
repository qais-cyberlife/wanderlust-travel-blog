import { gql } from '@apollo/client';

const GET_POSTS = gql`
    query posts {
        posts {
            id
            title
            description
            publishedDate
        }
    }
`;


const GET_POST = gql`
    query post ($id: String!)  {
        post(id: $id) {
            id
            title
            description
            publishedDate
            author {
                name
            }            
        }
    }
`;


export {GET_POSTS, GET_POST};