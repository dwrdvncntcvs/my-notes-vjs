import UpdateOverlay from "./components/UpdateOverlay";

class App {
  constructor(...elements) {
    this.elements = [...elements];
  }

  render() {
    const url = new URL(window.location.href);
    if (url.searchParams.has("noteId")) {
      const noteId = url.searchParams.get("noteId");
      new UpdateOverlay(noteId).render();
    }

    const app = document.getElementById("app");
    for (const element of this.elements) {
      app.appendChild(element);
    }
  }
}

export default App;
