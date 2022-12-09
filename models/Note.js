import { v4 } from "uuid";

class Note {
  constructor(title, details) {
    this.id = v4();
    this.title = title;
    this.details = details;
    this.createdAt = new Date();
  }

  serializeData() {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      details: this.details,
      createdAt: this.createdAt,
    });
  }
}

export default Note;
