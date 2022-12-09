import dayjs from "dayjs";

const generateDate = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};

export { generateDate };
