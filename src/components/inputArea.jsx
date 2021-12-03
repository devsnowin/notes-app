import React, { useState } from "react"
import Zoom from '@material-ui/core/Zoom';
import Store from "../storage.js"

function InputArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setExpand] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });

    }

    function submitNote(e) {

        e.preventDefault();

        props.onClick(note);

        if (note.title !== "" && note.content !== "") {

            //Add the notes to localstorage.
            Store.addNotes(note);

            setExpand(false);

        }

        setNote({
            title: "",
            content: ""
        });

    }

    function expand() {
        setExpand(true);
    }

    return (
        <div>
            <form>
                {isExpanded && <input name="title" placeholder="Title" autoComplete="off" value={note.title} onChange={handleChange} autoFocus={true} />}
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} autoComplete="off" value={note.content} onChange={handleChange} onClick={expand} />

                <Zoom in={isExpanded ? true : false}>
                    <button onClick={submitNote}>+</button>
                </Zoom>
            </form>
        </div>
    );
}

export default InputArea;
