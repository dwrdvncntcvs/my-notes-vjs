class Button {
  constructor(label, attributes, action, drop) {
    this.label = label;
    this.attributes = attributes;
    this.action = action;
    this.drop = drop;
  }

  render() {
    const button = document.createElement("button");
    button.innerHTML = this.label;

    for (const key in this.attributes) {
      button.setAttribute(key, this.attributes[key]);
    }

    if (this.action !== undefined) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        this.action();
      });
    }

    return button;
  }
}

export default Button;
