
import { filterData } from "./filter.js";


async function main() {
  try {
    const filtereddata = await filterData();
    filtereddata.forEach((product) => {
      const productName = product.productName;
      const charges = product.charges;
      const lowestCharge = product.lowestCharge;
      const pricingPlanName = product.pricingPlanNames;
      document.getElementById(
        "product-pricing-plans"
      ).innerHTML += `<h5>${productName}</h5><p>${pricingPlanName}</p><p>${charges}</p><p>from ${lowestCharge}</p>`;
    });
  } catch (error) {
    console.log(error);
  }
}



main(); 


