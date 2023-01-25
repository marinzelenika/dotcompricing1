
import { filterData } from "./filter.js";


async function main() {
  try {
    const filtereddata = await filterData();
    filtereddata.forEach((product) => {
      const productName = product.productName;
      const lowestCharge = product.lowestCharge;
      document.getElementById(
        "product-pricing-plans"
      ).innerHTML += `<h5>${productName}</h5><p>${lowestCharge}</p>`;
    });
  } catch (error) {
    console.log(error);
  }
}



main(); 

