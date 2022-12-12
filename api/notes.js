import axios from "axios";

const createNotes = async (URL, data, headers) => {
  return await axios.post(URL, data, {
    headers: { "Content-Type": "application/json", ...headers },
  });
};

const getNotes = async (URL) => {
  return await axios.get(URL);
};

const removeNote = async (URL) => {
  return await axios.delete(URL);
};

const updateNote = async (URL, data, headers) => {
  return await axios.put(URL, data, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
};

export { createNotes, getNotes, removeNote, updateNote };
