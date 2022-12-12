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

      const url = new URL(window.location.href);
      for (let [key] of url.searchParams)
        if (url.searchParams.has(key)) {
          url.searchParams.delete(key);
          window.location.href = url;
        }

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
