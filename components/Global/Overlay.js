class Overlay {
  isVisible = false;

  constructor() {}

  setVisibility(isVisible) {
    this.isVisible = isVisible;
  }

  createOverlay(...elements) {
    const overlayDiv = document.querySelector("#overlay");
    const backDrop = document.createElement("div");
    backDrop.classList = ["backdrop"];

    backDrop.addEventListener("click", () => {
      this.setVisibility(false);

      for (let element of elements) {
        element.remove();
      }
      backDrop.remove();
    });

    overlayDiv.appendChild(backDrop);

    for (let element of elements) {
      overlayDiv.appendChild(element);
    }
  }
}

export default Overlay;
