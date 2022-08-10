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
const UPDATE_POST = gql`
    mutation updatePost ($title: String!, $description: String!, $publishedDate: String!, $authorId: String!) {
        updatePost (title: $title, description: $description, publishedDate: $publishedDate, authorId: $authorId)
        {
            id
            title
            description
            publishedDate
        }
    }
`
const DELETE_POST = gql`
    mutation deletePost ($title: String!, $description: String!, $publishedDate: String!, $authorId: String!) {
        deletePost (title: $title, description: $description, publishedDate: $publishedDate, authorId: $authorId)
        {
            id
        }
    }
`

export { ADD_POST, UPDATE_POST, DELETE_POST };