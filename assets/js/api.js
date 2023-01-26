export async function fetchData() {
  try {
    const response = await fetch(
      "https://purchase-api.dynabic.com/v1.2/productFamily/site-aspose?isArchived=&pageNumber=&pageSize=&applyDisplayOrder=true&includeProducts=false&enabledPPPOn=&clientkey=a&signature=jc_xWmdMtA-nMA2Bgp9vuEV0Kn0"
    );
    const data = await response.json();
    let products = [];
    
    const fetchPromises = data.map((productFamily) => {
      return fetch(
        "https://purchase-api.dynabic.com/v1.2/productFamily/site-aspose/name-" +
          productFamily.Name
      )
        .then((response) => response.json())
        .then((data) => {
          let productFamilyData = data.Products;
           productFamilyData.forEach((product) => {
             let productName = product.Name;
             let charges = [];
             let pricingPlanNames = [];
             product.PricingPlans.filter(
               (plan) => plan.DisplayOrder > 0 && !plan.Name.includes("Metered")
             )
               .sort((a, b) => a.DisplayOrder - b.DisplayOrder)
               .forEach((plan) => {
                 pricingPlanNames.push(plan.Name);
                 plan.PaymentScheduleList.forEach((schedule) => {
                   charges += schedule.SubscriptionPeriodCharge + " ";
                 });
               });
             products.push({
               productName: productName,
               charges: charges,
               pricingPlanNames: pricingPlanNames,
             });
           });





        });
    });
    await Promise.all(fetchPromises);
    return products;
  } catch (err) {
    console.log(err);
  }
}
