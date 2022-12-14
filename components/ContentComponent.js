import { getNotes } from "../api/notes";
import { BASE_URL } from "../variable";
import NoteList from "./NoteList";

class ContentComponent extends NoteList {
  constructor(notes) {
    super(notes);
  }

  render() {
    const div = document.createElement("div");
    div.id = "content";
    div.className = "content-container";

    const list = this.createNoteList();
    div.appendChild(list);

    return div;
  }
}

export default ContentComponent;

const initializeContentComponent = async () => {
  try {
    const response = await getNotes(`${BASE_URL}/notes`);
    const data = response.data;

    const contentComponent = new ContentComponent(data);
    const contentContainer = contentComponent.render();

    return contentContainer;
  } catch (e) {
    const contentComponent = new ContentComponent();
    const contentContainer = contentComponent.render();

    return contentContainer;
  }
};

const reinitializeContentComponent = async () => {
  const bodyComponent = document.getElementById("body");

  const contentContainer = await initializeContentComponent();

  bodyComponent.replaceChild(contentContainer, bodyComponent.firstChild);
};

export { initializeContentComponent, reinitializeContentComponent };
