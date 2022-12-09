import App from "./app";
import { initializeBodyComponent } from "./components/BodyComponent";
import { headerContainer } from "./components/HeaderComponent";

const renderApp = async () => {
  const bodyContainer = await initializeBodyComponent();
  const app = new App(headerContainer, bodyContainer);
  app.render();
};

renderApp();
