import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    const onLogout= () => {
        console.log("onLogout");
        localStorage.setItem("login", "");
    }
    return (
        <>
            <div class="top">
                <div classe="topCentre">
                    <ul class="topList">
                        <li class="topListItem"><Link class="link" to='/'>HOME</Link></li>
                        <li class="topListItem"><Link class="link" to='/authors'>AUTHORS</Link></li>
                        <li class="topListItem"><Link class="link" to='/write'>WRITE</Link></li>
                        <li class="topListItem"><Link class="link" to='/login'>LOGIN</Link></li>
                        <li class="topListItem"><Link class="link" to='/register'>REGISTER</Link></li>
                        <li class="topListItem"><Link class="link" to='/' onClick={onLogout}>LOGOUT</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}