import "../styles/post.css"
import { Link } from "react-router-dom";

export default function Post(props){
    const {id, title, description, publishedDate} = props.data;
    return (
        <>
            <div class="post">
                <Link class="link" to={'/post/' + id}>
                    <img class="postImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
                    <div class="postInfo">
                        <span class="postTitle">{title}</span>
                        <hr/>
                        <span class="postDate">{publishedDate.substring(4, 15)}</span>
                        <p class="postDesc">{description}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}