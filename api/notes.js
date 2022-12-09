import axios from "axios";

const createNotes = async (URL, data, headers) => {
  return await axios.post(URL, data, {
    headers: { "Content-Type": "application/json", ...headers },
  });
};

const getNotes = async (URL) => {
  return await axios.get(URL);
};

export { createNotes, getNotes };
