import { createNotes } from "../api/notes";
import Note from "../models/Note";
import { BASE_URL } from "../variable";
import { reinitializeContentComponent } from "./ContentComponent";
import Overlay from "./Global/Overlay";

class CreateModal extends Overlay {
  constructor(inputs = [], buttons = []) {
    super();
    this.inputs = inputs;
    this.buttons = buttons;
  }

  createForm(title) {
    const form = document.createElement("form");
    const h2 = document.createElement("h2");

    form.classList = ["form"];
    h2.textContent = title;

    for (let input of this.inputs) form.appendChild(input);

    for (let button of this.buttons) form.appendChild(button);

    return form;
  }

  render() {
    const div = document.createElement("div");

    div.classList = ["create-modal"];
    const form = this.createForm("Add Notes");
    div.appendChild(form);

    form.addEventListener("submit", async (e) => {
      const overlayDiv = document.getElementById("overlay");
      e.preventDefault();

      let data = {};

      for (let input of this.inputs) {
        data[input.id] = input.value;
      }

      const note = new Note(data.title, data.notes);
      const reqData = note.serializeData();
      await createNotes(`${BASE_URL}/notes`, reqData);

      await reinitializeContentComponent();

      let child = overlayDiv.lastElementChild;

      while (child) {
        overlayDiv.removeChild(child);
        child = overlayDiv.lastElementChild;
      }

      form.reset();
    });

    if (this.isVisible) this.createOverlay(div);
  }
}

export default CreateModal;
