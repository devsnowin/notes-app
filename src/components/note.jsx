import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function deleteNote() {
        props.onClick(props.id);
    }

    return <div className="note">
        <h1>
            {props.title}
        </h1>
        <p>{props.content}</p>
        <a style={{ cursor: "pointer", color: "#f5ba13" }} onClick={deleteNote}>
            <DeleteIcon className="btnDelete" />
        </a>
    </div>
}

export default Note;