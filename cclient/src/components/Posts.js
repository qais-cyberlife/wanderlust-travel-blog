import "../styles/posts.css"
import { useEffect, useState } from "react";
import Post from "./Post"
import { useQuery } from "@apollo/client";

import { GET_POSTS } from "../queries/postQueries";



export default function Posts(){
    const { loading, error, data, refetch } = useQuery(GET_POSTS)

    useEffect(() => {
        console.log("useEffect");
        refetch();
    }, []);


    if (error) return <p>Something went wrong</p>

    console.log("posts", data);


    return (
        <>
            <div class="posts"> 
            {
                data?.posts.map(row => <Post data={row}/>)
            }   
            </div>
        </>
    )
}