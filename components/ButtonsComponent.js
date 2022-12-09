import Button from "./Button";
import CreateModal from "./CreateModal";
import InputComponent from "./Global/InputComponent";

class ButtonsComponent {
  constructor() {}

  render(...buttons) {
    const div = document.createElement("div");
    div.classList = ["buttons-container"];

    for (const button of buttons) {
      div.appendChild(button);
    }
    return div;
  }
}

export default ButtonsComponent;

const createInputs = [
  {
    inputType: "input",
    attributes: {
      placeholder: "Enter Title...",
      type: "text",
      id: "title",
    },
  },
  {
    inputType: "textarea",
    attributes: {
      placeholder: "Enter Notes...",
      type: "text",
      id: "notes",
    },
  },
];

const createButtons = [
  {
    label: `<i class="material-icons">check</i>`,
    attributes: {
      id: "create-btn",
      type: "submit",
    },
  },
];

const buttonsData = [
  {
    label: `<i class="material-icons">add</i>`,
    attributes: { type: "button", id: "add-button" },
    action: () => {
      const inputEls = [];
      const buttonEls = [];

      for (let { inputType, attributes } of createInputs) {
        const inputEl = new InputComponent(inputType, attributes);
        inputEls.push(inputEl.render());
      }

      for (let { action, attributes, label } of createButtons) {
        const buttonEl = new Button(label, attributes, action);
        buttonEls.push(buttonEl.render());
      }

      const createModal = new CreateModal(inputEls, buttonEls);

      createModal.setVisibility(true);
      createModal.render();
    },
  },
  {
    label: `<i class="material-icons">autorenew</i>`,
    attributes: { type: "button", id: "update-button" },
    action: () => {
      console.log("Update");
    },
  },
  {
    label: `<i class="material-icons">delete</i>`,
    attributes: { type: "button", id: "delete-button" },
    action: () => {
      console.log("Delete");
    },
  },
];

const buttons = [];

for (const buttonData of buttonsData) {
  const button = new Button(
    buttonData.label,
    buttonData.attributes,
    buttonData.action
  );

  buttons.push(button.render());
}

const buttonsComponent = new ButtonsComponent();
const buttonsContainer = buttonsComponent.render(...buttons);

export { buttonsContainer };
