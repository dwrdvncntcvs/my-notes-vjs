import { removeNote } from "../api/notes";
import { generateDate } from "../utils/helper";
import { BASE_URL } from "../variable";
import { reinitializeContentComponent } from "./ContentComponent";

class NoteList {
  constructor(notes = []) {
    this.notes = notes;
  }

  createModifierContainer(id, itemId) {
    const div = document.createElement("div");
    div.classList = ["item-modifier"];
    div.id = id;

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View";
    viewBtn.classList = ["modifier-btn"];
    viewBtn.id = "view-btn";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.classList = ["modifier-btn"];
    removeBtn.id = "remove-btn";

    viewBtn.addEventListener("click", (e) => {
      const url = new URL(window.location.href);
      url.searchParams.set("noteId", itemId);
      window.location.search = url.search;
    });

    removeBtn.addEventListener("click", async () => {
      const URL = `${BASE_URL}/notes/${itemId}`;

      await removeNote(URL);
      await reinitializeContentComponent();
    });

    div.appendChild(viewBtn);
    div.appendChild(removeBtn);

    return div;
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
      const id = note.id;
      li.id = id;

      p1.textContent = generateDate(note.createdAt);
      p2.textContent = note.title;
      p3.textContent = note.details;
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      ul.appendChild(li);

      const modifierId = `m-${id}`;

      li.addEventListener("mouseenter", () => {
        const itemModifier = document.querySelector(`#${modifierId}`);
        if (itemModifier) return;

        const div = this.createModifierContainer(modifierId, id);

        li.appendChild(div);
      });

      li.addEventListener("mouseleave", () => {
        const itemModifier = document.querySelector(`#${modifierId}`);
        if (!itemModifier) return;
        li.removeChild(itemModifier);
      });
    }

    return ul;
  }
}

export default NoteList;
