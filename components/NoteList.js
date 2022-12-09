import { generateDate } from "../utils/helper";

class NoteList {
  constructor(notes = []) {
    this.notes = notes;
  }

  createNoteList() {
    if (this.notes.length < 1) {
      const p = document.createElement("p");
      p.textContent = "Note List is empty";
      return p;
    }

    const ul = document.createElement("ul");
    ul.classList = ["notes-list"];

    for (const note of this.notes) {
      const li = document.createElement("li");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      li.classList = ["note-item"];

      p1.textContent = generateDate(note.createdAt);
      p2.textContent = note.title;
      p3.textContent = note.details;
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      ul.appendChild(li);
    }

    return ul;
  }
}

export default NoteList;
