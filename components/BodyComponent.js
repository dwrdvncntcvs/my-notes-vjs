import { getNotes } from "../api/notes";
import { BASE_URL } from "../variable";
import { buttonsContainer } from "./ButtonsComponent";
import { initializeContentComponent } from "./ContentComponent";

class BodyComponent {
  render(...elements) {
    const div = document.createElement("div");
    div.className = "body-container";
    div.id = "body";

    for (let element of elements) {
      div.appendChild(element);
    }

    return div;
  }
}

export default BodyComponent;

const initializeBodyComponent = async () => {
  const contentContainer = await initializeContentComponent();
  const bodyComponent = new BodyComponent();
  const bodyContainer = bodyComponent.render(
    contentContainer,
    buttonsContainer
  );

  return bodyContainer;
};

export { initializeBodyComponent };
