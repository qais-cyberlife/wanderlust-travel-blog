import "../styles/write.css" 
import {useState, useEffect}  from "react";
import { useMutation } from "@apollo/client";
import {useNavigate} from 'react-router-dom';


import { ADD_POST } from "../mutations/postMutation";

export default function Write(){
    const [isDisabled, setIsDisabled] = useState(true);
    const [user, setUser] = useState({});

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();

    console.log("Write");


    const [addPost, {data, loading, error}] = useMutation(ADD_POST);


    useEffect(() => {
        let data = localStorage.getItem("login");
        if( !data )
            data = "{}";

        data = JSON.parse(data);
        if( data.id ) 
            setIsDisabled(false);
        else
            setIsDisabled(true);

        setUser(data);


    }, [localStorage]);

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if (title === '' || text === '') {
            return alert('Please fill in all fields!');
        }

        // addUser(name, username, password);
        const publishedDate = new Date().toString();
        const data = await addPost({variables: {title, description: text, publishedDate, authorId: user.id }});

        console.log("addPost result", data);

        if( data.data.addPost == null ) {
            alert("add Post failed");
            return;
        }


        setText('');
        setTitle('');

        alert('Story is posted successfully');

        navigate('/');

    };

    return (
        <>
            <div class="write">
                <img class="writeImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
                <form class="writeForm" onSubmit={onSubmit} >
                    <div class="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i class="writeIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" disabled={isDisabled}></input>
                        <input class="writeInput" type="text" placeholder="Title" autoFocus={true} disabled={isDisabled} value={title}  onChange={(e) => setTitle(e.target.value)} ></input>
                    </div>
                    <div class="writeFormGroup">
                        <textarea class="writeInput writeText" placeholder="Share your journey..." type="text" disabled={isDisabled} value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                    </div>
                    <button class="writeButton" disabled={isDisabled} >Publish</button>
                </form>
            </div>
        </>
    )
}