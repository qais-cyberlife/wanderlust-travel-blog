import "../styles/post.css"
import { Link } from "react-router-dom";

export default function Post(){
    return (
        <>
            <div class="post">
                <Link class="link" to='/post/:postId'>
                    <img class="postImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
                    <div class="postInfo">
                        <span class="postTitle">Title ajfea ajfea</span>
                        <hr/>
                        <span class="postDate">2 days ago</span>
                        <p class="postDesc">Lorem ipsum dolor sit amet. Ut esse rerum aut obcaecati eligendi sed dicta voluptatum qui quod libero vel enim illo id sapiente perspiciatis est vitae tenetur? Aut dolores illo sed voluptatem ipsum et provident consectetur non ratione commodi quo sapiente libero a tenetur asperiores. Ut totam eligendi et tenetur Quis est voluptate harum ut veritat</p>
                    </div>
                </Link>
            </div>
        </>
    )
}