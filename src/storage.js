// STORE CLASS

class Store{

    static getNotes(){
        let notes;
        if(localStorage.getItem('notes') === null){
            notes = [];
        }
        else {
            notes = JSON.parse(localStorage.getItem('notes'));
        }
        return notes;
    }

    static addNotes(note){
        const notes = Store.getNotes();
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    static deleteNote(id){
        const notes = Store.getNotes();

        notes.forEach((noteItem, i) => {
            if (i === id) {
                notes.splice(i, 1);
            }
        });

        localStorage.setItem('notes', JSON.stringify(notes));

    }

}

export default Store;
