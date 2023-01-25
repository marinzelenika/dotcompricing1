import { fetchData } from "./api.js";

export async function filterData() {
  try {
    const products = await fetchData();
    console.log(products[0]);
    return products;
  } catch (err) {
    console.log(err);
  }
}






