import React, { useState } from "react"
import Header from "./header"
import Note from "./note"
import Footer from "./footer"
import InputArea from "./inputArea"
import Store from "../storage.js"

function App() {

    const note = Store.getNotes();
    const [notes, setNotes] = useState(note);

    function addNote(newNote) {
        if (newNote.title !== "" && newNote.content !== "") {
            setNotes(prevNotes => {
                return [...prevNotes, newNote]
            });
        }
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, i) => {
                return i !== id;
            })
        });
        Store.deleteNote(id);
    }

    return <div>
        <Header />
        <div className="container">
            <InputArea onClick={addNote} />
            <div className="notes-container">
                {
                    notes.map((noteItem, i) => {
                        return <Note key={i} id={i} title={noteItem.title} content={noteItem.content} onClick={deleteNote} />
                    })
                }
            </div>
        </div>

        <Footer />
    </div>
}

export default App;
