import "../styles/navbar.css";
import { Link, Navigate } from "react-router-dom";

export default function NavBar() {
    const onLogout = () => {
        console.log("onLogout");
        localStorage.removeItem("login");
        Navigate("/")
    }

    const loggedIn = () => {
        const user = JSON.parse(localStorage.getItem("login"))

        console.log(user)

        if (user) {

            return <li class="topListItem"><Link class="link" to='/' onClick={onLogout}>LOGOUT</Link></li>
        } else {

            return <>
                <li class="topListItem"><Link class="link" to='/login'>LOGIN</Link></li>
                <li class="topListItem"><Link class="link" to='/register'>REGISTER</Link></li>
            </>
        }
    }

    return (
        <>
            <div class="top">
                <div classe="topCentre">
                    <ul class="topList">
                        <li class="topListItem"><Link class="link" to='/'>HOME</Link></li>
                        <li class="topListItem"><Link class="link" to='/authors'>AUTHORS</Link></li>
                        <li class="topListItem"><Link class="link" to='/write'>WRITE</Link></li>
                        {loggedIn()}
                    </ul>
                </div>
            </div>
        </>
    )
}