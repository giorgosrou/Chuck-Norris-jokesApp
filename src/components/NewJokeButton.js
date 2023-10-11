import React from "react";

const NewJokeButton = ({clickChange}) => {
    return (
        <div>
            <button onClick={clickChange}>Get Another one</button>
        </div>
    )
}

export default NewJokeButton;