import { getNotes } from "../api/notes";
import { BASE_URL } from "../variable";
import Overlay from "./Global/Overlay";

class UpdateOverlay extends Overlay {
  constructor(noteId) {
    super();

    this.noteId = noteId;
  }

  async getNotes() {
    const response = await getNotes(`${BASE_URL}/notes/${this.noteId}`);
    return response.data;
  }

  createUpdateForm(data) {
    const p = document.createElement("p");
    p.textContent = "Update Note...";

    const input = document.createElement("input");
    input.value = data.title;

    const textarea = document.createElement("textarea");
    textarea.value = data.details;

    const button = document.createElement("button");
    button.id = "create-btn";
    button.innerHTML = `<i class="material-icons">update</i>`;

    const form = document.createElement("form");
    form.appendChild(p);
    form.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(button);

    return form;
  }

  async render() {
    const data = await this.getNotes();

    const form = this.createUpdateForm(data);

    const div = document.createElement("div");
    div.classList = ["create-modal"];
    div.appendChild(form);
    this.createOverlay(div);
  }
}

export default UpdateOverlay;
