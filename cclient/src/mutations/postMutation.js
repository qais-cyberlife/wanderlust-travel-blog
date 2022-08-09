import { gql } from '@apollo/client';

const ADD_POST = gql`
    mutation addPost ($title: String!, $description: String!, $publishedDate: String!, $authorId: String!) {
        addPost (title: $title, description: $description, publishedDate: $publishedDate, authorId: $authorId)
        {
            id
            title
            description
            publishedDate
        }
    }
`


export { ADD_POST };