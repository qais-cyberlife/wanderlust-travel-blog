import {useParams} from 'react-router-dom';

import SinglePost from "../components/SinglePost"
import "../styles/single.css" 

export default function Single(){
    const params = useParams();
    const postId = params?.postId;
    console.log("params", params);
    return (
        <>
            <div class="single">
                <SinglePost postId={postId}/>
            </div>
        </>
    )
}