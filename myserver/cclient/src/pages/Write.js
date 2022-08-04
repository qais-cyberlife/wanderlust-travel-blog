import "../styles/write.css" 

export default function Write(){
    return (
        <>
            <div class="write">
                <img class="writeImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
                <form class="writeForm">
                    <div class="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i class="writeIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput"></input>
                        <input class="writeInput" type="text" placeholder="Title" autoFocus={true}></input>
                    </div>
                    <div class="writeFormGroup">
                        <textarea class="writeInput writeText" placeholder="Share your journey..." type="text" ></textarea>
                    </div>
                    <button class="writeButton">Publish</button>
                </form>
            </div>
        </>
    )
}