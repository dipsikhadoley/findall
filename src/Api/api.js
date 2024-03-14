import axios from "axios";

export const getprodutsapi = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=100");
  return response.data.products;
};

export const getprodutsdetail = async (id) => {
  const response = await axios.get("https://dummyjson.com/products/" + id);
  return response?.data;
};

export const getprodutsbyCate = async (cate) => {
  const response = await axios.get(
    "https://dummyjson.com/products//category/" + cate
  );
  return response?.data;
};
