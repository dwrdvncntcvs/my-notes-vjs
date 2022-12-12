import { v4 } from "uuid";

class Note {
  constructor(
    title,
    details,
    id = v4(),
    createdAt = new Date(),
    updatedAt = new Date()
  ) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  serializeData() {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      details: this.details,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    });
  }
}

export default Note;
