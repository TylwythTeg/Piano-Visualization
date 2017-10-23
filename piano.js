var scale = {
    object: "scale",
    root: "E",
    notes: [
        "E",
        "F#",
        "G",
        "A",
        "B",
        "C#",
        "D"
    ]
}




var visualPiano = function(element) {
    var that = this;
    
    this.element = element;
    this.noteElements;
    
    function findNoteElements() {
        var keys = that.element.children;
        that.noteElements = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            that.noteElements.push(key.firstElementChild);
        }
    }
    findNoteElements();
    
    
    this.showNotes = function(notes) {
        var elements = this.noteElements;
        for (var i = 0; i < elements.length; i++) {
            var note = elements[i].textContent;
            
            if (notes.includes(note)) {
                elements[i].classList.remove("invisible");
            } else {
                elements[i].classList.add("invisible");
            }
        }
    }
}





var pianoElement = document.getElementsByClassName("piano_body")[0];
vp = new visualPiano(pianoElement);
vp.showNotes(scale.notes);

console.log(vp);


