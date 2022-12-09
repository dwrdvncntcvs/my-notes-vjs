class HeaderComponent {
  constructor(appTitle) {
    this.appTitle = appTitle;
  }

  render(elements = []) {
    const div = document.createElement("div");
    div.className = "header-container";
    if (this.appTitle.length > 0) {
      const h1 = document.createElement("h1");
      h1.textContent = this.appTitle;
      div.appendChild(h1);
    }

    for (let element of elements) {
      div.appendChild(element);
    }
    return div;
  }
}

export default HeaderComponent;

const headerComponent = new HeaderComponent("My Notes");
const headerContainer = headerComponent.render();

export { headerContainer };
