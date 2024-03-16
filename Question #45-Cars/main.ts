// 45- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carDetails(
  manufacturer: string,
  model: string,
  ...extra_feature: [string, any][]
): Object {
  // type any - now it will store anything
  let myCar: any = {
    manufacturer,
    model,
  };

  extra_feature.forEach(([key, value]) => {
    myCar[key] = value;
  });

  return myCar;
}

console.log(carDetails("BMW", "X5", ["color", "Alpine White"], ["year", 2024]));
