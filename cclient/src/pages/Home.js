import Header from "../components/Header"
import Posts from "../components/Posts"
import "../styles/home.css"

export default function Home(){
    return (
        <>
            <Header/>
            <div class="home">
                <Posts/>
            </div>
        </>

    )
}