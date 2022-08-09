import "../styles/singlePost.css"

import { useQuery } from "@apollo/client";
import { GET_POST } from "../queries/postQueries";


export default function SinglePost({postId}) {
    console.log("postId", postId);

    const { loading, error, data } = useQuery(GET_POST, {variables: {id: postId}});
    if (error || !data) return <p>Something went wrong</p>
    console.log("single ost", data);

    const {id, title, description, publishedDate, author}  = data.post;

    return (
        <>
            <div class="singlePost">
                <div class="singlePostWrapper">
                    <img class="singlePostImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
                    <h1 class="singlePostTitle">
                        {title}
                        <div class="singlePostIcons">
                            <i id="editIcon" class="far fa-edit"></i>
                            <i id="deleteIcon" class="far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div class="singlePostInfo">
                        <span class="singlePostAuthor">Author: <b>{author?.name}</b></span>
                        <span class="singlePostDate">{publishedDate.substring(4, 15)}</span>
                    </div>
                    <p class="singlePostDesc">
                    {description}
                    </p>
                </div>
            </div>
        </>
    )
}