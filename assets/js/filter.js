import { fetchData } from "./api.js";

export async function filterData() {
  try {
    const products = await fetchData().then((data) => {
      data.forEach((product) => {
        product.charges = product.charges.trim();
        const chargesArray = product.charges.split(" ").map(Number);
        product.lowestCharge = Math.min(...chargesArray);        
      });
      return data;
    });
    return products;
  } catch (err) {
    console.log(err);
  }
}








