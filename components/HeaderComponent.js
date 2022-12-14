import { removeNote } from "../api/notes";
import { BASE_URL } from "../variable";
import { reinitializeContentComponent } from "./ContentComponent";

class HeaderComponent {
  constructor(appTitle) {
    this.appTitle = appTitle;
  }

  createDeleteDiv() {
    const div = document.createElement("div");
    div.id = "delete-drop";
    const p = document.createElement("p");
    p.textContent = "Delete";
    div.appendChild(p);

    div.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.stopPropagation();
      div.classList.add("delete-drop-over");
    });

    div.addEventListener("dragleave", (e) => {
      e.preventDefault();
      e.stopPropagation();
      div.classList.remove("delete-drop-over");
    });

    div.addEventListener("drop", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const noteId = e.dataTransfer.getData("noteId");

      const URL = `${BASE_URL}/notes/${noteId}`;

      await removeNote(URL);
      await reinitializeContentComponent();
    });

    return div;
  }

  createUpdateDiv() {
    const div = document.createElement("div");
    div.id = "update-drop";
    const p = document.createElement("p");
    p.textContent = "Update";
    div.appendChild(p);

    div.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.stopPropagation();
      div.classList.add("update-drop-over");
    });

    div.addEventListener("dragleave", (e) => {
      e.preventDefault();
      e.stopPropagation();
      div.classList.remove("update-drop-over");
    });


    div.addEventListener("drop", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const noteId = e.dataTransfer.getData("noteId");

      const url = new URL(window.location.href);
      url.searchParams.set("noteId", noteId);
      window.location.search = url.search;
    });

    return div;
  }

  render(z) {
    const div = document.createElement("div");
    div.className = "header-container";
    if (this.appTitle.length > 0) {
      const h1 = document.createElement("h1");
      h1.textContent = this.appTitle;
      div.appendChild(h1);
    }

    const droppableDiv = document.createElement("div");
    droppableDiv.className = "droppable-div";

    const deleteDiv = this.createDeleteDiv();
    const updateDiv = this.createUpdateDiv();

    droppableDiv.appendChild(updateDiv);
    droppableDiv.appendChild(deleteDiv);

    div.appendChild(droppableDiv);

    return div;
  }
}

export default HeaderComponent;

const headerComponent = new HeaderComponent("My Notes");
const headerContainer = headerComponent.render();

export { headerContainer };
