import axios from "axios";

const getDataTable = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export default getDataTable;
