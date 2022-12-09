class App {
  constructor(...elements) {
    this.elements = [...elements];
  }

  render() {
    const app = document.getElementById("app");
    for (const element of this.elements) {
      app.appendChild(element);
    }
  }
}

export default App;
