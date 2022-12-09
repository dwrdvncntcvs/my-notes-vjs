class InputComponent {
  constructor(
    inputType = "",
    attributes = { placeholder: "", type: "", name: "", id: "" }
  ) {
    this.inputType = inputType;
    this.attributes = attributes;
  }

  render() {
    let inputEl;
    if (this.inputType === "input") {
      inputEl = document.createElement("input");
    } else if (this.inputType === "textarea") {
      inputEl = document.createElement("textarea");
    }

    for (let key in this.attributes) {
      inputEl.setAttribute(key, this.attributes[key]);
    }

    return inputEl;
  }
}

export default InputComponent;
